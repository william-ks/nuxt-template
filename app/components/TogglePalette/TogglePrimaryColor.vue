<template>
  <div>
    <h3 class="text-sm font-medium mb-2">Primary:</h3>
    <div class="grid grid-cols-3 gap-1.5">
      <div
        @click="black = true"
        :class="[
          'flex items-center justify-center py-1 rounded-md cursor-pointer',
          'border',
          `border-${neutral}-100 dark:border-${neutral}-800`,
          `hover:bg-${neutral}-100 dark:hover:bg-${neutral}-800`,
          `${black ? `bg-${neutral}-100 dark:bg-${neutral}-800` : ''}`,
        ]"
      >
        <span
          class="ball inline-block bg-black dark:bg-white w-[8px] h-[8px] mr-1 rounded"
        />
        <span class="label inline-block text-xs">Black</span>
      </div>

      <div
        v-for="color in primaryColors"
        :key="color"
        @click="primary = color"
        :class="[
          'flex items-center justify-center py-1 rounded-md cursor-pointer',
          'border',
          `border-${neutral}-100 dark:border-${neutral}-800`,
          `hover:bg-${neutral}-100 dark:hover:bg-${neutral}-800`,
          `${
            primary === color ? `bg-${neutral}-100 dark:bg-${neutral}-800` : ''
          }`,
        ]"
      >
        <span
          :class="`ball inline-block bg-${color}-500 w-[7px] h-[7px] mr-1 rounded`"
        />
        <span class="label inline-block text-xs capitalize">{{ color }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const appConfig = useAppConfig();
const colorMode = useColorMode();
const systemTheme = ref("light");

const neutral = computed(() => appConfig.ui.colors.neutral);

const primaryColors = [
  "orange",
  "red",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

const primary = computed({
  get() {
    return appConfig.ui.colors.primary;
  },
  set(option) {
    appConfig.ui.colors.primary = option;
    localStorage.setItem("nuxt-ui-black-as-primary", false);
    localStorage.setItem("nuxt-ui-primary", appConfig.ui.colors.primary);
  },
});

const black = computed({
  get() {
    return (
      appConfig.ui.colors.primary === "black" ||
      appConfig.ui.colors.primary === "white"
    );
  },
  set(boolean) {
    if (colorMode.value === "dark") {
      appConfig.ui.colors.primary = "white";
    } else if (colorMode.value === "light") {
      appConfig.ui.colors.primary = "black";
    } else if (colorMode.value === "system") {
      appConfig.ui.colors.primary =
        systemTheme.value === "dark" ? "white" : "black";
    }

    localStorage.setItem("nuxt-ui-black-as-primary", boolean);
  },
});

onMounted(() => {
  const matcher = window.matchMedia("(prefers-color-scheme: dark)");
  systemTheme.value = matcher.matches ? "dark" : "light";
});
</script>
