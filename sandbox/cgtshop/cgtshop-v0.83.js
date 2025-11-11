/* =======================================
   CGT Shop v0.83 – Stable iOS Version
   ======================================= */

// Inject HTML if missing (for GitHub Pages & mobile Safari)
const gameCard = document.querySelector('#game');
if (gameCard && gameCard.children.length === 0) {
  gameCard.innerHTML = `
    <div id="flash" class="flash"><div id="flashInner"></div></div>

    <h1 id="title" class="headline"></h1>
    <p id="desc" class="type"></p>

    <div id="controls" class="panel" style="opacity:0;">
      <div class="panel-inner">
        <div class="row choice-row" id="choiceRow">
          <button id="consBtn" class="btn choice cons">Conservative path</button>
          <button id="boldBtn" class="btn choice bold">Bold path</button>
        </div>
        <div id="sliderBlock"></div>
        <div class="row" id="commitRow" style="margin-top:10px; display:none;">
          <button id="changeMind" class="btn">Change Mind 🧠</button>
          <button id="commit" class="btn">Commit decision</button>
        </div>
        <div class="muted" id="hintRow" style="margin-top:4px; display:none;">
          Adjust your multiplier, then commit. Change your mind if you want to pick the other path.
        </div>
      </div>
    </div>

    <div id="outcomeWrap" class="outcomeWrap" style="display:none;">
      <div id="bigMsg" class="bigMsg"></div>
      <div id="outcomeBox" class="outcome"></div>
      <div class="center">
        <button id="next" class="btn">Next day ▶️</button>
        <button id="restart" class="btn" style="display:none;">Restart 🔁</button>
      </div>
    </div>

    <div id="biasHUD" class="bias-hud" style="display:none;">
      <div class="bias-hud-header">
        <span>🎯 Favourable bias</span>
        <span id="biasValue">80%</span>
      </div>
      <input type="range" id="biasSlider" min="10" max="90" step="5" value="80" />
      <div class="muted" style="margin-top:4px;">Two-finger tap (or press “B”) to toggle during testing.</div>
      <div class="meta"><b>Ref:</b> <span id="metaRef">—</span></div>
      <div class="meta"><b>Tone:</b> <span id="metaTone">—</span></div>
      <div class="meta"><b>MC:</b> <span id="metaMC">—</span></div>
    </div>
  `;
}

// ✅ visible proof that JS loaded
document.body.insertAdjacentHTML('beforeend', '<div style="color:#0f0;font-size:12px;">✅ cgtshop-v0.83.js running</div>');

/* ==== Core state ==== */
const SUPPLY = 350_000_000;
let day = 1;
let price = 10_000 / SUPPLY;
let bias = 80;
let locked = false;
let chosenPath = null;
let sliderInput = null;
let hasOutcomeShown = false;
let currentScenario = null;

/* ==== Helpers ==== */
const $ = s => document.querySelector(s);
const sleep = ms => new Promise(r => setTimeout(r, ms));

function mc() {
  return price * SUPPLY;
}

function fmtUSD(n, d = 8) {
  const o = {
    minimumFractionDigits: (n < 1 ? d : 2),
    maximumFractionDigits: (n < 1 ? d : 2)
  };
  return '$' + n.toLocaleString(undefined, o);
}

/* ==== DOM ==== */
const $ = s => document.querySelector(s);
const elDay        = $('#hudDay');
const elPrice      = $('#hudPrice');
const elMC         = $('#hudMC');
const elTitle      = $('#title');
const elDesc       = $('#desc');
const elControls   = $('#controls');
const elOutcomeWrap= $('#outcomeWrap');
const elBigMsg     = $('#bigMsg');
const elOutcomeBox = $('#outcomeBox');
const elNext       = $('#next');
const elRestart    = $('#restart');
const elCard       = $('#game');

const elConsBtn    = $('#consBtn');
const elBoldBtn    = $('#boldBtn');
const elChoiceRow  = $('#choiceRow');
const elSliderBlock= $('#sliderBlock');
const elCommitRow  = $('#commitRow');
const elHintRow    = $('#hintRow');
const elCommit     = $('#commit');
const elChangeMind = $('#changeMind');

const elFlash      = $('#flash');
const elFlashInner = $('#flashInner');

