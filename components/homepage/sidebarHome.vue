<template>
  <div
    class="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[23rem] pb-10 pl-8 pr-6 overflow-y-auto bg-white overflow-y-scroll"
  >
    <!-- Search Input -->
    <div class="sticky top-8 -ml-0.5 flex items-center">
      <div class="relative w-full">
        <input
          type="text"
          placeholder="Search"
          v-model="searchQuery"
          class="w-full pl-10 pr-3 py-2 rounded-lg border focus:outline-none text-sm text-gray-400"
        />
        <i
          class="pi pi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        ></i>
      </div>
    </div>

    <!-- Navigation Links -->
    <div class="mt-[3rem]">
      <ul class="flex flex-col">
        <li
          v-for="(link, index) in filteredLinks"
          :key="link.name"
          class="flex flex-col hover:bg-gray-50 hover:rounded p-2.5 cursor-pointer"
        >
          <!-- Main Link -->
          <div class="flex items-center justify-between" @click="toggleSubmenu(index)">
            <div class="flex gap-2 items-center">
              <div
                class="flex justify-center border border-gray-300 p-2 items-center w-8 rounded-md"
              >
                <i :class="link.icon" class="text-gray-500 text-[13px]"></i>
              </div>
              <NuxtLink :to="link.path" class="text-gray-500 font-semibold text-[15px]">
                {{ link.name }}
              </NuxtLink>
            </div>

            <i
              v-if="link.subitems"
              class="pi text-gray-500 text-sm"
              :class="{
                'pi-chevron-down': !isSubmenuOpen(index),
                'pi-chevron-up': isSubmenuOpen(index),
              }"
            ></i>
          </div>

          <!-- Submenu -->
          <ul
            v-if="link.subitems"
            class="submenu mt-2 ml-2 border-l"
            v-show="!isSubmenuOpen(index)"
          >
            <li
              v-for="(subitem, subIndex) in link.subitems"
              :key="subIndex"
              class="submenu-item pl-4 py-1"
            >
              <NuxtLink
                :to="subitem.path"
                class="text-gray-400 text-sm hover:text-primary-500"
              >
                {{ subitem.name }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const searchQuery = ref("");
const openSubmenus = ref([]);

const links = ref([
  {
    name: "Getting Started",
    path: "/getting-started",
    icon: "pi pi-home",
  },
  {
    name: "Configuration",
    path: "/configuration",
    icon: "pi pi-cog",
  },
  {
    name: "Components",
    path: "/components",
    icon: "pi pi-sitemap",
    subitems: [
      { name: "Button", path: "/components/button" },
      { name: "Input", path: "/components/button" },
      { name: "Card", path: "/components/card" },
      { name: "Table", path: "/components/table" },
      { name: "Modal", path: "/components/modal" },
      { name: "Form Elements", path: "/components/forms" },
      { name: "Navigation", path: "/components/navigation" },
    ],
  },
  {
    name: "Customization",
    path: "/customization",
    icon: "pi pi-palette",
  },
  {
    name: "Utilities",
    path: "/utilities",
    icon: "pi pi-cog",
  },
]);

const filteredLinks = computed(() => {
  return links.value.filter((link) =>
    link.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const toggleSubmenu = (index) => {
  if (openSubmenus.value.includes(index)) {
    openSubmenus.value = openSubmenus.value.filter((i) => i !== index);
  } else {
    openSubmenus.value.push(index);
  }
};

const isSubmenuOpen = (index) => openSubmenus.value.includes(index);
</script>

<style scoped>
.menu-item {
  border-bottom: 1px solid #ddd;
}

.submenu {
  list-style: none;
  padding-left: 1rem;
}

.submenu-item {
  padding: 0.3rem 0;
}

.hover\:rounded:hover {
  border-radius: 0.5rem;
}
</style>
