<template>
  <UApp :toaster="{ position: 'top-right', duration: 3000 }">
    <NuxtLayout>
      <NuxtPage
        :transition="{
          name: 'page',
          mode: 'out-in',
        }"
      />
    </NuxtLayout>
  </UApp>
</template>

<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: "pt-BR",
  },
});

const appConfig = useAppConfig();
const colorMode = useColorMode();
const systemTheme = ref("light");

onMounted(() => {
  const matcher = window.matchMedia("(prefers-color-scheme: dark)");
  systemTheme.value = matcher.matches ? "dark" : "light";

  colorMode.preference = localStorage.getItem("nuxt-ui-color-mode") || systemTheme.value;

  const primaryStorate = localStorage.getItem("nuxt-ui-primary");
  if (!primaryStorate) {
    localStorage.setItem("nuxt-ui-primary", appConfig.ui.colors.primary);
  }

  const neutralStorage = localStorage.getItem("nuxt-ui-neutral");
  if (!neutralStorage) {
    localStorage.setItem("nuxt-ui-neutral", appConfig.ui.colors.neutral);
  }

  const radiusStorage = localStorage.getItem("nuxt-ui-radius");
  if (!radiusStorage) {
    localStorage.setItem("nuxt-ui-radius", String(appConfig.ui.theme.radius));
  }
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
