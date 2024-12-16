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
    class="flex order-1 lg:order-2 flex-col w-full lg:w-5/6 bg-gray-100 py-8 lg:py-14 justify-center items-center border-l"
  >
    <button
      :class="[
        `w-${width}`,
        `h-${height}`,
        boldText ? 'font-bold' : 'font-normal',
        roundedCorners ? 'rounded-lg' : 'rounded-none',
        `text-${font}`,
        uppercaseText ? 'uppercase' : 'normal-case',
        shadow ? 'shadow-xl' : '',
        'border',
        `bg-[${backgroundHEX}]`,
        `text-[${textHEX}]`,
        `border-[${borderHex}]`,
        `hover:bg-[${hoverHEX}]`,
      ]"
      :style="{
        backgroundColor: isHovered ? hoverHEX : backgroundHEX,
        color: textHEX,
        border: `1px solid ${borderHex}`,
        width: widthMapping[width],
        height: heightMapping[height],
      }"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      {{ buttonText }}
    </button>
  </div>
</template>
