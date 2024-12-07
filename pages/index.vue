<template>
  <UContainer>
    <UCard>
      <h2>Bem vindo</h2>
      <NuxtLink to="/documentation">
        <UButton>Ir para Documentação</UButton>
      </NuxtLink>
    </UCard>
  </UContainer>
</template>

<script setup>
definePageMeta({
  layout: "empty",
});

useHead({
  title: "Bem vindo",
});
</script>
