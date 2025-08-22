<template>
  <UApp :toaster="{ position: 'top-right', duration: 3000 }">
    <NuxtLoadingIndicator color="var(--ui-primary)" :height="2" />
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
import colors from "tailwindcss/colors";

const appConfig = useAppConfig();
const colorMode = useColorMode();

const color = computed(() =>
  colorMode.value === "dark"
    ? (colors as any)[appConfig.ui.colors.neutral][900]
    : "white"
);
const radius = computed(
  () => `:root { --ui-radius: ${appConfig.theme.radius}rem; }`
);
const blackAsPrimary = computed(() =>
  appConfig.theme.blackAsPrimary
    ? `:root { --ui-primary: black; } .dark { --ui-primary: white; }`
    : ":root {}"
);

useHead({
  htmlAttrs: {
    lang: "pt-BR",
  },
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: color },
  ],
  style: [
    { innerHTML: radius, id: "nuxt-ui-radius", tagPriority: -2 },
    {
      innerHTML: blackAsPrimary,
      id: "nuxt-ui-black-as-primary",
      tagPriority: -2,
    },
  ],
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

/* Safelist (do not remove): [&>div]:*:my-0 [&>div]:*:w-full h-64 !px-0 !py-0 !pt-0 !pb-0 !p-0 !justify-start !justify-end !min-h-96 h-136 max-h-[341px] */
</style>
