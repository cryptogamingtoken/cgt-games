window.CGT_SCENARIOS = window.CGT_SCENARIOS || {};
window.CGT_SCENARIOS.founder = [
  {
    subBand: "F-B1-0.1",
    marketCap: "$10 K",
    focus: "First spark",
    context: "Barely off the ground; prototype exists, but nobody’s watching.",
    boldPrompt: "Launch MVP to public now — even if half-broken.",
    conservativePrompt: "Keep it closed, polish in silence.",
    tone: "risky"
  }
];
window.FOUNDER_SCENES = window.CGT_SCENARIOS.founder;
// 👇 Add this visible debug confirmation
document.body.insertAdjacentHTML(
  'beforeend',
  '<div style="color:#0f0;font-size:14px;margin-top:10px;">✅ founder-data.js executed</div>'
);