const elBiasHUD    = $('#biasHUD');
const elBiasSlider = $('#biasSlider');
const elBiasValue  = $('#biasValue');
const elMetaRef    = $('#metaRef');
const elMetaTone   = $('#metaTone');
const elMetaMC     = $('#metaMC');

/* ==== Data from founder-data.js ==== */
let founderScenarios = (window.CGT_SCENARIOS && window.CGT_SCENARIOS.founder) || [];
if(!Array.isArray(founderScenarios) || founderScenarios.length === 0){
  founderScenarios = [{
    subBand:'F-B1-0.1',
    marketCap:'$10 K',
    focus:'First spark',
    context:'Barely off the ground; prototype exists, but nobody’s watching.',
    tone:'risky',
    outcomeA:'Early adopters rally behind the MVP, posting screenshots and feedback that spark a viral micro-wave of credibility.',
    outcomeB:'Launch exposes half-finished systems; bugs and confusion dominate the narrative, causing early trust erosion.',
    outcomeC:'A few testers privately confirm the build’s strength; quiet progress builds word-of-mouth trust.',
    outcomeD:'Delays frustrate insiders who drift away, leaving the project isolated before momentum forms.'
  }];
}

/* ==== HUD ==== */
function updateHUD(){
  elDay.textContent   = String(day);
  elPrice.textContent = fmtUSD(price,8);
  elMC.textContent    = fmtUSD(mc());
}

/* ==== Typewriter ==== */
async function typewrite(el, text, speed=26){
  el.textContent = '';
  for(let i=0;i<text.length;i++){
    el.textContent += text[i];
    await sleep(speed);
  }
}

/* ==== Clue overlay ==== */
async function maybeShowClueBlocking(){
  const p = Math.random();
  if(p < 0.18){ // ~18% chance
    const msgs = [
      "Community buzz rising",
      "Regulatory fog ahead",
      "Infra feels solid",
      "Liquidity thin",
      "Streamer whispers…"
    ];
    elFlashInner.textContent = msgs[Math.floor(Math.random()*msgs.length)] || "Signal…";
    elFlash.classList.add('show');
    await sleep(4600);
    elFlash.classList.remove('show');
    await sleep(700);
  }
}
/* ==== MC helper + scenario picker ==== */
// Parse things like "$10 K", "$2.5 M", "$100 B +"
function parseRefMC(str){
  if (!str) return 0;
  const cleaned = String(str).replace('+','').trim();
  const m = cleaned.match(/([\d.]+)\s*([KMB])/i);
  if (!m) return 0;
  const value = parseFloat(m[1]);
  const unit  = m[2].toUpperCase();
  const mul   = unit === 'K' ? 1e3 : unit === 'M' ? 1e6 : 1e9;
  return value * mul;
}

// Pick the scenario whose Ref MC is closest to the current MC
function pickScenarioForMC(curMC, list){
  let best = null;
  let bestDiff = Infinity;
  for (const s of list){
    const ref = parseRefMC(s.marketCap);
    if (!ref) continue;
    const diff = Math.abs(ref - curMC);
    if (diff < bestDiff){
      bestDiff = diff;
      best = s;
    }
  }
  return best || list[0];
}
/* ==== Slider ranges per band ==== */
function getBandRange(subBand){
  const parts = (subBand || '').split('-'); // e.g. F-B2-0.3
  const band = parts[1] || '';
  let max = 3.0;
  if (band === 'B1') max = 5.0;
  else if (band === 'B2') max = 4.0;
  else if (band === 'B3') max = 3.0;
  else if (band === 'B4') max = 2.0;
  else if (band === 'B5') max = 1.0;
  return {min:0.1, max, step:0.1};
}

