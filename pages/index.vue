<script setup>
import SidebarHome from "../components/homepage/sidebarHome.vue";
import Oreview from "../components/homepage/oreview.vue";
import GettingStarted from "../components/homepage/configuration.vue";

const activePage = ref("Oreview");

const updateActivePage = (pageName) => {
  activePage.value = pageName;
};

const activePageComponent = computed(() => {
  switch (activePage.value) {
    case "Oreview":
      return Oreview;
    case "Configuration":
      return GettingStarted;
    default:
      return Oreview;
  }
});
</script>
<template>
  <div class="w-full flex h-screen">
    <div class="w-[23rem]">
      <SidebarHome :activePage="activePage" @update:activePage="updateActivePage" />
    </div>
    <div class="flex-1 overflow-auto">
      <component :is="activePageComponent" />
    </div>
  </div>
</template>
