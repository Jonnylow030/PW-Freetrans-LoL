document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.getElementById("classProgress");
  if (!wrap || typeof ALL_CLASSES === "undefined" || typeof ROSTER === "undefined") return;

  const realClasses = ALL_CLASSES.filter((c) => c !== "Noch nicht entschieden");
  const covered = realClasses.filter((c) => ROSTER.some((p) => p.class === c));
  const missing = realClasses.filter((c) => !covered.includes(c));
  const pct = Math.round((covered.length / realClasses.length) * 100);

  wrap.innerHTML = `
    <div class="progress-head">
      <span>Klassen im Kader</span>
      <span class="progress-count">${covered.length} / ${realClasses.length}</span>
    </div>
    <div class="progress-track">
      <div class="progress-fill" style="width:${pct}%;"></div>
    </div>
    ${missing.length
      ? `<div class="progress-missing">Noch gesucht: ${missing.join(", ")}</div>`
      : `<div class="progress-missing complete">Alle Klassen besetzt!</div>`}
  `;
});
