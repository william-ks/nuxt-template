<template>
  <div class="bg" @click="closeSideBar" :class="{ visible: props.visible }">
    <aside @click="(e) => e.stopPropagation()" class="sideBar">
      <div class="header">
        <UiTogglePallet />
        <UiToggleTheme />
      </div>
      <nav class="menu">
        <ul>
          <li>
            <NuxtLink to="/manager/dashboard"> Dashboard </NuxtLink>
          </li>
          <li>
            <NuxtLink to=""> Students </NuxtLink>
          </li>
          <li>
            <NuxtLink to=""> Managers </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="px-2"></div>
    </aside>
  </div>
</template>

<script setup>
const props = defineProps({
  visible: Boolean,
});

const viewSideBar = useState("viewSideBar", () => false);

function closeSideBar() {
  viewSideBar.value = false;
}
</script>

<style scoped>
.bg {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  width: 0;
  height: 100vh;
  z-index: 9;
  transition: width 0.35s, padding 0.35s;
  padding: 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  transition: width 0.35s;
}

.sideBar {
  position: fixed;
  left: 0;
  top: 0;
  width: 0;
  height: 100vh;
  z-index: 9;
  transition: width 0.35s, padding 0.35s;
  padding: 0;
  padding: 16px 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  transition: width 0.25s, border-color 0.5s;
  @apply border-r-[1px] border-white dark:border-gray-950 bg-white dark:bg-gray-900;
}

.bg.visible {
  width: 100vw;
}

.bg.visible .sideBar {
  width: clamp(200px, 97%, 300px);
  @apply border-r-[1px] border-primary-300 dark:border-primary-500;
}

.header {
  width: 100%;
  margin-bottom: 15px;
  padding: 0 17px 0 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu {
  height: 100%;
  width: 100%;
}

.menu ul {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.menu ul li {
  width: 100%;
}

.menu ul li a {
  width: 100%;
  cursor: pointer;
  padding: 15px 2%;
  display: inline-block;
  border-bottom: 1px solid #242424;

  @apply border-b-[1px] border-gray-300 text-gray-700 dark:text-gray-400 dark:border-gray-700;
}

.menu ul li a:hover {
  @apply dark:bg-gray-800 bg-gray-100;
}
</style>
