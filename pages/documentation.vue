<script setup>
useHead({
  title: "Documentation",
});

onMounted(() => {
  useState("pageTitle", () => "Documentation");
});

// Vue Form
const vueForm = ref({});

const handleClick = () => {
  if (vueForm.value) {
    const formData = vueForm.value; // Obtenha os dados do formulário
    console.log("Form Data:", formData);
  }
};

// 
</script>

<template>
  <UContainer class="pt-1 pb-1">
    <UCard>
      <h3>Vue Form</h3>
      <p>This is a Vue Form component.</p>
      <ClientOnly>
        <Vueform v-model="vueForm">
          <TextElement
            name="phone"
            input-type="text"
            :mask="{ mask: '+55 (00) 00000-0000', placeholder: true }"
          />
        </Vueform>
      </ClientOnly>
      <UButton class="mt-5" @click="handleClick">Entrar</UButton>
    </UCard>
  </UContainer>
</template>
