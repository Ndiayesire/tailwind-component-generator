<template>
  <div
    class="flex items-center justify-between bg-white text-back w-full h-[4rem] px-5 py-3 border-b fixed top-0 z-50"
  >
    <div class="flex items-center gap-2 text-lg ml-72">
      <img src="/post.png" alt="Logo" class="h-[1rem]" />
      <span class="text-semibold text-md font-semibold text-gray-600">Tailwindcss</span>
    </div>

    <div class="flex gap-4 mr-72">
      <div class="flex justify-between items-center">
        <ul class="flex gap-8">
          <li class="flex items-center gap-1">
            <NuxtLink to="/" class="text-gray-600 font-semibold hover:text-primary-500"
              >Docs</NuxtLink
            >
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
        <p class="text-gray-300">|</p>
      </div>

      <div class="flex gap-5 items-center">
        <i
          class="pi pi-github text-gray-300 text-lg hover:text-primary-500 cursor-pointer"
        ></i>
        <i
          class="pi pi-moon text-gray-300 text-lg hover:text-primary-500 cursor-pointer"
        ></i>
      </div>
    </div>
  </div>
</template>
<style></style>
