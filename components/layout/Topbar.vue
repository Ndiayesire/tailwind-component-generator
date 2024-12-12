<template>
  <div
    class="flex items-center justify-between bg-white text-back w-full h-[4rem] border-b px-4 py-2.5"
  >
    <div class="flex items-center gap-2 text-lg">
      <img src="/post.png" alt="Logo" class="h-4" />
      <span class="text-semibold text-xl text-gray-600"
        >Tailwind Component Generator</span
      >
    </div>
    <div class="flex justify-between items-center">
      <ul class="flex gap-8">
        <li class="flex items-center gap-1">
          <i class="pi pi-home"></i>
          <NuxtLink to="/" class="text-gray-600 font-semibold">Home</NuxtLink>
        </li>
        <li class="flex items-center gap-2">
          <i class="pi pi-th-large"></i>
          <NuxtLink to="/Components" class="text-gray-600 font-semibold"
            >Components</NuxtLink
          >
        </li>
        <li class="flex items-center gap-2">
          <i class="pi pi-palette"></i>
          <NuxtLink to="/ButtonPreview" class="text-gray-600 font-semibold"
            >Forms Builder</NuxtLink
          >
        </li>
      </ul>
    </div>
    <div>
      <Button
        label="Contributions"
        size="small"
        class="border-[#34b08d]"
        icon="pi pi-github"
        outlined
      />
    </div>
  </div>
</template>
<script setup></script>
