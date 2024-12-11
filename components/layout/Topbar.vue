<template>
  <div
    class="flex items-center justify-between bg-white text-back w-full h-[10rem] border-b px-4 py-2.5 shadow-xl"
  >
    <div class="flex items-center gap-2 text-lg">
      <img src="/post.png" alt="Logo" class="h-4" />
      <span class="text-semibold text-xl text-gray-600"
        >Tailwind Component Generator</span
      >
    </div>
    <div class="flex justify-between items-center">
      <ul class="flex space-x-6">
        <li>
          <NuxtLink to="/" class="text-gray-600 font-semibold">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/components" class="text-gray-600 font-semibold"
            >Components</NuxtLink
          >
        </li>
      </ul>
    </div>
    <div>
      <Button label="Get Started" size="small" class="border-[#34b08d]" outlined />
    </div>
  </div>
</template>
<script setup></script>
