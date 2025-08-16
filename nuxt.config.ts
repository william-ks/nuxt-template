// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  ssr: false,

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  nitro: {
    preset: "node-server",
  },

  ui: {
    theme: {
      colors: ["primary", "neutral", "red", "blue", "gray", "zinc"],
    },
  },

  modules: [
    "@nuxt/image",
    "@nuxt/ui",
    "@compodium/nuxt",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@formkit/auto-animate/nuxt"
  ],
  css: ["~/styles/main.css"],
});