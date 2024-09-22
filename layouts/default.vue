<template>
  <div class="dark:bg-gray-950 bg-gray-200">
    <Header />
    <main>
      <slot />
    </main>
    <footer
      class="rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 bg-white dark:bg-gray-900 shadow-[0_-5px_10px_hsl(var(--shadow))]"
    >
      <UContainer>
        <div class="py-[15px]">
          <h2 class="text-center cursor-pointer">
            Desenvolvido Por Will Code Systems | 2024 ®
          </h2>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script setup></script>

<style>
main {
  width: 100%;
  min-height: calc(100vh - 55px - 67px);
}
</style>
