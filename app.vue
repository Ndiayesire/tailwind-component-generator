<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <Topbar />

    <div class="flex">
      <NuxtPage
        :transition="{
          name: 'bounce',
          mode: 'out-in',
        }"
      />
    </div>
  </div>
</template>

<script setup>
import Topbar from "../components/layout/Topbar.vue";
</script>
