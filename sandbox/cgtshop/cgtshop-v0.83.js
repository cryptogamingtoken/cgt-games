/* =============================
   CGT Shop v0.83 Logic
   ============================= */

const SUPPLY = 350_000_000;
let day = 1;
let price = 10000 / SUPPLY;
let bias = 80; // default 80% favourable
let currentPath = null; // 'bold' or 'conservative'
let locked = false;

/* === DOM === */
const $ = s => document.querySelector(s);
const elDay = $('#day');
const elPrice = $('#price');
const elMC = $('#mc');
const elTitle = $('#title');
const elDesc = $('#desc');
const elOutcomeWrap = $('#outcomeWrap');
const elBigMsg = $('#bigMsg');
const elOutcomeBox = $('#outcomeBox');
const elSliderBlock = $('#sliderBlock');
const elDecisionButtons = $('#decisionButtons');
const elSlider = $('#decisionSlider');
const elCommit = $('#commitBtn');
const elChangeMind = $('#changeMindBtn');
const elBiasHUD = $('#biasHUD');
const elBiasVal = $('#biasVal');
const elBiasSlider = $('#biasSlider');
const elMetaRef = $('#metaRef');
const elMetaTone = $('#metaTone');
const elMetaMC = $('#metaMC');

/* === Utility === */
function mc(){ return price * SUPPLY; }
function fmtUSD(n, d=2){ const o={minimumFractionDigits:d, maximumFractionDigits:d}; return '$'+n.toLocaleString(undefined,o); }
function rand(min,max){ return Math.random()*(max-min)+min; }

/* === HUD Update === */
function updateHUD(){
  elDay.textContent = String(day);
  elPrice.textContent = fmtUSD(price,8);
  elMC.textContent = fmtUSD(mc(),2);
}

/* === Scenario Selection === */
function pickScenarioForMC(mcValue){
  if(!window.FOUNDER_SCENES || !window.FOUNDER_SCENES.length) return null;
  let closest = window.FOUNDER_SCENES[0];
  let minDiff = Infinity;
  for(const s of window.FOUNDER_SCENES){
    const diff = Math.abs(s.refMC - mcValue);
    if(diff < minDiff){ minDiff = diff; closest = s; }
  }
  return closest;
}

/* === Scenario Rendering === */
function renderScenario(scene){
  if(!scene){ elTitle.textContent = "No scenario"; elDesc.textContent = ""; return; }
  elTitle.textContent = `${scene.stakeholder} · ${scene.title}`;
  elDesc.textContent = scene.context || '';
  elMetaRef.textContent = scene.id || '—';
  elMetaTone.textContent = scene.tone || '—';
  elMetaMC.textContent = fmtUSD(scene.refMC || 0);
  elOutcomeWrap.style.display = 'none';
  elSliderBlock.style.display = 'none';
  elDecisionButtons.style.display = 'flex';
  locked = false;
}

/* === Show Slider when Decision Picked === */
function showSlider(path){
  currentPath = path;
  elDecisionButtons.style.display = 'none';
  elSliderBlock.style.display = 'block';
  const grad = path==='bold'
    ? 'linear-gradient(90deg,#1e90ff 0%,#0f2027 100%)'
    : 'linear-gradient(270deg,#00c853 0%,#0f2027 100%)';
  elSlider.style.background = grad;
  elSlider.style.direction = path==='bold' ? 'ltr' : 'rtl';
}

/* === Outcome === */
function decideOutcome(){
  if(locked) return;
  locked = true;
  const val = parseFloat(elSlider.value);
  const isFavourable = Math.random() < (bias/100);
  const mult = val;
  const oldMC = mc();
  const newMC = isFavourable ? oldMC * mult : oldMC / mult;
  price = newMC / SUPPLY;
  const pct = (mult * 100).toFixed(0);
  const sign = isFavourable ? '+' : '–';

  elOutcomeWrap.style.display = 'block';
  elBigMsg.textContent = isFavourable
    ? (currentPath==='bold'?'Bold move pays off!':'Patience rewarded!')
    : (currentPath==='bold'?'Overreach burns gains!':'Caution costs opportunity.');

  elOutcomeBox.className = `outcome ${isFavourable?'goodBox':'badBox'}`;
  elOutcomeBox.innerHTML = `
    <div class="big">${isFavourable?'Gain':'Loss'} (${sign}${pct}%)</div>
    <div>Market Cap: <b>${fmtUSD(oldMC)}</b> → <b>${fmtUSD(newMC)}</b></div>
  `;
  updateHUD();
}

/* === Day Progression === */
function nextDay(){
  day++;
  const scene = pickScenarioForMC(mc());
  renderScenario(scene);
}

function changeMind(){
  elSliderBlock.style.display = 'none';
  elDecisionButtons.style.display = 'flex';
  locked = false;
}

/* === Bias HUD Toggle === */
function toggleBiasHUD(show){
  elBiasHUD.style.display = show ? 'block' : 'none';
}
document.addEventListener('touchstart', e=>{
  if(e.touches && e.touches.length>=2) toggleBiasHUD(elBiasHUD.style.display!=='block');
});
elBiasSlider.addEventListener('input',e=>{
  bias = parseInt(e.target.value);
  elBiasVal.textContent = bias+'%';
});

/* === Tap anywhere to continue === */
document.addEventListener('click',e=>{
  if(elOutcomeWrap.style.display==='block' && !e.target.closest('.btn')) nextDay();
});

/* === Event Binding === */
$('#boldBtn').addEventListener('click',()=>showSlider('bold'));
$('#conservativeBtn').addEventListener('click',()=>showSlider('conservative'));
elCommit.addEventListener('click',decideOutcome);
elChangeMind.addEventListener('click',changeMind);

/* === Init === */
(function init(){
  updateHUD();
  const scene = pickScenarioForMC(mc());
  renderScenario(scene);
})();
