// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/image'],

  css: ['~/styles/main.css', '~/styles/default.css'],

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27'
})