<template>
  <div class="flex flex-col h-screen bg-gray-50">
    <Topbar />

    <div class="flex">
      <NuxtPage
      />
    </div>
  </div>
</template>

<script setup>
import Topbar from "../components/layout/Topbar.vue";
</script>
