<script setup>
import { ref } from "vue";

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
        roundedCorners ? 'rounded-[10px]' : 'rounded-none',
        `bg-[${backgroundHEX}]`,
        `text-[${textHEX}]`,
        `border-[${borderHex}]`,
        `text-[${font}px]`,
        'focus:outline-none',
        'focus:ring-1',
        focusHEX ? `focus:ring-${focusHEX}` : 'focus:ring-red-500',
        'focus:ring-opacity-50',
      ]"
      :style="{
        backgroundColor: backgroundHEX,
        color: textHEX,
        border: `1px solid ${borderHex}`,
        width: `${width}rem`,
        height: `${height}rem`,
        fontSize: `${font}px`,
        outline: isFocused ? `1px solid ${focusHEX}` : 'none',
        boxShadow: isFocused ? `0 0 0 2px ${focusHEX}` : 'none',
      }"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </div>
</template>
