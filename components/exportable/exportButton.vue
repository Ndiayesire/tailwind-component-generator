<script setup>
import { ref, computed } from "vue";
import Modal from "./modal.vue";

const props = defineProps({
  type: String,
  buttonText: String,
  placeholderText: String,
  width: Number,
  height: Number,
  backgroundHEX: String,
  textHEX: String,
  hoverHEX: String,
  roundedCorners: Boolean,
  boldText: Boolean,
  uppercaseText: Boolean,
  shadow: Boolean,
  borderHex: String,
  focusHEX: String,
  selectedInputType: String,
  font: String,
});

const showModal = ref(false);

const exportCode = computed(() => {
  if (props.type === "button") {
    const buttonClasses = [
      "px-4 py-2",
      props.width ? `w-${props.width}` : "",
      props.height ? `h-${props.height}` : "",
      props.roundedCorners ? "rounded-[10px]" : "rounded-none",
      props.boldText ? "font-bold" : "font-normal",
      props.uppercaseText ? "uppercase" : "normal-case",
      props.shadow ? "shadow-xl" : "",
      "border",
      `bg-[${props.backgroundHEX}]`,
      `hover:bg-[${props.hoverHEX}]`,
      `text-[${props.textHEX}]`,
      `border-[${props.borderHex}]`,
      `text-[${props.font}px]`,
    ].join(" ");

    return `<button class="${buttonClasses}">${props.buttonText}</button>`;
  } else if (props.type === "input") {
    const inputClasses = [
      "p-3",
      "border",
      props.width ? `w-${props.width}` : "",
      props.height ? `h-${props.height}` : "",
      props.roundedCorners ? "rounded-[10px]" : "rounded-none",
      props.boldText ? "font-bold" : "font-normal",
      `bg-[${props.backgroundHEX}]`,
      `text-[${props.textHEX}]`,
      `border-[${props.borderHex}]`,
      `text-[${props.font}px]`,
      "focus:outline-none",
      "focus:ring-1",
      props.focusHEX ? `focus:ring-${props.focusHEX}` : "focus:ring-red-500",
      "focus:ring-opacity-50",
    ].join(" ");
    return `<input type="${props.selectedInputType}" placeholder="${props.placeholderText}" class="${inputClasses}" />`;
  }
  return "";
});

const generateCode = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>
<template>
  <div class="flex flex-col gap-2 mt-8">
    <Button
      label="Exporter Tailwind CSS + HTML"
      size="small"
      class="border-none"
      @click="generateCode"
    />

    <button
      class="bg-gray-700 border-none p-2 rounded-md text-[1rem] font-semibold cursor-pointer emibold text-white"
    >
      Reset settings
    </button>
  </div>
  <Modal v-if="showModal" :previewCode="exportCode" @close="closeModal" />
</template>
