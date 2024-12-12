<template>
  <div
    class="flex order-1 lg:order-2 flex-col w-full lg:w-5/6 bg-gray-100 py-8 lg:py-14 justify-center items-center border-l"
  >
    <button
      :class="[
        'px-4 py-2',
        `w-${width}`,
        `h-${height}`,
        roundedCorners ? 'rounded-[12px]' : 'rounded-none',
        boldText ? 'font-bold' : 'font-normal',
        uppercaseText ? 'uppercase' : 'normal-case',
      ]"
      :style="{ backgroundColor: `#${backgroundHEX}`, color: `#${textHEX}` }"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  buttonText: {
    type: String,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  backgroundHEX: {
    type: String,
  },
  textHEX: {
    type: String,
  },
  roundedCorners: {
    type: Boolean,
  },
  boldText: {
    type: Boolean,
  },
  uppercaseText: {
    type: Boolean,
  },
});
</script>
