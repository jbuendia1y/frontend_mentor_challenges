export function changeTheme() {
  const savedTheme = localStorage.getItem("theme");
  let theme = "";
  if (savedTheme) {
    theme = savedTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme);

    document.documentElement.classList.replace(savedTheme, theme);
  } else {
    theme = "dark";
    localStorage.setItem("theme", theme);
    document.documentElement.classList.add(theme);
  }
}

export function setThemeByLocalStorage() {
  const savedTheme = localStorage.getItem("theme");
  const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (!savedTheme) {
    return;
  }
  if (savedTheme === "dark" || preferDark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}
