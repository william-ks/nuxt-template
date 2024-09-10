<template>
  <section>
    <div class="center">
      <h1 class="mt-5 text-center text-4xl font-light">
        Welcome to my website
      </h1>

      <div
        class="my-5 flex w-[100%] flex-col items-center justify-center gap-10"
      >
        <Card shadow border>
          <h3 class="mb-5 text-2xl font-light">Botões</h3>

          <ul class="flex gap-5">
            <div class="flex flex-col gap-5">
              <li>
                <Button>Default</Button>
              </li>
              <li>
                <Button disabled>Default disabled</Button>
              </li>
            </div>
            <div class="flex flex-col gap-5">
              <li>
                <Button variant="outline">Outline</Button>
              </li>
              <li>
                <Button disabled variant="outline">Outline disabled</Button>
              </li>
            </div>
          </ul>
        </Card>
      </div>

      <div
        class="my-5 flex w-[100%] flex-col items-center justify-center gap-10"
      >
        <Card shadow border>
          <h3 class="mb-5 text-2xl font-light">Inputs</h3>

          <ul class="flex gap-5">
            <li>
              <p>Text | Email</p>
              <Input v-model="name" placeholder="Insira seu texto" />
            </li>
            <li>
              <p>Password</p>
              <Input v-model="password" type="password" />
            </li>
            <li>
              <p>Select</p>
              <Select
                :list="categories"
                :model="selected"
                placeholder="Selecione uma Categoria"
              />
            </li>
            <li class="h-[70px] w-[150px]">
              <p>Textarea</p>
              <div>
                <textarea placeholder="Digite aqui"></textarea>
              </div>
            </li>
          </ul>
        </Card>
      </div>

      <div
        class="my-5 flex w-[100%] flex-col items-center justify-center gap-10"
      >
        <Card shadow border>
          <h3 class="mb-5 text-2xl font-light">Vue Form</h3>

          <!-- app.vue -->

          <ClientOnly>
            <Vueform>
              <TextElement
                name="teste"
                input-type="text"
                :mask="{ mask: '+55 (00) 00000-0000', placeholder: true }"
              />
            </Vueform>
          </ClientOnly>
        </Card>
      </div>

      <div
        class="my-5 flex w-[100%] flex-col items-center justify-center gap-10"
      >
        <Card shadow border>
          <h3 class="mb-5 text-2xl font-light">Avatar</h3>

          <ul class="flex gap-5">
            <li>
              <Avatar src="/icon.jpg" />
            </li>
          </ul>
        </Card>
      </div>

      <div
        class="my-5 flex w-[100%] flex-col items-center justify-center gap-10"
      >
        <Card shadow border>
          <h3 class="mb-5 text-2xl font-light">Modal</h3>

          <Modal @close="toggleShowModal(false)" v-if="showModal">
            <h2 class="mb-5 text-2xl font-light">Modal Title</h2>
          </Modal>
          <ul class="flex gap-5">
            <li>
              <Button @click="toggleShowModal(true)" variant="outline"
                >Open modal</Button
              >
            </li>
          </ul>
        </Card>
      </div>

      <div
        class="my-5 flex w-[100%] flex-col items-center justify-center gap-10"
      >
        <Card shadow border>
          <h3 class="mb-5 text-2xl font-light">Troca de Tema</h3>

          <ToogleTheme />
        </Card>
      </div>

      <div
        class="my-5 flex w-[100%] flex-col items-center justify-center gap-10"
      >
        <Card shadow border>
          <h3 class="mb-5 text-2xl font-light">Rotas</h3>

          <ul>
            <li v-for="route of routes" :key="route.path">
              <p>Name {{ route.name }}</p>
              <p>Path => {{ route.path }}</p>
            </li>
          </ul>
        </Card>
      </div>

      <div
        class="my-5 flex w-[100%] flex-col items-center justify-center gap-10"
      >
        <Card shadow border>
          <h3 class="mb-5 text-2xl font-light">Tabelas</h3>
          <!-- <Grid /> -->
        </Card>
      </div>

      <div
        class="my-5 flex w-[100%] flex-col items-center justify-center gap-10"
      >
        <Card shadow border>
          <h3 class="mb-5 text-2xl font-light">Graficos</h3>
          <!-- <Chart /> -->
        </Card>
      </div>
      <div
        class="my-5 flex w-[100%] flex-col items-center justify-center gap-10"
      >
        <Card shadow border>
          <h3 class="mb-5 text-2xl font-light">Vuetify</h3>
          <v-btn prepend-icon="$vuetify"> Button </v-btn>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from "~/components/ui/Card/Card.vue";
import Button from "~/components/ui/Button/Button.vue";
import Input from "~/components/ui/Input/Input.vue";
import Avatar from "~/components/ui/Avatar/Avatar.vue";
import Modal from "~/components/ui/Modal/Modal.vue";
import Select from "~/components/ui/Select/Select.vue";
import ToogleTheme from "~/components/ui/ToggleTheme/ToogleTheme.vue";
import Grid from "~/components/ui/Grid/Grid.vue";
import Chart from "~/components/ui/Chart/Chart.vue";

const categories = [
  {
    id: 1,
    name: "Category 1",
  },
  {
    id: 2,
    name: "Category 2",
  },
  {
    id: 3,
    name: "Category 3",
  },
];

const selected = ref({
  id: "",
  name: "",
});

const showModal = ref(false);

const name = ref("");
const password = ref("");

const toggleShowModal = (val) => {
  showModal.value = val;
};
const routes = useNuxtApp().$routes;
</script>

<style scoped></style>
