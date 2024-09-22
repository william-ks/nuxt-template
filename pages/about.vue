<template>
  <div>
    <div class="flex gap-5 p-5">
      <UButton variant="outline" label="open modal" @click="isOpen = true" />
      <UButton variant="outline" label="go back" to="/" />
    </div>

    <UModal v-model="isOpen">
      <div class="p-4">
        <UButton to="/about" label="Show toast" @click="addToast" />
      </div>
    </UModal>
  </div>
</template>

<script setup>
const isOpen = ref(false);
const toast = useToast();

const addToast = () => {
  toast.add({
    color: "red",

    title: "Update downloaded.",
    description: "It will be installed on restart. Restart now?",
    icon: "i-octicon-desktop-download-24",
    timeout: 0,
    actions: [
      {
        label: "Restart",
        click: () => {},
      },
    ],
  });
};
</script>
