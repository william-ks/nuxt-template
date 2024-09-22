<template>
    <header class="rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 bg-white dark:bg-gray-900 shadow-[0_5px_10px_hsl(var(--shadow))]">
      <UContainer class="py-[15px]">
        <div class="flex justify-between items-center">
          <UIcon
            class="cursor-pointer text-3xl"
            name="uil:bars"
            @click="addToast"
          />
          <ToggleTheme />
          <TogglePallet />
          <!-- <Avatar /> -->
        </div>
      </UContainer>
    </header>
</template>

<script setup>
import ToggleTheme from "~/components/ui/ToggleTheme/ToggleTheme.vue";
import TogglePallet from "~/components/ui/TogglePallet/TogglePallet.vue";
import Avatar from "~/components/ui/Avatar/Avatar.vue";

const toast = useToast();

const addToast = () => {
  toast.add({
    color: "teal",
    title: "Nav bar",
    description: "Opened navbar.",
    timeout: 2000,
  });
};
</script>

<style scoped>
header {
  width: 100%;
  /* box-shadow: 0 5px 10px hsl(var(--shadow)); */
  /* background-color: hsl(var(--card-bg)); */
}
</style>
