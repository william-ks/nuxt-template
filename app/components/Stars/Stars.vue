<script setup lang="ts">
const STAR_COUNT = 130;
const stars = ref(
  Array.from({ length: STAR_COUNT }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: +(Math.random() * 3 + 1).toFixed(2),
    delay: +(Math.random() * 5).toFixed(3),
    duration: 2,
  }))
);
</script>

<template>
  <div class="absolute pointer-events-none z-[-1] inset-0 overflow-hidden">
    <div
      v-for="star in stars"
      :key="star.id"
      class="star absolute rounded-full"
      :style="{
        left: star.x + '%',
        top: star.y + '%',
        transform: 'translate(-50%, -50%)',
        width: star.size + 'px',
        height: star.size + 'px',
        backgroundColor: 'var(--ui-primary)',
        animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`
      }"
    ></div>
  </div>
</template>

<style>
@keyframes twinkle {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
}
</style>
