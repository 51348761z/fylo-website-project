// Theme toggle functionality
const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Helper function to get current theme
function getCurrentTheme() {
  const stored = localStorage.getItem("color-theme");
  if (stored) return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// Helper function to apply theme
function applyTheme(theme) {
  const isDark = theme === "dark";

  document.documentElement.classList.toggle("dark", isDark);
  themeToggleLightIcon.classList.toggle("hidden", !isDark);
  themeToggleDarkIcon.classList.toggle("hidden", isDark);
  localStorage.setItem("color-theme", theme);
}

// Initialize theme on page load
applyTheme(getCurrentTheme());

// Toggle theme on button click
themeToggleBtn.addEventListener("click", () => {
  const currentTheme = getCurrentTheme();
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
});
