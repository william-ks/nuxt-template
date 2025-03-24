<template>
  <div @click="toggle" class="toggleBox dark:bg-gray-900 bg-gray-100">
    <div class="iconBg" :class="{ darkActive: isDark }">
      <Icon v-show="!isDark" class="icon" name="line-md:sunny-filled-loop" />
      <Icon v-show="isDark" class="moon" name="line-md:moon-rising-filled-alt-loop" />
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const toggle = () => {
  isDark.value = !isDark.value
}
</script>

<style scoped>
@import "tailwindcss";
@import "@nuxt/ui";

.toggleBox {
  width: 60px;
  height: 20px;
  border-radius: 999px;
  position: relative;
  cursor: pointer;
  position: relative;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

  @apply dark:bg-gray-700 bg-gray-100 border-[1px] border-gray-800;
}

.iconBg {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 25px;
  height: 25px;
  top: -16%;
  left: -5px;
  transform: translateY(-50%);
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: -5px;
  transform: rotate(0deg);
  transition:
    left 0.5s ease-in-out,
    transform 0.5s ease-in-out;

    @apply dark:bg-gray-700 bg-gray-100 border-[1px] border-gray-800;
}

.iconBg.darkActive {
  left: 40px;
  transform: rotate(360deg);
}
</style>
