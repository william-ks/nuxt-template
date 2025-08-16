<template>
   <div class="">
      <h3 class="text-sm font-medium mb-2">Theme</h3>
      <UButtonGroup size="sm" orientation="horizontal" class="w-full">
        <UButton
          v-for="theme in themes"
          :key="theme.value"
          :variant="colorMode.preference === theme.value ? 'solid' : 'ghost'"
          :color="colorMode.preference === theme.value ? 'primary' : 'neutral'"
          @click="setTheme(theme.value)"
          class="flex-1 justify-center"
        >
          <UIcon :name="theme.icon" class="size-4 mr-1" />
          {{ theme.label }}
        </UButton>
      </UButtonGroup>
    </div>
</template>

<script setup>
const appConfig = useAppConfig();
const colorMode = useColorMode();
const systemTheme = ref("light");

const themes = [
  { value: "light", label: "Light", icon: "line-md:sunny-filled" },
  { value: "system", label: "System", icon: "i-heroicons-computer-desktop" },
  { value: "dark", label: "Dark", icon: "line-md:moon-filled" },
];

const setTheme = (theme) => {
  colorMode.preference = theme;
  localStorage.setItem("nuxt-ui-black-as-primary", true);

  if (black.value === true) {
    if (theme === "dark") {
      appConfig.ui.colors.primary = "white";
    } else if (theme === "light") {
      appConfig.ui.colors.primary = "black";
    } else if (theme === "system") {
      if (systemTheme.value === "dark") {
        appConfig.ui.colors.primary = "white";
      } else if (systemTheme.value === "dark") {
        appConfig.ui.colors.primary = "black";
      }
    }
  }
};

onMounted(() => {
  const matcher = window.matchMedia("(prefers-color-scheme: dark)");
  systemTheme.value = matcher.matches ? "dark" : "light";
});
</script>
