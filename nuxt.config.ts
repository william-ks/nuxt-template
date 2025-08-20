// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },

  ssr: false,

  app: {
    baseURL: "/",
    pageTransition: { name: "page", mode: "out-in" },
  },

  nitro: {
    preset: "node-server",
  },

  ui: {
    theme: {
      colors: ["primary", "secondary", "warning", "error", "success", "info"],
    },
  },

  modules: [
    "@nuxt/image",
    "@nuxt/ui",
    "@compodium/nuxt",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@formkit/auto-animate/nuxt",
  ],
  css: ["~/styles/main.css"],
});
