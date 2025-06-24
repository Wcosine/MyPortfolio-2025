<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  card: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["select"]);
</script>

<template>
  <!-- Card Link -->
  <div
    class="practice-card hover:shadow-md rounded-2xl duration-200 cursor-pointer"
  >
    <!-- Card Border -->
    <div
      class="w-full max-w-full p-6 border border-gray-300 rounded-2xl block"
      @click="emit('select', props.card)"
    >
      <!-- @click="emit('select')" 意思是:我被點擊之後發出emit通知父組件 -->
      <!-- props.card 是 傳出這個物件給父組件Section -->

      <!-- Card Title -->
      <div>
        <slot name="title">這是預設標題</slot>
      </div>
      <!-- Card ImgBox -->
      <div
        class="imgBox w-full max-w-full bg-black h-64 mt-4 rounded-md overflow-hidden bg-center bg-cover bg-no-repeat hidden md:block"
        :style="{ backgroundImage: `url(${image})` }"
      >
        <slot name="img"></slot>
      </div>
      <!-- Card Info  -->
      <div class="card-info w-full max-h-12 pt-4 leading-7">
        <span class="truncate block w-full max-w-2xs md:max-w-lg">
          <!-- w-full是大視窗的預設文字區域寬度, max-w-sm是小視窗的 -->
          <!-- 當我視窗是md的時候才切換成lg寬度 -->
          <slot name="info">這是預設說明內容</slot>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