/* ==== Slider rendering ==== */
function renderSlider(range, path){
  elSliderBlock.innerHTML = '';

  const labelRow = document.createElement('div');
  labelRow.className = 'slider-label-row';

  const lbl = document.createElement('div');
  lbl.className = 'label';
  lbl.textContent = 'Risk multiplier';

  const val = document.createElement('div');
  val.className = 'slider-value';
  val.id = 'sliderValue';

  labelRow.appendChild(lbl);
  labelRow.appendChild(val);

  const wrap = document.createElement('div');
  wrap.className = 'sliderWrap';

  const input = document.createElement('input');
  input.type = 'range';
  input.min  = range.min;
  input.max  = range.max;
  input.step = range.step;
  input.value = range.min;

  const updateLabel = () => {
    const v = parseFloat(input.value || range.min);
    val.textContent = v.toFixed(1) + '×';
  };
  input.addEventListener('input', updateLabel);
  updateLabel();
  wrap.appendChild(input);

  // Conservative: visual right→left feel
  wrap.style.transform = (path === 'conservative') ? 'scaleX(-1)' : 'none';

  elSliderBlock.appendChild(labelRow);
  elSliderBlock.appendChild(wrap);

  elSliderBlock.style.display = 'block';
  elCommitRow.style.display   = 'flex';
  elHintRow.style.display     = 'block';

  // Button order: conservative = Commit | Change, bold = Change | Commit
  elCommitRow.style.flexDirection = (path === 'bold') ? 'row-reverse' : 'row';

  sliderInput = input;
}

/* ==== Decision UI ==== */
function resetDecisionUI(){
  chosenPath = null;
  sliderInput = null;
  elChoiceRow.style.display   = 'flex';
  elSliderBlock.style.display = 'none';
  elCommitRow.style.display   = 'none';
  elHintRow.style.display     = 'none';
  elCard.classList.remove('bold-mode','cons-mode');
}

function choosePath(path, range){
  chosenPath = path;
  elChoiceRow.style.display = 'none';

  if(path === 'bold'){
    elCard.classList.add('bold-mode');
    elCard.classList.remove('cons-mode');
  } else {
    elCard.classList.add('cons-mode');
    elCard.classList.remove('bold-mode');
  }

  renderSlider(range, path);
}

/* ==== New scenario ==== */
async function newScenario(){
  locked = false;
  hasOutcomeShown = false;
  resetDecisionUI();

  elOutcomeWrap.style.display = 'none';
  elTitle.textContent = 'Loading…';
  elDesc.textContent  = '';
  elControls.style.opacity = 0;

  await maybeShowClueBlocking();

  // Pick by current MC
  currentScenario = pickScenarioForMC(mc(), founderScenarios);
  const s = currentScenario;

  // Reset title animation (class is in CSS)
  elTitle.style.animation = 'none';
  void elTitle.offsetWidth;
  elTitle.style.animation = null;

  const titleText = `Founders · ${s.focus || "Untitled"}`;
  elTitle.textContent = titleText;

  // Main card: ONLY context (no tone/ref)
  await sleep(1600 + 250);
  await typewrite(elDesc, s.context || '', 26);

  // Update HUD meta (bias panel) if present
  if(elMetaRef)  elMetaRef.textContent  = s.subBand || '—';
  if(elMetaTone) elMetaTone.textContent = s.tone || '—';
  if(elMetaMC)   elMetaMC.textContent   = s.marketCap || '—';

  await sleep(250);
  elControls.style.opacity = 1;

  const bandRange = getBandRange(s.subBand);
  elConsBtn.onclick = () => choosePath('conservative', bandRange);
  elBoldBtn.onclick = () => choosePath('bold', bandRange);
}

/* ==== Outcome logic ==== */
function resolveDecision(){
  if(locked) return;
  if(!currentScenario) return;

  if(!chosenPath){
    alert('Choose Conservative or Bold first.');
    return;
  }
  if(!sliderInput){
    alert('Set your multiplier before committing.');
    return;
  }

  const range = getBandRange(currentScenario.subBand);
  let mult = parseFloat(sliderInput.value || range.min);
  mult = Math.max(range.min, Math.min(range.max, mult));

  const isFavourable = Math.random() < (bias / 100);
  const s = currentScenario;

  let outcomeText = '';
  if(chosenPath === 'bold'){
    outcomeText = isFavourable ? (s.outcomeA || '') : (s.outcomeB || '');
  }else{
    outcomeText = isFavourable ? (s.outcomeC || '') : (s.outcomeD || '');
  }

  applyOutcome(isFavourable, mult, outcomeText, s);
  locked = true;
}

function applyOutcome(isFav, mult, text, scenario){
  const oldMC = mc();
  let newMC;

  if(isFav){
    newMC = oldMC * mult;
  }else{
    const safe = Math.max(mult, 0.1);
    newMC = oldMC / safe;
  }

  price = newMC / SUPPLY;
  showOutcome(isFav, mult, text, scenario, oldMC, newMC);
}

