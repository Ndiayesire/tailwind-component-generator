<template>
  <div class="flex flex-col h-screen">
    <!-- Top Bar -->
    <Topbar />

    <!-- Main Content -->
    <div class="flex">
      <ButtonPreview />
      <NuxtPage />
    </div>
  </div>
</template>

//
<script setup>
import Topbar from "../components/layout/Topbar.vue";
//
</script>

<style scoped>
.h-screen {
  max-height: 95vh;
}
</style>
