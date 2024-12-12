<script setup>
import { MENUS } from "../constants/menu";
import { ref, computed } from "vue";

const props = defineProps({
  searchQuery: {
    type: String,
    default: "",
  },
});

const selectedFilter = ref(null);

const filteredComponents = computed(() => {
  return MENUS.filter((component) => {
    const matchesFilter =
      !selectedFilter.value || component.category === selectedFilter.value;
    const matchesSearch = component.name
      .toLowerCase()
      .includes(props.searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });
});
</script>

<template>
  <!-- Component List -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full mt-8 p-8">
    <NuxtLink
      v-for="(component, index) in filteredComponents"
      :key="index"
      :to="component.link"
      class="rounded-xl bg-white p-4 flex flex-col space-y-4 transition border hover:bg-gray-50 text-gray-600 cursor-pointer border-2 border-[#10B981] h-42"
    >
      <p class="text-2xl">{{ component.icon }}</p>
      <h2
        class="text-sm w-24 font-semibold border text-center p-2 rounded text-white shadow-sm bg-gradient-to-r from-[#10B981] to-[#5bb493]"
      >
        {{ component.name }}
      </h2>
      <p class="text-sm">
        {{ component.description }}
      </p>
    </NuxtLink>
  </div>
</template>
