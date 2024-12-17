<script setup>
import { ref } from "vue";

const widthMapping = {
  16: "4rem",
  24: "6rem",
  32: "8rem",
  40: "10rem",
  48: "12rem",
  64: "16rem",
  80: "20rem",
  96: "24rem",
  full: "100%",
};

const heightMapping = {
  4: "1rem",
  8: "2rem",
  16: "4rem",
  32: "8rem",
  40: "10rem",
  48: "12rem",
  64: "16rem",
  96: "24rem",
  full: "100%",
};

const isHovered = ref(false);

const props = defineProps({
  width: Number,
  height: Number,
  backgroundHEX: String,
  hoverHEX: String,
  roundedCorners: Boolean,
  shadow: Boolean,
  borderHex: String,
});
</script>

<template>
  <div
    class="flex order-1 lg:order-2 flex-col w-full lg:w-5/6 bg-gray-100 py-8 lg:py-14 justify-center items-center border-l"
  >
    <div
      :class="[
        'cursor-pointer',
        `w-${width}`,
        `h-${height}`,
        roundedCorners ? 'rounded-lg' : 'rounded-none',
        shadow ? 'shadow-xl' : '',
        'border',
        `bg-[${backgroundHEX}]`,
        `text-[${textHEX}]`,
        `border-[${borderHex}]`,
        `hover:border-[${hoverHEX}]`,
      ]"
      :style="{
        backgroundColor: backgroundHEX,
        color: textHEX,
        border: isHovered ? `2px solid ${hoverHEX}` : `2px solid ${borderHex}`,
        width: widthMapping[width],
        height: heightMapping[height],
      }"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      {{ buttonText }}
    </div>
  </div>
</template>
