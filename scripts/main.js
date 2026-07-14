// Entries in my AI learning journal, newest first.
const learningLogEntries = [
  {
    date: "2026-07-14",
    title: "Set up this website",
    notes: "Created my personal site and put it on GitHub, one small commit at a time.",
  },
];

function renderLearningLog(entries) {
  const list = document.querySelector(".learning-log__list");
  if (!list) return;

  list.innerHTML = "";

  entries.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "log-entry";
    item.innerHTML = `
      <span class="log-entry__date">${entry.date}</span>
      <h3 class="log-entry__title">${entry.title}</h3>
      <p class="log-entry__notes">${entry.notes}</p>
    `;
    list.appendChild(item);
  });
}

renderLearningLog(learningLogEntries);

// Theme toggle (light/dark), remembered across visits.
function initThemeToggle() {
  const toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  toggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  });
}

initThemeToggle();
