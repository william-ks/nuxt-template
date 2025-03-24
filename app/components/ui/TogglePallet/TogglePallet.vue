<template>
  <UPopover>
    <UButton variant="ghost">
      <UIcon class="text-2xl" name="heroicons:swatch-20-solid" />
    </UButton>

    <template #content>
      <div class="p-4">
        <div class="grid grid-cols-3 gap-px">
          <UTooltip :text="capitalize(color)" class="w-full" v-for="color of colors" :key="color">


            <div class="w-full flex items-center">
              <div @click="setPrimaryColor(color)"
                :class="`p-[4px] w-[24px] h-[24px] rounded-md cursor-pointer hover-${color}`">
                <span :class="`w-[16px] h-[16px] block rounded-full background-${color}`"></span>
              </div>
              <p>{{ capitalize(color) }}</p>
            </div>

          </UTooltip>
        </div>
      </div>
      <UDivider />
      <div class="p-4">
        <div class="grid grid-cols-5 gap-px">
          <!-- <UTooltip :text="grayColor" class="capitalize" v-for="grayColor of grayColors" :key="grayColor">
            <div @click="setGrayColor(grayColor)"
              :class="`p-[4px] w-[24px] h-[24px] rounded-md cursor-pointer hover-${grayColor}`">
              <span :class="`w-[16px] h-[16px] block rounded-full background-${grayColor}`"></span>
            </div>
          </UTooltip> -->
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup>

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const colors = [
  'blank',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
]
</script>

<style scoped>
@import "tailwindcss";
@import "@nuxt/ui";

.ball {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.background-blank {
  background-color: white;
}

.background-red {
  background-color: red;
}

.background-orange {
  background-color: orange;
}

.background-amber {
  background-color: #FFBF00;
}

.background-yellow {
  background-color: yellow;
}

.background-lime {
  background-color: lime;
}

.background-green {
  background-color: green;
}

.background-emerald {
  background-color: #50C878;
}

.background-teal {
  background-color: teal;
}

.background-cyan {
  background-color: cyan;
}

.background-sky {
  background-color: #87CEEB;
}

.background-blue {
  background-color: blue;
}

.background-indigo {
  background-color: indigo;
}

.background-violet {
  background-color: violet;
}

.background-purple {
  background-color: purple;
}

.background-fuchsia {
  background-color: fuchsia;
}

.background-pink {
  background-color: pink;
}

.background-rose {
  background-color: #FF007F;
}
</style>