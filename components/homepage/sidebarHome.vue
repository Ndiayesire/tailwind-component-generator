<script setup>
import { ref, computed } from "vue";

const searchQuery = ref("");
const openSubmenus = ref([]);

defineProps({
  activePage: {
    type: String,
    default: "Oreview",
  },
  setActivePage: {
    type: Function,
    required: true,
  },
});

const emit = defineEmits(["update:activePage"]);

const links = ref([
  {
    name: "Overview",
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
      { name: "Button", path: "/component/button" },
      { name: "Input", path: "/component/input" },
      { name: "Card", path: "/component/card" },
      { name: "Table", path: "/component/table" },
      { name: "Modal", path: "/component/modal" },
      { name: "Form Elements", path: "/components/form" },
      { name: "Navigation", path: "/component/navigation" },
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

const setActivePage = (pageName) => {
  emit("update:activePage", pageName);
};

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
<template>
  <div
    class="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-60rem))] right-auto w-[23rem] pb-10 pl-8 pr-6 bg-white overflow-y-scroll"
  >
    <!-- Search Input -->
    <div class="sticky top-4">
      <div class="relative w-full">
        <input
          type="text"
          placeholder="Search"
          v-model="searchQuery"
          class="w-full pl-10 pr-3 py-2 rounded-md bg-white border border-gray-200 text-sm text-gray-600 focus:outline-none focus:border-green-500"
        />
        <i
          class="pi pi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        ></i>
      </div>
    </div>

    <!-- Navigation Links -->
    <nav class="mt-6">
      <ul class="flex flex-col gap-1">
        <li
          v-for="(link, index) in filteredLinks"
          :key="link.name"
          @click="setActivePage(link.name)"
          class="p-2 cursor-pointer rounded hover:bg-gray-500"
        >
          <!-- Main Link -->
          <div class="flex items-center justify-between" @click="toggleSubmenu(index)">
            <div class="flex gap-2 items-center">
              <div class="flex justify-center items-center w-8 h-8 bg-green-100 rounded">
                <i :class="link.icon" class="text-[#10B981] text-[14px]"></i>
              </div>
              <div :to="link.path" class="text-gray-700 text-sm font-medium">
                {{ link.name }}
              </div>
            </div>
            <i
              v-if="link.subitems"
              class="pi text-gray-500 text-xs"
              :class="{
                'pi-chevron-down': !isSubmenuOpen(index),
                'pi-chevron-up': isSubmenuOpen(index),
              }"
            ></i>
          </div>

          <!-- Submenu -->
          <ul v-if="link.subitems" class="ml-3 mt-2" v-show="!isSubmenuOpen(index)">
            <li
              v-for="(subitem, subIndex) in link.subitems"
              :key="subIndex"
              class="py-1 border-l"
            >
              <NuxtLink
                :to="subitem.path"
                class="text-gray-500 text-xs hover:text-green-500 ml-5"
              >
                {{ subitem.name }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.submenu-item {
  margin-left: 1rem;
}

nav ul li {
  transition: background-color 0.2s ease;
}

nav ul li:hover {
  background-color: #f8f8f8;
}
</style>
