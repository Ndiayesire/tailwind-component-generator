<template>
  <div class="flex flex-col w-full h-full pt-20 px-4 lg:px-8 overflow-y-auto bg-gray-50">
    <!-- Header Section -->
    <div class="mb-8 pt-8 ml-10">
      <h1 class="text-5xl font-semibold text-[#10B981] mb-8">
        Tailwind Component Generator
      </h1>
      <p class="text-gray-800 mt-4 max-w-5xl text-[14px]">
        Your ultimate tool for building, customizing, and previewing Tailwind CSS
        components effortlessly. Save time and bring your projects to life with pre-built,
        reusable, and modern components.
      </p>
    </div>

    <!-- Introduction Section -->
    <div class="text-gray-800 leading-relaxed max-w-7xl ml-10">
      <h2 class="text-xl font-semibold mb-4 text-[#10B981]">Introduction</h2>
      <p class="text-[14px]">
        The Tailwind Component Generator is a developer-friendly platform offering an
        extensive library of responsive and beautifully designed UI components. Whether
        you're working on a new project or enhancing an existing one, this tool allows you
        to quickly create and preview Tailwind-based components without the hassle of
        manual design or code writing.
      </p>

      <p class="mt-4 text-[14px]">
        Explore an array of components, blocks, and templates that follow modern design
        principles. Our library ensures that your projects look stunning and remain
        consistent with clean, customizable code.
      </p>
    </div>

    <!-- What's New Section -->
    <div class="mt-10 ml-10">
      <h2 class="text-xl font-semibold mb-6 text-[#10B981]">
        What's New in Tailwind Generator?
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Feature Card 1 -->
        <div class="p-6 bg-white rounded-lg border-[#10B981] shadow-xs border-2">
          <h3 class="text-xl font-semibold mb-2 text-[#10B981]">⚙️ Instant Previews</h3>
          <p class="text-gray-800 text-[14px]">
            Edit components live and see changes instantly with our built-in previewer.
          </p>
        </div>
        <!-- Feature Card 2 -->
        <div class="p-6 bg-white rounded-lg border-[#10B981] shadow-xs border-2">
          <h3 class="text-xl font-semibold mb-2 text-[#10B981]">
            🧩 Ready-to-Use Components
          </h3>
          <p class="text-gray-800 text-[14px]">
            Browse hundreds of pre-built Tailwind components and templates ready to copy.
          </p>
        </div>
        <!-- Feature Card 3 -->
        <div class="p-6 bg-white rounded-lg border-[#10B981] shadow-xs border-2">
          <h3 class="text-xl font-semibold mb-2 text-[#10B981]">🎨 Color Palette Tool</h3>
          <p class="text-gray-800 text-[14px]">
            Generate and explore opacity variations for your Tailwind color palette.
          </p>
        </div>
        <!-- Feature Card 4 -->
        <div class="p-6 bg-white rounded-lg border-[#10B981] shadow-xs border-2">
          <h3 class="text-xl font-semibold mb-2 text-[#10B981]">🚀 No Dependencies</h3>
          <p class="text-gray-600">
            Completely standalone. Copy the code and integrate it into your project with
            ease.
          </p>
        </div>
      </div>
    </div>

    <!-- Call-to-Action Section -->
    <div class="mt-12 text-center pb-12">
      <router-link
        to="/components"
        class="bg-[#10B981] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors float-end"
      >
        Installation →
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
