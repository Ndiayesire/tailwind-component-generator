<template>
  <div class="flex flex-col w-full h-full pt-20 px-4 md:px-8 overflow-y-auto bg-gray-50">
    <div class="max-w-8xl rounded-md p-8 leading-relaxed">
      <h2 class="text-xl font-semibold mb-4 text-[#10B981]">Installation Guide</h2>

      <p class="text-[14px] text-gray-800 mb-6">
        The Tailwind CSS Generator is designed to be easy to use with no installation
        process required. Unlike many libraries that need to be installed via npm or
        similar package managers, you can directly integrate the components into your
        existing project without installing the library.
      </p>

      <h3 class="text-xl font-semibold mb-4 text-[#10B981]">
        Why Doesn’t the Tailwind CSS Generator Require Installation?
      </h3>
      <p class="text-[14px] text-gray-800 mb-6">
        The Tailwind CSS Generator is a library of pre-built components and styles that
        can be copied directly into your project’s code. It doesn’t function as a package
        that requires installation. Instead, you can copy the **HTML** and **Tailwind CSS
        classes** and immediately use them in your project, making it flexible and easy to
        integrate.
      </p>

      <h3 class="text-xl font-semibold mb-4 text-[#10B981]">Project Requirements</h3>
      <p class="text-[14px] text-gray-800 mb-6">
        While the Tailwind CSS Generator doesn’t have its own installation process, your
        project should be set up with specific tools to work with its components. Below
        are the common setups required:
      </p>

      <!-- Cards for setup instructions -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-5 pt-5">
        <!-- Tailwind CSS Card -->
        <div class="bg-white p-4 rounded-xl border-[#10B981] shadow-xs border-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
            alt="Tailwind CSS Logo"
            class="w-18 h-16 mb-4 mx-auto"
          />
          <h4 class="text-md font-semibold text-[#10B981] mb-4">
            Tailwind CSS Project Setup
          </h4>
          <p class="text-[15px] text-gray-800 mb-4">
            If you're working with a plain HTML project or any other framework, follow the
            <a
              href="https://tailwindcss.com/docs/installation"
              target="_blank"
              class="text-[#10B981] hover:text-[#10B981]"
              >official Tailwind CSS installation guide</a
            >
            to get started.
          </p>
        </div>

        <!-- Vue.js Card -->
        <div class="bg-white p-4 rounded-lg border-[#10B981] shadow-xs border-2">
          <img
            src="https://vuejs.org/images/logo.png"
            alt="Vue.js Logo"
            class="w-16 h-16 mb-4 mx-auto"
          />
          <h4 class="text-md font-semibold text-[#10B981] mb-4">
            Vue.js with Tailwind CSS Setup
          </h4>
          <p class="text-[15px] text-gray-800 mb-4">
            For Vue.js, you can set up Tailwind CSS using the steps from the official
            guide:
            <a
              href="https://tailwindcss.com/docs/guides/vue-3"
              target="_blank"
              class="text-[#10B981] hover:text-[#10B981]"
              >Vue 3 + Tailwind CSS Setup</a
            >.
          </p>
        </div>

        <!-- Nuxt.js Card -->
        <div class="bg-white p-4 rounded-lg border-[#10B981] shadow-xs border-2">
          <img
            src="https://nuxt.com/assets/design-kit/icon-green.svg"
            alt="Nuxt.js Logo"
            class="w-16 h-16 mb-4 mx-auto"
          />
          <h4 class="text-md font-semibold text-[#10B981] mb-4">
            Nuxt.js with Tailwind CSS Setup
          </h4>
          <p class="text-[14px] text-gray-800 mb-4">
            To integrate Tailwind CSS into a Nuxt.js project, follow the setup guide
            provided here:
            <a
              href="https://tailwindcss.com/docs/guides/nuxtjs"
              target="_blank"
              class="text-[#10B981] hover:text-[#10B981]"
              >Nuxt.js + Tailwind CSS Setup Guide</a
            >.
          </p>
        </div>
        <!-- React Card -->
        <div class="bg-white p-6 rounded-lg border-[#10B981] shadow-xs border-2">
          <img
            src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
            alt="React Logo"
            class="w-18 h-16 mb-4 mx-auto"
          />
          <h4 class="text-md font-semibold text-[#10B981] mb-4">
            React with Tailwind CSS Setup
          </h4>
          <p class="text-[14px] text-gray-800 mb-4">
            To integrate Tailwind CSS into a React project, follow the setup guide
            provided here:
            <a
              href="https://tailwindcss.com/docs/guides/create-react-app"
              target="_blank"
              class="text-[#10B981] hover:text-[#10B981]"
              >React + Tailwind CSS Setup Guide</a
            >.
          </p>
        </div>
      </div>

      <div
        class="text-[14px] text-gray-600 mt-10 max-w-4xl bg-[#ecfaf5] p-3 rounded-xl border-l-4 border-[#10B981]"
      >
        By following the setup guides for Tailwind CSS, Vue JS, or Nuxt.js, you'll be
        ready to use TailwindUI components right away! If you need help setting up your
        project, refer to the links provided above for detailed instructions.
      </div>
    </div>
  </div>
</template>

<script setup></script>
