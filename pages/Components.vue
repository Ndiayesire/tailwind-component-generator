<script setup>
const search = ref("");
</script>

<template>
  <div class="flex flex-col h-screen w-full p-8 bg-gray-50 mt-16">
    <div class="flex flex-col justify-center items-center mt-5">
      <h1
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#8aeec9]"
      >
        Tailwind Generator
      </h1>
      <p
        class="text-lg sm:text-xl mt-5 text-center text-gray-600 tracking-normal leading-10 max-w-3xl px-4"
      >
        Collection of useful tools and generators for Tailwind to create, design and
        customize all kinds of web components using a graphical editor.
      </p>
    </div>

    <div class="flex justify-center items-center mt-10">
      <div class="relative w-full max-w-4xl">
        <input
          type="text"
          placeholder="Search"
          v-model="search"
          class="w-full h-12 pl-10 pr-3 py-2 rounded-lg border focus:outline-none text-sm text-gray-400"
        />
        <i
          class="pi pi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        ></i>
      </div>
    </div>

    <ListComponents :searchQuery="search" />
  </div>
</template>
