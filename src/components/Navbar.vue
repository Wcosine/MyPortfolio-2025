<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  practices: {
    type: String,
    default: "#!",
  },
  projects: {
    type: String,
    default: "#!",
  },
  contact: {
    type: String,
    default: "#!",
  },
});

const emit = defineEmits(["scrollTo"]);
const scrollToPractice = () => {
  emit("scrollTo", "practices");
};
const scrollToProject = () => {
  emit("scrollTo", "projects");
};
const scrollToFooter = () => {
  emit("scrollTo", "footer");
};
</script>

<template>
  <div
    class="sideBtn absolute z-[100] left-1/2 -translate-x-1/2 w-full text-center grid grid-cols-3 gap-2"
  >
    <button
      class="sideBtnItem mx-auto px-4 py-4 md:px-8 sm:px-6 w-full rounded-b-md bg-orange-100 font-bold cursor-pointer text-gray-800 text-nowrap text-sm md:text-lg"
      @click="scrollToPractice"
    >
      {{ practices }}
    </button>
    <button
      class="sideBtnItem primary mx-auto px-4 py-4 md:px-8 sm:px-6 w-full rounded-b-md font-bold cursor-pointer text-gray-800 text-nowrap text-sm md:text-lg"
      @click="scrollToProject"
    >
      {{ projects }}
    </button>
    <button
      class="sideBtnItem mx-auto px-4 py-4 md:px-8 sm:px-6 w-full rounded-b-md bg-orange-100 font-bold cursor-pointer text-gray-800 text-nowrap text-sm md:text-lg"
      @click="scrollToFooter"
    >
      {{ contact }}
    </button>
  </div>
</template>
