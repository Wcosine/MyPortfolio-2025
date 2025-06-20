<script setup>
import { defineProps, defineExpose, defineEmits, ref } from "vue";

const props = defineProps({
  FooterTitle: String,
  phone: String,
  email: String,
});

const footerEl = ref(null);
defineExpose({ footerEl });
// 因為section是被封裝起來的, 使用Expose把內部資料公開給父組件才能抓到資料

const input = ref(""); //儲存輸入的值
const emit = defineEmits(["submit"]);
const submitMsg = () => {
  emit("submit", input.value);
  input.value = "";
};
</script>

<template>
  <footer class="bg-gray-100 px-6 py-12 lg:px-36 md:px-24" ref="footerEl">
    <h2 class="text-2xl font-bold mb-8">聯絡我</h2>
    <div class="grid lg:grid-cols-2 gap-12">
      <!-- 聯絡資訊 -->
      <div class="bg-white p-6 rounded-xl shadow-md">
        <p class="font-bold mb-4">Hi! 我是 Novia，歡迎與我聯絡</p>
        <p class="font-bold mb-2">📞 電話</p>
        <p class="mb-4">{{ phone }}</p>
        <p class="font-bold mb-2">✉️ 郵件</p>
        <p class="mb-4">{{ email }}</p>
        <p class="font-bold mb-2">🌐 社群</p>
        <div class="flex gap-4 mt-2">
          <!-- Icon 使用 FontAwesome -->
          <a href="https://www.threads.net/@just__m.a.d">
            <font-awesome-icon
              :icon="['fab', 'threads']"
              class="text-2xl text-gray-800 bg-white p-2 rounded-sm hover:bg-gray-200"
            />
          </a>
          <a href="https://github.com/Wcosine?tab=stars">
            <font-awesome-icon
              :icon="['fab', 'github']"
              class="text-2xl text-gray-800 bg-white p-2 rounded-sm hover:bg-gray-200"
            />
          </a>
        </div>
      </div>

      <!-- 留言表單 -->
      <!-- <div class="bg-white p-6 rounded-xl shadow-md">
        <p class="font-bold mb-8">歡迎留下您的想法！</p>
        <div class="msgBox w-full">
          <textarea
            rows="5"
            cols="48"
            class="w-full bg-gray-300 text-left p-2 mb-4 text-sm rounded-xl"
            placeholder="輸入您的訊息..."
            v-model="input"
          ></textarea>
        </div>
        <a
          class="default float-right bg-white px-6 py-2 rounded-md font-bold text-gray-800 hover:bg-gray-800 hover:text-white duration-300 cursor-pointer"
          @click="submitMsg"
          >送出留言</a
        >
      </div> -->
      <!-- 個人照片 -->
      <div class="bg-white p-6 rounded-xl shadow-md">
        <div
          class="imgBox bg-black w-full h-full p-2 bg-[url(./img/self-pic.jpg)] bg-no-repeat bg-cover bg-center rounded-md"
        ></div>
      </div>
    </div>
    <p class="text-center text-gray-500 mt-12 text-sm">
      © 2025 Novia's Portfolio. All rights reserved.
    </p>
  </footer>
</template>

<style scoped></style>
