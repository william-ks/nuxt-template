<template>
  <div>
    <h3 class="text-sm font-medium mb-3">Radius</h3>
    <div class="grid grid-cols-5 gap-2">
      <button
        v-for="r in radiusOptions"
        @click="radius = r"
        :class="[
          'text-xs p-1 rounded-md cursor-pointer',
          'border',
          `border-${neutral}-100 dark:border-${neutral}-800`,
          `hover:bg-${neutral}-100 dark:hover:bg-${neutral}-800`,
          `${radius === r ? `bg-${neutral}-100 dark:bg-${neutral}-800` : ''}`,
        ]"
      >
        {{ r }}
      </button>
    </div>
  </div>
</template>

<script setup>
const appConfig = useAppConfig();

const radiusOptions = [0, 0.125, 0.25, 0.375, 0.5];

const neutral = computed(() => appConfig.ui.colors.neutral);

const radius = computed({
  get() {
    return appConfig.ui.theme?.radius;
  },
  set(option) {
    appConfig.ui.theme.radius = option;
    localStorage.setItem("nuxt-ui-radius", String(appConfig.ui.theme.radius));
    document.documentElement.style.setProperty("--ui-radius", `${option}rem`);
  },
});
</script>
