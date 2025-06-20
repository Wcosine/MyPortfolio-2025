<script setup>
import { defineProps } from "vue";

defineProps({
  name: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  href: {
    type: String,
    default: "#!",
  },
  tooltip: {
    type: String,
    default: "即將前往Threads",
  },
});
</script>

<!-- Header.vue -->
<template>
  <div class="intro px-12 pt-20 pb-8 bg-orange-50 grid grid-cols-1 w-full">
    <div class="content lg:w-148 md:w-96 text-gray-800 mx-auto">
      <h2 class="text-3xl font-extrabold my-4">{{ name }}</h2>
      <h6 class="font-bold mb-4">{{ subtitle }}</h6>
      <p class="leading-8 text-justify">{{ content }}</p>
      <div class="mr-4 my-8 gap-8 group relative inline-block">
        <a
          :href="href"
          class="secondary bg-white px-6 py-2 rounded-sm font-bold text-gray-800 mr-px hover:bg-gray-800 hover:text-white duration-300"
          target="_blank"
          rel="noopener noreferrer"
          title="前往查看我在 Threads 上的練習紀錄"
          >每日練習紀錄</a
        >
        <div
          class="absolute left-1/2 top-2/3 -translate-x-1/2 translate-y-1/2 mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-150 z-10 whitespace-nowrap"
        >
          {{ tooltip }}
        </div>
      </div>
      <!-- <div class="my-8 gap-8 inline-block">
        <a
          :href="href"
          class="primary bg-orange-300 px-6 py-2 rounded-sm text-white font-bold hover:bg-white hover:text-gray-800 duration-300"
          >練習精選</a
        >
      </div> -->
    </div>
  </div>
</template>

<style scoped></style>
