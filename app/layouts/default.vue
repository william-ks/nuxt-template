<template>
  <div>
    <UContainer v-if="false" class="mb-4">
      <UCard variant="soft">
        <UiThemePicker />
      </UCard>
    </UContainer>
    <slot />
    <LazyUiStarsBg />
    <LazyUiSkyBg />
  </div>
</template>

<style></style>
