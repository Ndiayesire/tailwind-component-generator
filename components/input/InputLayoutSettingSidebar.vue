<script setup>
import { ref } from "vue";
import Exportable from "../exportable/exportButton.vue";

const selectedInputType = ref("text");

const inputTypes = [
  { label: "Text", value: "text" },
  { label: "Password", value: "password" },
  { label: "Number", value: "number" },
];

const typeOf = ref("input");
const widthIndex = ref(7);
const heightIndex = ref(2);
const sizeIndex = ref(0);

const widthClasses = [16, 24, 32, 40, 48, 64, 80, 96];
const heightClasses = [4, 8, 16, 24, 32, 40, 48, 64, 96];
const fontSize = ["sm", "base", "lg", "xl", "2xl", "4xl"];

const placeholderText = ref("Entrer votre texte...");
const textHEX = ref("#7a7575");
const backgroundHEX = ref("#ffffff");
const roundedCorners = ref(true);
const boldText = ref(false);
const borderHex = ref("#7a7575");
const focusHEX = ref("#7a7575");
</script>

<template>
  <div class="flex fixed z-20 inset-0 top-[3.8125rem] w-full flex-col md:flex-row">
    <div
      class="flex order-2 lg:order-1 flex-wrap m-auto lg:m-0 w-full lg:w-[24rem] p-8 lg:p-4 border overflow-y-auto max-h-[55rem] bg-white"
    >
      <div class="flex flex-col w-full">
        <div class="mb-3">
          <h2 class="text-md font-semibold text-gray-800">Layout</h2>
        </div>
        <div class="mt-4 mb-4">
          <div class="flex gap-2 items-center mb-2">
            <label class="text-gray-800 font-semibold text-sm">Input Type</label>
          </div>
          <Dropdown
            id="inputType"
            v-model="selectedInputType"
            :options="inputTypes"
            option-label="label"
            option-value="value"
            placeholder="Choose an input type"
            class="w-full"
          />
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
          <Slider :min="0" :max="8" v-model="heightIndex" class="w-full" />
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
        </div>

        <div class="mb-2 mt-4">
          <h2 class="text-md font-semibold text-gray-800">Background</h2>
        </div>

        <div class="flex gap-2 mb-3">
          <input
            type="color"
            v-model="backgroundHEX"
            class="w-8 h-8 rounded-lg text-sm text-gray-400 p-1 bg-gray-50 border cursor-pointer"
          />
          <!-- <ColorPicker
          v-model="backgroundHEX"
          inputId="cp-hex"
          format="hex"
          class="mb-2 border rounded-lg"
        /> -->
          <div
            class="bg-gray-50 rounded-full w-20 h-7 border items-center text-sm justify-center flex"
          >
            {{ backgroundHEX }}
          </div>
        </div>

        <div class="mb-2">
          <h2 class="text-md font-semibold text-gray-800">Text</h2>
        </div>

        <div class="flex gap-2 mb-3">
          <!-- <ColorPicker
          v-model="textHEX"
          inputId="cp-hex"
          format="hex"
          class="mb-4 border rounded-lg"
        /> -->

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

        <div class="mb-3">
          <h2 class="text-md font-semibold text-gray-800">Border</h2>
        </div>

        <div class="flex gap-2 mb-3">
          <!-- <ColorPicker
          v-model="border"
          inputId="cp-hex"
          format="hex"
          class="mb-4 border rounded-lg"
        /> -->
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

        <div class="mb-2">
          <h2 class="text-md font-semibold text-gray-800">Focus</h2>
        </div>

        <div class="flex gap-2 mb-3">
          <!-- <ColorPicker
          v-model="border"
          inputId="cp-hex"
          format="hex"
          class="mb-4 border rounded-lg"
        /> -->
          <input
            type="color"
            v-model="focusHEX"
            class="w-8 h-8 rounded-lg text-sm text-gray-400 p-1 bg-gray-50 border cursor-pointer"
          />
          <div
            class="bg-gray-50 rounded-full w-20 h-7 border items-center text-sm justify-center flex"
          >
            {{ focusHEX }}
          </div>
        </div>

        <div class="mb-2 mt-3">
          <h2 class="text-md font-semibold text-gray-800">Placeholder</h2>
        </div>

        <div class="w-full">
          <InputText
            class="w-[19rem] h-[2.4rem]"
            type="text"
            v-model="placeholderText"
            placeholder="Entrer votre texte ici..."
          />
        </div>

        <Exportable
          :type="typeOf"
          :placeholderText="placeholderText"
          :width="widthClasses[widthIndex]"
          :height="heightClasses[heightIndex]"
          :backgroundHEX="backgroundHEX"
          :textHEX="textHEX"
          :focusHEX="focusHEX"
          :roundedCorners="roundedCorners"
          :borderHex="borderHex"
          :font="fontSize[sizeIndex]"
          :boldText="boldText"
          :selectedInputType="selectedInputType"
        />
      </div>
    </div>
    <InputPreview
      :placeholderText="placeholderText"
      :width="widthClasses[widthIndex]"
      :height="heightClasses[heightIndex]"
      :backgroundHEX="backgroundHEX"
      :textHEX="textHEX"
      :focusHEX="focusHEX"
      :roundedCorners="roundedCorners"
      :borderHex="borderHex"
      :font="fontSize[sizeIndex]"
      :boldText="boldText"
      :selectedInputType="selectedInputType"
    />
  </div>
</template>