function showOutcome(isFav, mult, text, scenario, oldMC, newMC){
  hasOutcomeShown = true;

  elControls.style.opacity = 0;
  elTitle.textContent = '';
  elDesc.textContent  = '';

  elBigMsg.className = 'bigMsg ' + (isFav ? 'good' : 'bad');
  const line1 = chosenPath === 'bold' ? 'Bold move' : 'Conservative move';
  const line2 = isFav ? 'Favourable outcome' : 'Unfavourable outcome';
  elBigMsg.textContent = line1 + '\n' + line2;

  elOutcomeWrap.style.display = 'block';

  const cls = isFav ? 'goodBox' : 'badBox';
  elOutcomeBox.className = 'outcome ' + cls;

  const mcChangePct = ((newMC - oldMC) / oldMC) * 100;
  const pctStr = (mcChangePct >= 0 ? '+' : '') + mcChangePct.toFixed(1) + '%';

  const priceLine = `Price: <b>${fmtUSD(oldMC/SUPPLY,8)}</b> → <b>${fmtUSD(price,8)}</b>`;
  const mcLine    = `Market Cap: <b>${fmtUSD(oldMC)}</b> → <b>${fmtUSD(newMC)}</b>`;

  elOutcomeBox.innerHTML = `
    <div class="big">${isFav ? 'Gain' : 'Loss'} (${pctStr})</div>
    <div>${priceLine}</div>
    <div class="muted">${mcLine}</div>
    <div style="margin-top:10px;">${text}</div>
    <div class="muted" style="margin-top:10px;">${scenario.focus || ''}</div>
  `;

  if(price <= 0){
    elNext.style.display    = 'none';
    elRestart.style.display = 'inline-block';
  }else{
    elNext.style.display    = 'inline-block';
    elRestart.style.display = 'none';
  }

  updateHUD();
}

/* ==== Flow ==== */
function nextDay(){
  if(price <= 0) return;
  day += 1;
  updateHUD();
  newScenario();
}

function restartGame(){
  day = 1;
  price = 10_000 / SUPPLY;
  updateHUD();
  newScenario();
}

/* ==== Bias HUD ==== */
function updateBiasFromSlider(){
  bias = parseInt(elBiasSlider.value,10) || 80;
  elBiasValue.textContent = bias + '%';
}
function toggleBiasHUD(){
  elBiasHUD.style.display =
    (elBiasHUD.style.display === 'block') ? 'none' : 'block';
}

/* ==== Init ==== */
(function init(){
  updateHUD();
  if(elBiasSlider){
    updateBiasFromSlider();
    elBiasSlider.addEventListener('input', updateBiasFromSlider);
  }

  elCommit.addEventListener('click', resolveDecision);
  elChangeMind.addEventListener('click', ()=>{ if(!locked) resetDecisionUI(); });
  elNext.addEventListener('click', nextDay);
  elRestart.addEventListener('click', restartGame);

  // Tap card to go next day after outcome
  elCard.addEventListener('click', e => {
    if(!hasOutcomeShown) return;
    if(
      e.target.closest('.panel-inner') ||
      e.target.closest('.btn') ||
      e.target.closest('#biasHUD')
    ) return;
    nextDay();
  });

  // Two-finger tap → toggle bias HUD (mobile)
  document.addEventListener('touchstart', e => {
    if(e.touches && e.touches.length >= 2){
      e.preventDefault();
      toggleBiasHUD();
    }
  }, {passive:false});

  // 'b' key → toggle bias HUD (desktop)
  document.addEventListener('keydown', e => {
    if(e.key === 'b' || e.key === 'B') toggleBiasHUD();
  });

  newScenario();
})();
// Fallback init trigger (for iOS load timing)
window.addEventListener('load', () => {
  if (typeof newScenario === 'function') {
    document.body.insertAdjacentHTML('beforeend', '<div style="color:#0f0;font-size:12px;">✅ fallback init triggered</div>');
    newScenario();
  } else {
    document.body.insertAdjacentHTML('beforeend', '<div style="color:#f55;font-size:12px;">❌ newScenario missing</div>');
  }
});
