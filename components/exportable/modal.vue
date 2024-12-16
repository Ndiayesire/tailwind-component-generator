<script setup>
import { Button } from "primevue";
import { onMounted } from "vue";

const props = defineProps({
  previewCode: String,
});

const emit = defineEmits(["close"]);

const isVisible = ref(true);

const closeModal = () => {
  emit("close");
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(props.previewCode).then(() => {
    alert("Code copied to clipboard!");
  });
};

onMounted(() => {
  if (typeof window !== "undefined") {
    const Prism = useNuxtApp().$prism;
    Prism.highlightAll();
  }
});
</script>

<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-7xl">
      <!-- Modal Header -->
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold text-gray-600">Tailwind CSS + HTML</h3>
        <button class="text-gray-600 hover:text-gray-800" @click="closeModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div class="mb-4">
        <pre class="language-html">
            <code>{{ previewCode }}</code>
         </pre>
      </div>

      <div class="flex justify-end">
        <Button
          size="small"
          class="py-2 px-4 rounded-md"
          @click="copyToClipboard"
          label="Copy to Clipboard"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
