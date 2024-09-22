<template>
  <div class="pt-5">
    <UContainer>
      <div class="shadow-lg">
        <UCard>
          <div class="flex gap-5 flex-wrap justify-center items-start">
            <UDivider label="Links" />
            <UButton variant="soft" label="documentation" to="/documentation" />
            <UButton variant="soft" label="about" to="/about" />

            <UDivider label="Funções" />
            <UButton variant="soft" label="toast" @click="addToast" />
            <UButton
              variant="soft"
              label="Change Primary color"
              @click="changePrimary"
            />
            <UButton
              variant="soft"
              label="Change Gray color"
              @click="changeGray"
            />
          </div>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const isOpen = ref(false);
const appConfig = useAppConfig();
const toast = useToast();

const colors = [
  "rose",
  "sky",
  "indigo",
  "teal",
  "red",
  "orange",
  "green",
  "emerald",
];

const grayColors = ["slate", "cool", "zinc", "neutral", "stone"];

const changeGray = () => {
  const index = grayColors.findIndex((el) => el === appConfig.ui.gray);
  let nextIndex = 0;
  if (index !== grayColors.length - 1) {
    nextIndex = index + 1;
  }

  appConfig.ui.gray = grayColors[nextIndex];
  localStorage.setItem("nuxt-ui-gray", appConfig.ui.gray);
};

const changePrimary = () => {
  const index = colors.findIndex((el) => el === appConfig.ui.primary);
  let nextIndex = 0;
  if (index !== colors.length - 1) {
    nextIndex = index + 1;
  }

  appConfig.ui.primary = colors[nextIndex];
  localStorage.setItem("nuxt-ui-primary", appConfig.ui.primary);
};

const addToast = () => {
  toast.add({
    color: "red",
    title: "Erro ao baixar dados de usuário",
    description: "Isso é um toast de teste",
    icon: "ph:warning",
    timeout: 1500,
  });
};
</script>
