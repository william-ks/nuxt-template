// plugins/nuxt-ui-theme.client.ts
export default defineNuxtPlugin(() => {
  const appConfig = useAppConfig();

  const primary = localStorage.getItem("nuxt-ui-primary");
  const neutral = localStorage.getItem("nuxt-ui-neutral");
  const radius = localStorage.getItem("nuxt-ui-radius");
  const blackAsPrimary =
    localStorage.getItem("nuxt-ui-black-as-primary") === "true" ? true : false;
  const colorMode = useColorMode();

  if (primary) {
    if (blackAsPrimary) {
      if (colorMode.preference === "dark") {
      appConfig.ui.colors.primary = "white";
      } else if (colorMode.preference === "light") {
      appConfig.ui.colors.primary = "black";
      } else if (colorMode.preference === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      if (systemTheme === "dark") {
        appConfig.ui.colors.primary = "white";
      } else if (systemTheme === "light") {
        appConfig.ui.colors.primary = "black";
      }
      }
    } else {
      appConfig.ui.colors.primary = primary;
    }
  }

  if (neutral) {
    appConfig.ui.colors.neutral = neutral;
  }

  if (radius !== undefined && radius !== null && +radius >= 0) {
    appConfig.ui.theme.radius = Number(radius);
    document.documentElement.style.setProperty("--ui-radius", `${radius}rem`);
  }
});
