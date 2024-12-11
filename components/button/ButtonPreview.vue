<template>
  <div class="flex h-screen w-full">
    <div>
      <ButtonLayoutSettingSidebar
        :width="width"
        :height="height"
        :textHEX="textHEX"
        :backgroundHEX="backgroundHEX"
        :buttonText="buttonText"
        :roundedCorners="roundedCorners"
        :boldText="boldText"
        :uppercaseText="uppercaseText"
        @updateButtonSettings="updateButtonSettings"
      />
    </div>
    <div
      class="justify-center items-center flex flex-col mx-auto border-l w-full bg-gray-100"
    >
      <h1 class="absolute top-20 italic text-3xl text-gray-700">Component Previewer</h1>
      <Button
        :label="buttonText"
        :style="{
          width: width + 'rem',
          height: height + 'rem',
          backgroundColor: '#' + textHEX,
          color: '#' + backgroundHEX,
          borderRadius: roundedCorners ? '12px' : '0',
          fontWeight: boldText ? 'bold' : 'normal',
          textTransform: uppercaseText ? 'uppercase' : 'none',
        }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const width = ref();
const height = ref();
const textHEX = ref("34b08d");
const backgroundHEX = ref("34b08d");
const buttonText = ref("Entrer votre texte...");
const roundedCorners = ref(false);
const boldText = ref(false);
const uppercaseText = ref(false);

watch(
  [
    width,
    height,
    textHEX,
    backgroundHEX,
    buttonText,
    roundedCorners,
    boldText,
    uppercaseText,
  ],
  () => {
    console.log("Updated settings:", {
      width: width.value,
      height: height.value,
      textHEX: textHEX.value,
      backgroundHEX: backgroundHEX.value,
      buttonText: buttonText.value,
      roundedCorners: roundedCorners.value,
      boldText: boldText.value,
      uppercaseText: uppercaseText.value,
    });
  }
);

const updateButtonSettings = (newSettings) => {
  width.value = newSettings.width;
  height.value = newSettings.height;
  textHEX.value = newSettings.textHEX;
  backgroundHEX.value = newSettings.backgroundHEX;
  buttonText.value = newSettings.buttonText;
  roundedCorners.value = newSettings.roundedCorners;
  boldText.value = newSettings.boldText;
  uppercaseText.value = newSettings.uppercaseText;
};
</script>
