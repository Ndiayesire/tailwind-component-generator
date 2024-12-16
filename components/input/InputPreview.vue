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
};

const heightMapping = {
  4: "1rem",
  8: "2rem",
  16: "4rem",
  24: "6rem",
  32: "8rem",
  40: "10rem",
  48: "12rem",
  64: "16rem",
  96: "24rem",
};

const isFocused = ref(false);

const props = defineProps({
  placeholderText: String,
  width: Number,
  height: Number,
  backgroundHEX: String,
  textHEX: String,
  focusHEX: String,
  roundedCorners: Boolean,
  borderHex: String,
  boldText: Boolean,
  font: String,
  selectedInputType: String,
});
</script>

<template>
  <div
    class="flex order-1 lg:order-2 flex-col w-full lg:w-5/6 bg-gray-50 py-8 lg:py-14 justify-center items-center border-l"
  >
    <input
      :type="selectedInputType"
      :placeholder="placeholderText || ''"
      :class="[
        'p-3',
        'border',
        `w-${width}`,
        `h-${height}`,
        boldText ? 'font-bold' : 'font-normal',
        roundedCorners ? 'rounded-lg' : 'rounded-none',
        `bg-[${backgroundHEX}]`,
        `text-[${textHEX}]`,
        `border-[${borderHex}]`,
        `text-${font}`,
        'focus:outline-none',
        'focus:ring-1',
        focusHEX ? `focus:ring-${focusHEX}` : 'focus:ring-red-500',
        'focus:ring-opacity-50',
      ]"
      :style="{
        backgroundColor: backgroundHEX,
        color: textHEX,
        border: `1px solid ${borderHex}`,
        width: widthMapping[width],
        height: heightMapping[height],
        outline: isFocused ? `1px solid ${focusHEX}` : 'none',
        boxShadow: isFocused ? `0 0 0 2px ${focusHEX}` : 'none',
      }"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </div>
</template>
