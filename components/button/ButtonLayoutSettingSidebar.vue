<template>
  <div class="w-[20rem] bg-gray-50 p-6 h-full border border-gray-100 shadow-xl">
    <div class="mb-5">
      <h2 class="text-md font-semibold text-gray-800">Layout</h2>
    </div>

    <div class="flex flex-col gap-5 w-full">
      <div class="flex flex-col gap-2 font-medium">
        <div class="flex gap-2 items-center mb-2">
          <label class="text-gray-800 text-sm">Width</label>
          <div
            class="bg-gray-50 rounded-full w-7 h-7 items-center justify-center flex text-sm border"
          >
            {{ width }}
          </div>
        </div>
        <Slider class="w-full" v-model="width" @input="updateSettings" />
      </div>

      <div class="flex flex-col gap-2 font-medium">
        <div class="flex gap-2 items-center mb-2">
          <label class="text-gray-800 text-sm">Height</label>
          <div
            class="bg-gray-50 rounded-full w-7 h-7 items-center justify-center flex text-sm border"
          >
            {{ height }}
          </div>
        </div>
        <Slider class="w-full" v-model="height" @input="updateSettings" />
      </div>
    </div>
    <div class="flex flex-col gap-2 mt-5 font-medium">
      <div class="flex gap-2 items-center mb-2">
        <label class="text-gray-800 text-sm">Font Size</label>
        <div
          class="bg-gray-50 rounded-full w-7 h-7 items-center justify-center flex text-sm border"
        >
          {{ width }}
        </div>
      </div>
      <Slider class="w-full" v-model="width" @input="updateSettings" />
    </div>

    <div class="mb-5 mt-5">
      <h2 class="text-md font-semibold text-gray-800">Settings</h2>
    </div>
    <div class="flex flex-col justify-center gap-4">
      <div class="flex items-center gap-2">
        <Checkbox v-model="roundedCorners" @change="updateSettings" />
        <label class="text-gray-800 text-sm"> Rounded Corners </label>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox v-model="boldText" @change="updateSettings" />
        <label class="text-gray-800 text-sm"> Bold Text </label>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox v-model="uppercaseText" @change="updateSettings" />
        <label class="text-gray-800 text-sm"> Uppercase Text </label>
      </div>
    </div>

    <div class="mb-2 mt-4">
      <h2 class="text-md font-semibold text-gray-800">Background</h2>
    </div>

    <div class="flex gap-2">
      <ColorPicker
        v-model="textHEX"
        inputId="cp-hex"
        format="hex"
        class="mb-2 border rounded-lg"
      />
      <div
        class="bg-gray-50 rounded-full w-20 h-7 border items-center text-sm justify-center flex"
      >
        #{{ textHEX }}
      </div>
    </div>

    <div class="mb-2">
      <h2 class="text-md font-semibold text-gray-800">Text</h2>
    </div>

    <div class="flex gap-2">
      <ColorPicker
        v-model="backgroundHEX"
        inputId="cp-hex"
        format="hex"
        class="mb-4 border rounded-lg"
      />
      <div
        class="bg-gray-50 rounded-full w-20 h-7 border items-center text-sm justify-center flex"
      >
        #{{ backgroundHEX }}
      </div>
    </div>

    <div class="mb-2">
      <h2 class="text-md font-semibold text-gray-800">Border</h2>
    </div>

    <div class="flex gap-2">
      <ColorPicker
        v-model="backgroundHEX"
        inputId="cp-hex"
        format="hex"
        class="mb-4 border rounded-lg"
      />
      <div
        class="bg-gray-50 rounded-full w-20 h-7 border items-center text-sm justify-center flex"
      >
        #{{ backgroundHEX }}
      </div>
    </div>

    <div class="mb-2 mt-2">
      <h2 class="text-md font-semibold text-gray-800">Content</h2>
    </div>

    <div class="w-full">
      <InputText
        class="text-sm w-[17rem] h-[2.4rem]"
        type="text"
        v-model="buttonText"
        placeholder="Entrer votre texte ici..."
        @input="updateSettings"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["updateButtonSettings"]);

const width = ref(13);
const height = ref(3);
const textHEX = ref("34b08d");
const backgroundHEX = ref("ffffff");
const buttonText = ref("Entrer votre texte...");
const roundedCorners = ref(false);
const boldText = ref(false);
const uppercaseText = ref(false);

const updateSettings = () => {
  emit("updateButtonSettings", {
    width: width.value,
    height: height.value,
    textHEX: textHEX.value,
    backgroundHEX: backgroundHEX.value,
    buttonText: buttonText.value,
    roundedCorners: roundedCorners.value,
    boldText: boldText.value,
    uppercaseText: uppercaseText.value,
  });
};
</script>
