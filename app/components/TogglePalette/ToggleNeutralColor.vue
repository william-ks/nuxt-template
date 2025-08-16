<template>
  <div>
    <h3 class="text-sm font-medium mb-2">Neutral</h3>
    <div class="grid grid-cols-3 gap-1.5">
      <div
        v-for="color in neutralColors"
        :key="color"
        @click="neutral = color"
        :class="[
          'flex items-center justify-center py-1 rounded-md cursor-pointer',
          'border',
          `border-${neutral}-100 dark:border-${neutral}-800`,
          `hover:bg-${neutral}-100 dark:hover:bg-${neutral}-800`,
          `${
            neutral === color ? `bg-${neutral}-100 dark:bg-${neutral}-800` : ''
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
const neutralColors = ["slate", "gray", "zinc", "neutral", "stone"];

const neutral = computed({
  get() {
    return appConfig.ui.colors.neutral;
  },
  set(option) {
    appConfig.ui.colors.neutral = option;
    window.localStorage.setItem("nuxt-ui-neutral", appConfig.ui.colors.neutral);
  },
});
</script>

<style scoped></style>
