<script setup>
const search = ref("");
</script>
<template>
  <div class="flex flex-col h-screen w-full p-8">
    <div class="flex flex-col justify-center items-center mt-5">
      <h1
        class="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#8aeec9]"
      >
        Tailwind Generator
      </h1>
      <p
        class="text-2xl mt-5 w-[47rem] text-center text-gray-600 tracking-normal leading-10"
      >
        Collection of useful tools and generators for Tailwind to create, design and
        customize all kind of web components using a graphical editor.
      </p>
    </div>

    <div class="flex justify-center items-center space-x-4 mt-10">
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText
          v-model="search"
          placeholder="Search a component..."
          class="w-[50rem] text-xs"
        />
      </IconField>
    </div>
    <ListComponents :searchQuery="search" />
  </div>
</template>
