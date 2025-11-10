window.addEventListener("load", () => {
  const el = document.getElementById("game");
  if (window.FOUNDER_SCENES && window.FOUNDER_SCENES.length > 0) {
    const s = window.FOUNDER_SCENES[0];
    el.innerHTML = `<h4>${s.subBand} · ${s.focus}</h4><p>${s.context}</p>`;
  } else {
    el.innerHTML = `<p style="color:red;">No scenario loaded ❌</p>`;
  }
});
