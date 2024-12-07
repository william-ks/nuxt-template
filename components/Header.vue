<template>
  <header
    class="border-b-[1px] border-primary-300 dark:border-primary-500 bg-white dark:bg-gray-900 shadow-[0_5px_10px_hsl(var(--shadow))]"
  >
    <UContainer class="py-[15px]">
      <div class="flex justify-between items-center">
        <UIcon
          class="cursor-pointer text-3xl"
          name="uil:bars"
          @click="openSideBar"
        />
        <h3>{{ pageTitle || "Page" }}</h3>
        <ProfileIcon />
      </div>
    </UContainer>
  </header>
</template>

<script setup>
import ToggleTheme from "~/components/ui/ToggleTheme/ToggleTheme.vue";
import TogglePallet from "~/components/ui/TogglePallet/TogglePallet.vue";
import Avatar from "~/components/ui/Avatar/Avatar.vue";

const pageTitle = useState("pageTitle");


function openSideBar() {
  const viewSideBar = useState("viewSideBar");
  viewSideBar.value = true;
}
</script>

<style scoped>
header {
  width: 100%;
}
</style>
