<script setup>
import { ref } from "vue";

const widthIndex = ref(0);
const heightIndex = ref(1);
const sizeIndex = ref(0);

const widthClasses = [16, 24, 32, 40, 48, 64, 80, 96];
const heightClasses = [4, 8, 16, 32, 40, 48, 64, 96];
const fontSize = [4, 8, 16, 32];

const buttonText = ref("Entrer votre texte");
const textHEX = ref("000000");
const backgroundHEX = ref("ffffff");
const roundedCorners = ref(true);
const boldText = ref(true);
const border = ref("ffffff");
const uppercaseText = ref(false);
</script>

<template>
  <div class="flex h-screen w-full">
    <div class="w-[20rem] bg-gray-50 p-6 h-full border border-gray-100 shadow-xl">
      <div class="mb-5">
        <h2 class="text-md font-semibold text-gray-800">Layout</h2>
      </div>

      <!-- Width Slider -->
      <div class="flex flex-col gap-2 font-medium">
        <div class="flex gap-2 items-center mb-2">
          <label class="text-gray-800 text-sm">Width</label>
          <div
            class="bg-gray-50 rounded-full w-7 h-7 items-center justify-center flex text-sm border"
          >
            {{ widthClasses[widthIndex] }}
          </div>
        </div>
        <Slider min="0" max="6" v-model="widthIndex" class="w-full" />
      </div>

      <!-- Height Slider -->
      <div class="flex flex-col gap-2 font-medium">
        <div class="flex gap-2 items-center mb-2 mt-3">
          <label class="text-gray-800 text-sm">Height</label>
          <div
            class="bg-gray-50 rounded-full w-7 h-7 items-center justify-center flex text-sm border"
          >
            {{ heightClasses[heightIndex] }}
          </div>
        </div>
        <Slider min="0" max="6" v-model="heightIndex" class="w-full" />
      </div>

      <div class="flex flex-col gap-2 mt-3 font-medium">
        <div class="flex gap-2 items-center mb-2">
          <label class="text-gray-800 text-sm">Font Size</label>
          <div
            class="bg-gray-50 rounded-full w-7 h-7 items-center justify-center flex text-sm border"
          >
            {{ fontSize[sizeIndex] }}
          </div>
        </div>
        <Slider max="6" min="0" v-model="sizeIndex" class="w-full" />
      </div>

      <div class="mb-5 mt-5">
        <h2 class="text-md font-semibold text-gray-800">Settings</h2>
      </div>
      <div class="flex flex-col justify-center gap-4">
        <div class="flex items-center gap-2">
          <Checkbox v-model="roundedCorners" binary />
          <label class="text-gray-800 text-sm"> Rounded Corners </label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="boldText" binary />
          <label class="text-gray-800 text-sm"> Bold Text </label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="uppercaseText" binary />
          <label class="text-gray-800 text-sm"> Uppercase Text </label>
        </div>
      </div>

      <div class="mb-2 mt-4">
        <h2 class="text-md font-semibold text-gray-800">Background</h2>
      </div>

      <div class="flex gap-2">
        <ColorPicker
          v-model="backgroundHEX"
          inputId="cp-hex"
          format="hex"
          class="mb-2 border rounded-lg"
        />
        <div
          class="bg-gray-50 rounded-full w-20 h-7 border items-center text-sm justify-center flex"
        >
          #{{ backgroundHEX }}
        </div>
      </div>

      <div class="mb-2">
        <h2 class="text-md font-semibold text-gray-800">Text</h2>
      </div>

      <div class="flex gap-2">
        <ColorPicker
          v-model="textHEX"
          inputId="cp-hex"
          format="hex"
          class="mb-4 border rounded-lg"
        />
        <div
          class="bg-gray-50 rounded-full w-20 h-7 border items-center text-sm justify-center flex"
        >
          #{{ textHEX }}
        </div>
      </div>

      <div class="mb-2">
        <h2 class="text-md font-semibold text-gray-800">Border</h2>
      </div>

      <div class="flex gap-2">
        <ColorPicker
          v-model="border"
          inputId="cp-hex"
          format="hex"
          class="mb-4 border rounded-lg"
        />
        <div
          class="bg-gray-50 rounded-full w-20 h-7 border items-center text-sm justify-center flex"
        >
          #{{ border }}
        </div>
      </div>

      <div class="mb-2 mt-2">
        <h2 class="text-md font-semibold text-gray-800">Content</h2>
      </div>

      <div class="w-full">
        <InputText
          class="w-[17rem] h-[2.4rem]"
          type="text"
          v-model="buttonText"
          placeholder="Entrer votre texte ici..."
        />
      </div>
    </div>
    <ButtonPreview
      :buttonText="buttonText"
      :width="widthClasses[widthIndex]"
      :height="heightClasses[heightIndex]"
      :backgroundHEX="backgroundHEX"
      :textHEX="textHEX"
      :roundedCorners="roundedCorners"
      :boldText="boldText"
      :uppercaseText="uppercaseText"
    />
  </div>
</template>

<style scoped></style>
