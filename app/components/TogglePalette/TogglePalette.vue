<template>
  <UPopover v-model:open="open">
    <UButton
      color="primary"
      variant="soft"
      class="cursor-pointer"
      icon="heroicons:swatch-20-solid"
    />

    <template #content>
      <div class="p-4 select-none">
        <TogglePrimaryColor />
        <USeparator class="my-3" />
        <ToggleNeutralColor />
        <USeparator class="my-3" />
        <ToggleRadius />
        <USeparator class="my-3" />
        <ToggleTheme />
      </div>
    </template>
  </UPopover>
</template>

<script setup>
import TogglePrimaryColor from './TogglePrimaryColor.vue';
import ToggleNeutralColor from './ToggleNeutralColor.vue';
import ToggleRadius from './ToggleRadius.vue';
import ToggleTheme from './ToggleTheme.vue';

const open = ref(false);
</script>
