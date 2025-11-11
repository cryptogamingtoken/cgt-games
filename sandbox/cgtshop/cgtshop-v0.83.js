// cgtshop-v0.83.js

window.addEventListener("load", function () {
  /* ---------- Base State ---------- */
  var SUPPLY = 350000000;
  var day = 1;
  var price = 10000 / SUPPLY; // initial from 10k MC
  var bias = 80; // % favourable (default)

  var currentScenario = null;
  var currentPath = null; // "bold" or "conservative"
  var canGoNextDay = false;

  /* ---------- Helpers ---------- */
  function mc() {
    return price * SUPPLY;
  }

  function fmtUSD(n, d) {
    if (d === undefined) d = 2;
    return (
      "$" +
      n.toLocaleString(undefined, {
        minimumFractionDigits: d,
        maximumFractionDigits: d,
      })
    );
  }

  function parseMarketCapString(str) {
    if (!str) return 0;
    var s = String(str).trim().toUpperCase().replace(/,/g, "");
    var num = parseFloat(s.replace(/[^0-9.]/g, "")) || 0;
    if (s.indexOf("K") !== -1) num *= 1000;
    else if (s.indexOf("M") !== -1) num *= 1000000;
    else if (s.indexOf("B") !== -1) num *= 1000000000;
    return num;
  }

  function bandMaxFromSubBand(subBand) {
    // e.g. "F-B1-0.1"
    var max = 3;
    if (!subBand) return { min: 0.1, max: 3 };
    var m = subBand.match(/B(\d)/);
    var band = m ? m[1] : "3";
    if (band === "1") max = 5;
    else if (band === "2") max = 4;
    else if (band === "3") max = 3;
    else if (band === "4") max = 2;
    else if (band === "5") max = 1;
    return { min: 0.1, max: max };
  }

  function chooseScenarioForMC(currentMC) {
    var data =
      (window.CGT_SCENARIOS && window.CGT_SCENARIOS.founder) ||
      window.FOUNDER_SCENES ||
      [];
    if (!data || !data.length) return null;

    var best = data[0];
    var bestDiff = Math.abs(
      parseMarketCapString(data[0].marketCap) - currentMC
    );

    for (var i = 1; i < data.length; i++) {
      var ref = parseMarketCapString(data[i].marketCap);
      var diff = Math.abs(ref - currentMC);
      if (diff < bestDiff) {
        bestDiff = diff;
        best = data[i];
      }
    }
    return best;
  }

  /* ---------- Build UI into #game ---------- */
  var gameRoot = document.getElementById("game");
  if (!gameRoot) {
    return;
  }

  gameRoot.innerHTML = `
    <div id="hud" style="margin-bottom:12px;font-size:14px;">
      <div>Day: <span id="hudDay">1</span></div>
      <div>Price: <span id="hudPrice">$0.00000000</span></div>
      <div>Market Cap: <span id="hudMC">$0</span></div>
    </div>

    <h2 id="sceneTitle" style="margin:10px 0 6px;font-size:18px;"></h2>
    <p id="sceneContext" style="margin:0 10px 14px;font-size:14px;line-height:1.4;"></p>

    <div id="decisionRow" style="display:flex;justify-content:center;gap:8px;margin:12px 0;">
      <button id="consBtn" style="padding:8px 12px;border-radius:8px;border:1px solid #1c3e2b;background:#12251a;color:#a6f5b6;font-size:14px;">
        Conservative
      </button>
      <button id="boldBtn" style="padding:8px 12px;border-radius:8px;border:1px solid #23446d;background:#142338;color:#9ac4ff;font-size:14px;">
        Bold
      </button>
    </div>

    <div id="sliderBlock" style="display:none;margin-top:10px;">
      <div style="font-size:13px;margin-bottom:4px;">Risk multiplier</div>
      <input id="riskSlider" type="range" min="0.1" max="5" step="0.1" value="0.1" style="width:90%;">
      <div id="sliderValue" style="margin-top:4px;font-size:13px;">0.1×</div>
      <div style="margin-top:8px;display:flex;justify-content:center;gap:8px;">
        <button id="changeMindBtn" style="padding:6px 10px;border-radius:8px;border:1px solid #555;background:#111;color:#eee;font-size:13px;">
          Change Mind 🧠
        </button>
        <button id="commitBtn" style="padding:6px 10px;border-radius:8px;border:1px solid #2a7bd4;background:#153255;color:#d0e2ff;font-size:13px;">
          Commit decision
        </button>
      </div>
    </div>

    <div id="outcomeBlock" style="display:none;margin-top:16px;">
      <div id="bigOutcome" style="font-size:18px;font-weight:bold;margin-bottom:6px;"></div>
      <div id="detailOutcome" style="font-size:14px;"></div>
    </div>
  `;

  var elHudDay = document.getElementById("hudDay");
  var elHudPrice = document.getElementById("hudPrice");
  var elHudMC = document.getElementById("hudMC");
  var elSceneTitle = document.getElementById("sceneTitle");
  var elSceneContext = document.getElementById("sceneContext");
  var elDecisionRow = document.getElementById("decisionRow");
  var elConsBtn = document.getElementById("consBtn");
  var elBoldBtn = document.getElementById("boldBtn");
  var elSliderBlock = document.getElementById("sliderBlock");
  var elRiskSlider = document.getElementById("riskSlider");
  var elSliderValue = document.getElementById("sliderValue");
  var elChangeMindBtn = document.getElementById("changeMindBtn");
  var elCommitBtn = document.getElementById("commitBtn");
  var elOutcomeBlock = document.getElementById("outcomeBlock");
  var elBigOutcome = document.getElementById("bigOutcome");
  var elDetailOutcome = document.getElementById("detailOutcome");

  /* ---------- Bias HUD (hidden, 2-finger tap) ---------- */
  var biasHUD = document.createElement("div");
  biasHUD.id = "biasHUD";
  biasHUD.style.position = "fixed";
  biasHUD.style.top = "10px";
  biasHUD.style.right = "10px";
  biasHUD.style.padding = "10px";
  biasHUD.style.borderRadius = "10px";
  biasHUD.style.border = "1px solid #2a7bd4";
  biasHUD.style.background = "rgba(5,10,20,0.9)";
  biasHUD.style.backdropFilter = "blur(6px)";
  biasHUD.style.color = "#d0e2ff";
  biasHUD.style.fontSize = "12px";
  biasHUD.style.display = "none";
  biasHUD.style.zIndex = "999";

  biasHUD.innerHTML = `
    <div style="margin-bottom:6px;font-weight:bold;">🎲 Favourable bias: <span id="biasValue">80%</span></div>
    <input id="biasSlider" type="range" min="10" max="90" step="5" value="80" style="width:100%;">
    <div style="margin-top:6px;font-size:11px;opacity:0.8;">
      2-finger tap to toggle this overlay.
    </div>
    <div style="margin-top:6px;font-size:11px;">
      <div>Ref: <span id="hudRef">—</span></div>
      <div>Tone: <span id="hudTone">—</span></div>
      <div>Ref MC: <span id="hudRefMC">—</span></div>
    </div>
  `;
  document.body.appendChild(biasHUD);

  var elBiasValue = document.getElementById("biasValue");
  var elBiasSlider = document.getElementById("biasSlider");
  var elHudRef = document.getElementById("hudRef");
  var elHudTone = document.getElementById("hudTone");
  var elHudRefMC = document.getElementById("hudRefMC");

  function setBiasFromSlider() {
    bias = parseInt(elBiasSlider.value, 10) || 80;
    elBiasValue.textContent = bias + "%";
  }
  setBiasFromSlider();
  elBiasSlider.addEventListener("input", setBiasFromSlider, false);

  function toggleBiasHUD() {
    biasHUD.style.display = biasHUD.style.display === "none" ? "block" : "none";
  }

  document.addEventListener(
    "touchstart",
    function (e) {
      if (e.touches && e.touches.length >= 2) {
        e.preventDefault();
        toggleBiasHUD();
      }
    },
    { passive: false }
  );

  // Optional: 'b' key toggles on desktop
  document.addEventListener("keydown", function (e) {
    if (e.key === "b" || e.key === "B") toggleBiasHUD();
  });

  /* ---------- HUD Update ---------- */
  function updateHUD() {
    elHudDay.textContent = String(day);
    elHudPrice.textContent = fmtUSD(price, 8);
    elHudMC.textContent = fmtUSD(mc(), 2);
  }

  /* ---------- Scene Loading ---------- */
  function loadScenarioForCurrentMC() {
    var scenario = chooseScenarioForMC(mc());
    currentScenario = scenario;
    currentPath = null;
    canGoNextDay = false;

    if (!scenario) {
      elSceneTitle.textContent = "No scenario available";
      elSceneContext.textContent = "";
      elDecisionRow.style.display = "none";
      elSliderBlock.style.display = "none";
      elOutcomeBlock.style.display = "none";
      return;
    }

    // Stakeholder name is "Founders" for this sheet
    var title = "Founders · " + (scenario.focus || "");
    elSceneTitle.textContent = title;
    elSceneContext.textContent = scenario.context || "";

    // HUD meta
    elHudRef.textContent = scenario.subBand || "—";
    elHudTone.textContent = scenario.tone || "—";
    elHudRefMC.textContent = scenario.marketCap || "—";

    // Reset UI
    elDecisionRow.style.display = "flex";
    elSliderBlock.style.display = "none";
    elOutcomeBlock.style.display = "none";
    elRiskSlider.value = 0.1;
    elSliderValue.textContent = "0.1×";
  }

  /* ---------- Decision & Slider ---------- */
  function applySliderStylingForPath(path) {
    if (path === "bold") {
      // Bold → blue, right-side emphasis
      elRiskSlider.style.background =
        "linear-gradient(90deg, rgba(100,160,255,0.9) 0%, rgba(15,20,35,0.9) 100%)";
    } else {
      // Conservative → green, left-side emphasis
      elRiskSlider.style.background =
        "linear-gradient(270deg, rgba(120,240,150,0.9) 0%, rgba(15,20,35,0.9) 100%)";
    }
  }

  function showSliderForPath(path) {
    currentPath = path;
    elDecisionRow.style.display = "none";
    elSliderBlock.style.display = "block";

    var range = bandMaxFromSubBand(
      currentScenario ? currentScenario.subBand : null
    );
    elRiskSlider.min = range.min;
    elRiskSlider.max = range.max;
    elRiskSlider.step = 0.1;
    elRiskSlider.value = range.min;
    elSliderValue.textContent = range.min.toFixed(1) + "×";

    applySliderStylingForPath(path);
  }

  elRiskSlider.addEventListener(
    "input",
    function () {
      var v = parseFloat(elRiskSlider.value || "0.1");
      elSliderValue.textContent = v.toFixed(1) + "×";
    },
    false
  );

  elConsBtn.addEventListener(
    "click",
    function () {
      showSliderForPath("conservative");
    },
    false
  );

  elBoldBtn.addEventListener(
    "click",
    function () {
      showSliderForPath("bold");
    },
    false
  );

  elChangeMindBtn.addEventListener(
    "click",
    function () {
      if (canGoNextDay) return;
      currentPath = null;
      elSliderBlock.style.display = "none";
      elDecisionRow.style.display = "flex";
    },
    false
  );

  /* ---------- Outcome Logic ---------- */
  function resolveDecision() {
    if (!currentScenario || !currentPath || canGoNextDay) return;

    var mult = parseFloat(elRiskSlider.value || "0.1");
    if (isNaN(mult) || mult <= 0) mult = 0.1;

    var favourable = Math.random() * 100 < bias;

    // MC impact formula: ±(mult) → +500% at 5.0x
    var oldMC = mc();
    var changeFactor = favourable ? (1 + mult) : Math.max(0, 1 - mult);
    var newMC = oldMC * changeFactor;

    price = newMC / SUPPLY;
    updateHUD();

    // Display outcome
    canGoNextDay = true;
    elOutcomeBlock.style.display = "block";

    var pct = (mult * 100).toFixed(0);
    var sign = favourable ? "+" : "−";

    var headline = "";
    if (favourable) {
      headline = currentPath === "bold" ? "Bold move pays off" : "Patience rewarded";
    } else {
      headline = currentPath === "bold" ? "Overreach burns gains" : "Caution costs upside";
    }

    elBigOutcome.textContent = headline + " (" + sign + pct + "%)";
    elBigOutcome.style.color = favourable ? "#7cf08a" : "#ff8a8a";

    var detail =
      "Market Cap: <b>" +
      fmtUSD(oldMC, 2) +
      "</b> → <b>" +
      fmtUSD(newMC, 2) +
      "</b><br/>" +
      "Path: " +
      (currentPath === "bold" ? "Bold" : "Conservative") +
      " · " +
      (favourable ? "Favourable" : "Unfavourable") +
      " outcome";
    elDetailOutcome.innerHTML = detail;
  }

  elCommitBtn.addEventListener("click", resolveDecision, false);

  /* ---------- Tap Anywhere → Next Day ---------- */
  document.addEventListener(
    "click",
    function (e) {
      if (!canGoNextDay) return;
      // ignore clicks on buttons / HUD
      if (e.target.closest("#sliderBlock") || e.target.closest("button") || e.target.closest("#biasHUD")) {
        return;
      }
      day += 1;
      canGoNextDay = false;
      loadScenarioForCurrentMC();
      updateHUD();
    },
    false
  );

  /* ---------- Init ---------- */
  updateHUD();
  loadScenarioForCurrentMC();
});
