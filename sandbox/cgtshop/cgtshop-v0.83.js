/* =======================================
   CGTShop v0.83 Logic — Refined Build
   ======================================= */

window.addEventListener("load", () => {

  const SUPPLY = 350_000_000;
  let day = 1;
  let price = 10_000 / SUPPLY;
  let bias = 80; // %
  let locked = false;
  let chosenPath = null;
  let sliderInput = null;
  let hasOutcomeShown = false;

  const $ = s => document.querySelector(s);
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const rand = (min, max) => Math.random() * (max - min) + min;
  const mc = () => price * SUPPLY;
  const fmtUSD = (n, d = 8) => {
    const o = {
      minimumFractionDigits: (n < 1 ? d : 2),
      maximumFractionDigits: (n < 1 ? d : 2)
    };
    return "$" + n.toLocaleString(undefined, o);
  };

  /* === DOM Elements === */
  const elDay = $("#day");
  const elPrice = $("#price");
  const elMC = $("#mc");
  const elTitle = $("#title");
  const elDesc = $("#desc");
  const elControls = $("#controls");
  const elOutcomeWrap = $("#outcomeWrap");
  const elBigMsg = $("#bigMsg");
  const elOutcomeBox = $("#outcomeBox");
  const elNext = $("#next");
  const elRestart = $("#restart");
  const elCard = $("#card");

  const elConsBtn = $("#consBtn");
  const elBoldBtn = $("#boldBtn");
  const elChoiceRow = $("#choiceRow");
  const elSliderBlock = $("#sliderBlock");
  const elCommitRow = $("#commitRow");
  const elHintRow = $("#hintRow");
  const elCommit = $("#commit");
  const elChangeMind = $("#changeMind");

  const elBiasHUD = $("#biasHUD");
  const elBiasSlider = $("#biasSlider");
  const elBiasValue = $("#biasValue");

  let founderScenarios =
    (window.CGT_SCENARIOS && window.CGT_SCENARIOS.founder) || [];

  if (!Array.isArray(founderScenarios) || founderScenarios.length === 0) {
    founderScenarios = [
      {
        subBand: "F-B1-0.1",
        marketCap: "$10 K",
        focus: "First spark",
        context: "Barely off the ground; prototype exists, but nobody’s watching.",
        tone: "risky",
        outcomeA: "Early adopters rally behind the MVP, posting screenshots and feedback that spark a viral micro-wave of credibility.",
        outcomeB: "Launch exposes half-finished systems; bugs and confusion dominate the narrative, causing early trust erosion.",
        outcomeC: "A few testers privately confirm the build’s strength; quiet progress builds word-of-mouth trust.",
        outcomeD: "Delays frustrate insiders who drift away, leaving the project isolated before momentum forms."
      }
    ];
  }

  /* === HUD === */
  function updateHUD() {
    elDay.textContent = day;
    elPrice.textContent = fmtUSD(price, 8);
    elMC.textContent = fmtUSD(mc());
  }

  /* === Typewriter === */
  async function typewrite(el, text, speed = 28) {
    el.textContent = "";
    for (let i = 0; i < text.length; i++) {
      el.textContent += text[i];
      await sleep(speed);
    }
  }

  /* === Slider Rendering === */
  function getBandRange(subBand) {
    const parts = (subBand || "").split("-");
    const band = parts[1] || "";
    let max = 3.0;
    if (band === "B1") max = 5.0;
    else if (band === "B2") max = 4.0;
    else if (band === "B3") max = 3.0;
    else if (band === "B4") max = 2.0;
    else if (band === "B5") max = 1.0;
    return { min: 0.1, max, step: 0.1 };
  }

  function renderSlider(range, path) {
    elSliderBlock.innerHTML = "";
    const labelRow = document.createElement("div");
    labelRow.className = "slider-label-row";

    const lbl = document.createElement("div");
    lbl.className = "label";
    lbl.textContent = "Risk multiplier";

    const val = document.createElement("div");
    val.className = "slider-value";
    val.id = "sliderValue";

    labelRow.appendChild(lbl);
    labelRow.appendChild(val);

    const wrap = document.createElement("div");
    wrap.className = "sliderWrap";

    const input = document.createElement("input");
    input.type = "range";
    input.min = range.min;
    input.max = range.max;
    input.step = range.step;
    input.value = range.min;

    const updateLabel = () => {
      val.textContent = parseFloat(input.value).toFixed(1) + "×";
    };
    input.addEventListener("input", updateLabel);
    updateLabel();
    wrap.appendChild(input);

    // Flip slider for conservative
    wrap.style.transform = path === "conservative" ? "scaleX(-1)" : "none";

    elSliderBlock.appendChild(labelRow);
    elSliderBlock.appendChild(wrap);

    elSliderBlock.style.display = "block";
    elCommitRow.style.display = "flex";
    elHintRow.style.display = "block";
    elCommitRow.style.flexDirection = path === "bold" ? "row-reverse" : "row";

    sliderInput = input;
  }

  /* === Decision UI === */
  function resetDecisionUI() {
    chosenPath = null;
    elConsBtn.classList.remove("selected");
    elBoldBtn.classList.remove("selected");
    elChoiceRow.style.display = "flex";
    elSliderBlock.style.display = "none";
    elCommitRow.style.display = "none";
    elHintRow.style.display = "none";
    elCard.classList.remove("bold-mode", "cons-mode");
  }

  function choosePath(path, range) {
    chosenPath = path;
    elChoiceRow.style.display = "none";
    elCard.classList.toggle("bold-mode", path === "bold");
    elCard.classList.toggle("cons-mode", path === "conservative");
    renderSlider(range, path);
  }

  /* === New Scenario === */
  async function newScenario() {
    locked = false;
    hasOutcomeShown = false;
    resetDecisionUI();

    elOutcomeWrap.style.display = "none";
    elTitle.textContent = "Loading…";
    elDesc.textContent = "";
    elControls.style.opacity = 0;

    const s = founderScenarios[Math.min(day - 1, founderScenarios.length - 1)];

    await sleep(400);

    // Cinematic title
    const titleText = s.subBand ? `${s.subBand} · ${s.focus}` : s.focus;
    elTitle.textContent = titleText;

    // ✅ Remove duplicate stats; only show context + tone/ref
    const intro =
      (s.context || "") +
      "\n\n" +
      `Tone: ${s.tone || "neutral"} · Ref MC: ${s.marketCap || ""}`;
    await typewrite(elDesc, intro, 26);

    elControls.style.opacity = 1;

    const range = getBandRange(s.subBand);
    elConsBtn.onclick = () => choosePath("conservative", range);
    elBoldBtn.onclick = () => choosePath("bold", range);
  }

  /* === Outcome === */
  function resolveDecision() {
    if (locked || !chosenPath || !sliderInput) return;
    const s = founderScenarios[Math.min(day - 1, founderScenarios.length - 1)];
    const mult = parseFloat(sliderInput.value);
    const isFav = Math.random() < bias / 100;
    const outcomeText =
      chosenPath === "bold"
        ? isFav
          ? s.outcomeA
          : s.outcomeB
        : isFav
        ? s.outcomeC
        : s.outcomeD;
    applyOutcome(isFav, mult, outcomeText, s);
    locked = true;
  }

  function applyOutcome(isFav, mult, text, s) {
    const oldMC = mc();
    const newMC = isFav ? oldMC * mult : oldMC / Math.max(mult, 0.1);
    price = newMC / SUPPLY;
    showOutcome(isFav, mult, text, s, oldMC, newMC);
  }

  function showOutcome(isFav, mult, text, s, oldMC, newMC) {
    hasOutcomeShown = true;
    elControls.style.opacity = 0;

    elBigMsg.className = "bigMsg " + (isFav ? "good" : "bad");
    elBigMsg.textContent = `${chosenPath === "bold" ? "Bold" : "Conservative"} move\n${isFav ? "Favourable" : "Unfavourable"} outcome`;

    const mcChangePct = ((newMC - oldMC) / oldMC) * 100;
    const pctStr = (mcChangePct >= 0 ? "+" : "") + mcChangePct.toFixed(1) + "%";

    const priceLine = `Price: <b>${fmtUSD(oldMC / SUPPLY, 8)}</b> → <b>${fmtUSD(price, 8)}</b>`;
    const mcLine = `Market Cap: <b>${fmtUSD(oldMC)}</b> → <b>${fmtUSD(newMC)}</b>`;

    elOutcomeBox.className = "outcome " + (isFav ? "goodBox" : "badBox");
    elOutcomeBox.innerHTML = `
      <div class="big">${isFav ? "Gain" : "Loss"} (${pctStr})</div>
      <div>${priceLine}</div>
      <div class="muted">${mcLine}</div>
      <div style="margin-top:10px;">${text}</div>
      <div class="muted" style="margin-top:10px;">${s.focus}</div>
    `;

    elOutcomeWrap.style.display = "block";
    elNext.style.display = price <= 0 ? "none" : "inline-block";
    elRestart.style.display = price <= 0 ? "inline-block" : "none";

    updateHUD();
  }

  /* === Flow === */
  function nextDay() {
    if (price <= 0) return;
    day++;
    updateHUD();
    newScenario();
  }
  function restartGame() {
    day = 1;
    price = 10_000 / SUPPLY;
    updateHUD();
    newScenario();
  }

  /* === Bias HUD === */
  function updateBiasFromSlider() {
    bias = parseInt(elBiasSlider.value, 10);
    elBiasValue.textContent = bias + "%";
  }
  function toggleBiasHUD() {
    elBiasHUD.style.display =
      elBiasHUD.style.display === "block" ? "none" : "block";
  }

  /* === Init === */
  (function init() {
    updateHUD();
    updateBiasFromSlider();

    elBiasSlider.addEventListener("input", updateBiasFromSlider);
    elCommit.addEventListener("click", resolveDecision);
    elChangeMind.addEventListener("click", () => {
      if (!locked) resetDecisionUI();
    });
    elNext.addEventListener("click", nextDay);
    elRestart.addEventListener("click", restartGame);

    elCard.addEventListener("click", e => {
      if (!hasOutcomeShown) return;
      if (e.target.closest(".panel-inner") || e.target.closest(".btn") || e.target.closest("#biasHUD")) return;
      nextDay();
    });

    document.addEventListener("touchstart", e => {
      if (e.touches && e.touches.length >= 2) {
        e.preventDefault();
        toggleBiasHUD();
      }
    }, { passive: false });

    document.addEventListener("keydown", e => {
      if (e.key.toLowerCase() === "b") toggleBiasHUD();
    });

    newScenario();
  })();
});
