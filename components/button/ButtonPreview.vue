<script setup>
import { ref } from "vue";

const isHovered = ref(false);

const props = defineProps({
  buttonText: String,
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
  font: String,
});
</script>
<template>
  <div
    class="flex flex-col order-1 lg:order-2 flex-col w-full lg:w-5/6 bg-gray-50 py-8 lg:py-14 justify-center items-center border-l"
  >
    <button
      :class="[
        'px-4 py-2',
        `w-${width}`,
        `h-${height}`,
        roundedCorners ? 'rounded-[10px]' : 'rounded-none',
        boldText ? 'font-bold' : 'font-normal',
        uppercaseText ? 'uppercase' : 'normal-case',
        shadow ? 'shadow-xl' : '',
        'border',
        `bg-[${backgroundHEX}]`,
        `text-[${textHEX}]`,
        `border-[${borderHex}]`,
        `text-[${font}px]`,
        `hover:bg-[${hoverHEX}]`,
      ]"
      :style="{
        backgroundColor: isHovered ? hoverHEX : backgroundHEX,
        color: textHEX,
        border: `1px solid ${borderHex}`,

        fontSize: `${font}px`,
      }"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      {{ buttonText }}
    </button>
  </div>
</template>
