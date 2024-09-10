import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  const routes = nuxtApp.$router.getRoutes()
  nuxtApp.provide('routes', routes.map((route: any) => {
    return {
      name: route.name,
      path: route.path
    }
  }))
})
