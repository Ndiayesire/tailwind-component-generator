<script setup>
import { ref } from "vue";
import Exportable from "../exportable/exportButton.vue";

const typeOf = ref("button");
const widthIndex = ref(4);
const heightIndex = ref(2);
const sizeIndex = ref(2);

const widthClasses = [16, 24, 32, 40, 48, 64, 80, 96];
const heightClasses = [4, 8, 16, 32, 40, 48, 64, 96];
const fontSize = ["sm", "base", "lg", "xl", "2xl", "4xl"];
const buttonText = ref("Entrer votre texte");
const textHEX = ref("#ffffff");
const backgroundHEX = ref("#374151");
const roundedCorners = ref(true);
const boldText = ref(true);
const borderHex = ref("#ffffff");
const hoverHEX = ref("#5d646f");
const uppercaseText = ref(false);
const shadow = ref(false);
</script>

<template>
  <div class="flex fixed z-20 inset-0 top-[3.8125rem] w-full flex-col md:flex-row">
    <div
      class="flex order-2 lg:order-1 flex-wrap m-auto lg:m-0 w-full lg:w-[24rem] p-8 lg:p-4 border-2 overflow-y-auto max-h-[55rem] bg-white"
    >
      <div class="flex flex-col w-full">
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
          <Slider :min="0" :max="7" v-model="widthIndex" class="w-full" />
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
          <Slider :min="0" :max="7" v-model="heightIndex" class="w-full" />
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
          <Slider :min="0" :max="5" v-model="sizeIndex" class="w-full" />
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
          <div class="flex items-center gap-2">
            <Checkbox v-model="shadow" binary />
            <label class="text-gray-800 text-sm"> Shadow </label>
          </div>
        </div>

        <div class="mb-2 mt-4">
          <h2 class="text-md font-semibold text-gray-800">Background</h2>
        </div>

        <div class="flex gap-2">
          <input
            type="color"
            v-model="backgroundHEX"
            class="w-8 h-8 rounded-lg text-sm text-gray-400 p-1 bg-gray-50 border cursor-pointer"
          />
          <div
            class="bg-gray-50 rounded-full w-20 h-7 border items-center text-sm justify-center flex"
          >
            {{ backgroundHEX }}
          </div>
        </div>

        <div class="mb-2 mt-2">
          <h2 class="text-md font-semibold text-gray-800">Text</h2>
        </div>

        <div class="flex gap-2">
          <input
            type="color"
            v-model="textHEX"
            class="w-8 h-8 rounded-lg text-sm text-gray-400 p-1 bg-gray-50 border cursor-pointer"
          />
          <div
            class="bg-gray-50 rounded-full w-20 h-7 border items-center text-sm justify-center flex"
          >
            {{ textHEX }}
          </div>
        </div>

        <div class="mb-2 mt-2">
          <h2 class="text-md font-semibold text-gray-800">Border</h2>
        </div>

        <div class="flex gap-2">
          <input
            type="color"
            v-model="borderHex"
            class="w-8 h-8 rounded-lg text-sm text-gray-400 p-1 bg-gray-50 border cursor-pointer"
          />
          <div
            class="bg-gray-50 rounded-full w-20 h-7 border items-center text-sm justify-center flex"
          >
            {{ borderHex }}
          </div>
        </div>

        <div class="mb-2 mt-2">
          <h2 class="text-md font-semibold text-gray-800">Hover</h2>
        </div>

        <div class="flex gap-2">
          <input
            type="color"
            v-model="hoverHEX"
            class="w-8 h-8 rounded-lg text-sm text-gray-400 p-1 bg-gray-50 border cursor-pointer"
          />
          <div
            class="bg-gray-50 rounded-full w-20 h-7 border items-center text-sm justify-center flex"
          >
            {{ hoverHEX }}
          </div>
        </div>

        <div class="mb-2 mt-3">
          <h2 class="text-md font-semibold text-gray-800">Content</h2>
        </div>

        <div class="w-full">
          <InputText
            class="w-full h-[2.4rem]"
            type="text"
            v-model="buttonText"
            placeholder="Entrer votre texte ici..."
          />
        </div>

        <Exportable
          :type="typeOf"
          :buttonText="buttonText"
          :width="widthClasses[widthIndex]"
          :height="heightClasses[heightIndex]"
          :backgroundHEX="backgroundHEX"
          :textHEX="textHEX"
          :hoverHEX="hoverHEX"
          :roundedCorners="roundedCorners"
          :boldText="boldText"
          :uppercaseText="uppercaseText"
          :borderHex="borderHex"
          :font="fontSize[sizeIndex]"
          :shadow="shadow"
        />
      </div>
    </div>
    <ButtonPreview
      :buttonText="buttonText"
      :width="widthClasses[widthIndex]"
      :height="heightClasses[heightIndex]"
      :backgroundHEX="backgroundHEX"
      :textHEX="textHEX"
      :hoverHEX="hoverHEX"
      :roundedCorners="roundedCorners"
      :boldText="boldText"
      :uppercaseText="uppercaseText"
      :borderHex="borderHex"
      :font="fontSize[sizeIndex]"
      :shadow="shadow"
    />
  </div>
</template>
