export function initTheme() {
  if (localStorage.theme === "light") {
    document.documentElement.classList.remove("dark");
    return;
  }

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export default function toggleTheme() {
  const theme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";

  if (theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  return theme;
}
