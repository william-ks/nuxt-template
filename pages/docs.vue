<template>
  <UContainer>
    <h1 class="mt-5 text-center text-4xl font-light">Welcome to my website</h1>

    <div class="my-5 flex w-[100%] flex-col items-center justify-center gap-10">
      <UCard class="w-[100%]">
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
      </UCard>
    </div>

    <div class="my-5 flex w-[100%] flex-col items-center justify-center gap-10">
      <UCard class="w-[100%]">
        <h3 class="mb-5 text-2xl font-light">Inputs</h3>

        <ul class="flex gap-5">
          <ClientOnly>
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
            <li class="w-[150px]">
              <p>Textarea</p>
              <div>
                <textarea placeholder="Digite aqui"></textarea>
              </div>
            </li>
          </ClientOnly>
        </ul>
      </UCard>
    </div>

    <div class="my-5 flex w-[100%] flex-col items-center justify-center gap-10">
      <UCard class="w-[100%]">
        <h3 class="mb-5 text-2xl font-light">Vue Form</h3>

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
    </div>

    <div class="my-5 flex w-[100%] flex-col items-center justify-center gap-10">
      <UCard class="w-[100%]">
        <h3 class="mb-5 text-2xl font-light">Avatar</h3>

        <ul class="flex gap-5">
          <li>
            <Avatar src="/icon.jpg" />
          </li>
        </ul>
      </UCard>
    </div>

    <div class="my-5 flex w-[100%] flex-col items-center justify-center gap-10">
      <UCard class="w-[100%]">
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
      </UCard>
    </div>

    <div class="my-5 flex w-[100%] flex-col items-center justify-center gap-10">
      <UCard class="w-[100%]">
        <h3 class="mb-5 text-2xl font-light">Troca de Tema</h3>

        <ToogleTheme />
      </UCard>
    </div>

    <div class="my-5 flex w-[100%] flex-col items-center justify-center gap-10">
      <UCard class="w-[100%]">
        <h3 class="mb-5 text-2xl font-light">Rotas</h3>

        <ul>
          <li v-for="route of routes" :key="route.path">
            <p>Name {{ route.name }}</p>
            <p>Path => {{ route.path }}</p>
          </li>
        </ul>
      </UCard>
    </div>

    <div class="my-5 flex w-[100%] flex-col items-center justify-center gap-10">
      <UCard class="w-[100%]">
        <h3 class="mb-5 text-2xl font-light">Tabelas</h3>
        <Grid />
      </UCard>
    </div>

    <div
      class="my-5 max-h-[700px] flex w-[100%] flex-col items-center justify-center gap-10"
    >
      <UCard class="card">
        <h3 class="mb-5 text-2xl font-light">Graficos</h3>
        <ul class="chartUl">
          <UCard class="chartLi">
            <h3>Radial</h3>
            <div class="w-[100%] min-h-[300px] h-[300px] max-h-[300px]">
              <RadialChart :chart-data="radialChartData" />
            </div>
          </UCard>
        </ul>
      </UCard>
    </div>
    <div
      class="my-5 max-h-[700px] flex w-[100%] flex-col items-center justify-center gap-10"
    >
      <UCard class="card">
        <h3 class="mb-5 text-2xl font-light">Graficos</h3>
        <ul class="chartUl">
          <UCard class="chartLi">
            <h3>Barras</h3>
            <div class="w-[100%] min-h-[300px] h-[300px] max-h-[300px]">
              <BarChart :chartData="barChartData" />
            </div>
          </UCard>
        </ul>
      </UCard>
    </div>
  </UContainer>
</template>

<script setup>
import Card from "~/components/ui/Card/Card.vue";
import Button from "~/components/ui/Button/Button.vue";
import Input from "~/components/ui/Input/Input.vue";
import Avatar from "~/components/ui/Avatar/Avatar.vue";
import Modal from "~/components/ui/Modal/Modal.vue";
import Select from "~/components/ui/Select/Select.vue";
import ToogleTheme from "~/components/ui/ToggleTheme/ToggleTheme.vue";
import Grid from "~/components/ui/Grid/Grid.vue";
import BarChart from "~/components/ui/Charts/BarChart/BarChart.vue";
import RadialChart from "~/components/ui/Charts/RadialChart/RadialChart.vue";

const vueForm = ref({});

const barChartData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Data One",
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
    },
  ],
};

const radialChartData = {
  labels: ["SPEAKING", "LISTENING", "STRUCTURE", "SOFT-SKILLS", "APPLICATION"],
  datasets: [
    {
      label: "January",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 0.5)",
      pointBackgroundColor: "rgba(54, 162, 235, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(54, 162, 235)",
      data: [8, 6, 5, 4, 8],
    },
  ],
};

const handleClick = () => {
  if (vueForm.value) {
    const formData = vueForm.value; // Obtenha os dados do formulário
    console.log("Form Data:", formData);
  }
};

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

// const toast = useToast()

const showToast = () => {
  // toast.success("This is a success message!");
};
</script>

<style scoped>
.card {
  width: 100%;
  border-radius: 10px;
  padding: 16px 2%;
  background: hsl(var(--card-bg));
  color: hsl(var(--card-foreground));
}

.chartUl {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.chartLi {
  width: 100% !important;
  min-height: 400px !important;
  max-height: 400px;
  padding-bottom: 35px;
}

@media screen and (max-width: 1070px) {
  .chartUl {
    flex-direction: column;
  }
}
</style>
