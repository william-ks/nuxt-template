<template>
  <div class="dark:bg-gray-950 bg-gray-200">
    <SideBar :visible="viewSideBar" />
    <Header />
    <main>
      <slot />
    </main>
    <footer
      class="border-t-[1px] border-primary-300 dark:border-primary-500 bg-white dark:bg-gray-900 shadow-[0_-5px_10px_hsl(var(--shadow))]"
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

<script setup>
const viewSideBar = useState("viewSideBar", () => false);

function closeSideBar() {
  viewSideBar.value = false;
}
</script>

<style>
main {
  width: 100%;
  min-height: calc(100vh - 55px - 68px);
}
</style>
