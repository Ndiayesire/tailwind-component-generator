<template>
  <div
    class="flex items-center justify-between bg-white text-back w-full h-[4rem] px-5 py-3 border-b fixed top-0 z-50"
  >
    <div class="flex items-center gap-2 text-lg ml-0 md:ml-16 lg:ml-32">
      <img src="/post.png" alt="Logo" class="h-[1rem]" />
      <span class="text-semibold text-md font-semibold text-gray-600">Tailwindcss</span>
    </div>
    <div class="flex gap-4 ml-auto">
      <div class="flex justify-between items-center">
        <ul class="flex gap-8 hidden md:flex">
          <li class="flex items-center gap-1">
            <NuxtLink to="/" class="text-gray-600 font-semibold hover:text-primary-500">
              Docs
            </NuxtLink>
          </li>
          <li class="flex items-center gap-2">
            <NuxtLink
              to="/Components"
              class="text-gray-600 font-semibold hover:text-primary-500"
            >
              Components
            </NuxtLink>
          </li>
          <li class="flex items-center gap-2 mr-5">
            <NuxtLink
              to="/ComingSoon"
              class="text-gray-600 font-semibold hover:text-primary-500"
            >
              Forms Builder
            </NuxtLink>
          </li>
        </ul>
        <p class="text-gray-300 hidden md:block">|</p>
      </div>

      <div class="flex gap-5 items-center">
        <i
          class="pi pi-github text-gray-300 text-lg hover:text-primary-500 cursor-pointer"
        ></i>
        <i
          class="pi pi-moon text-gray-300 text-lg hover:text-primary-500 cursor-pointer"
        ></i>
      </div>

      <!-- Mobile Menu Toggle -->
      <div class="block md:hidden">
        <button class="text-gray-600 hover:text-primary-500" @click="toggleMenu">
          <i class="pi pi-bars text-lg"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div
    v-if="isMenuOpen"
    class="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center md:hidden"
  >
    <div class="bg-white p-5 w-4/5 rounded-lg shadow-lg relative">
      <!-- Close button in the top-right corner -->
      <div class="absolute top-3 right-3 text-gray-600 font-semibold" @click="toggleMenu">
        <i class="pi pi-times txet-gray-600"></i>
      </div>

      <ul class="flex flex-col gap-4 text-gray-600">
        <li>
          <NuxtLink to="/" class="font-semibold hover:text-primary-500">Docs</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/Components" class="font-semibold hover:text-primary-500"
            >Components</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/ComingSoon" class="font-semibold hover:text-primary-500"
            >Forms Builder</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
