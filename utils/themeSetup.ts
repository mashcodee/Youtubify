const themeSetup = () => {
  const root = document.documentElement;
  let existingTheme = localStorage.getItem("youtubify-theme");
  if (!existingTheme) {
    const userPreferedTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    localStorage.setItem(
      "youtubify-theme",
      userPreferedTheme ? "dark" : "light"
    );
    existingTheme = localStorage.getItem("youtubify-theme");
  }

  if (existingTheme === "light") {
    root.style.setProperty("--main-bg", "#f9f9f9");
    root.style.setProperty("--card-bg", "#fff");
    root.style.setProperty("--card-shadow", "#eee");
    root.style.setProperty("--input-bg", "#eee");
    root.style.setProperty("--color", "#555");
  } else {
    root.style.setProperty("--main-bg", "#000");
    root.style.setProperty("--card-bg", "#111");
    root.style.setProperty("--card-shadow", "transparent");
    root.style.setProperty("--input-bg", "#222");
    root.style.setProperty("--color", "#fff");
  }
};

const switchTheme = () => {
  localStorage.getItem("youtubify-theme") === "light"
    ? localStorage.setItem("youtubify-theme", "dark")
    : localStorage.setItem("youtubify-theme", "light");
  themeSetup();
};
export { themeSetup, switchTheme };
