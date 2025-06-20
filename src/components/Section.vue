<script setup>
import CardComponent from "./CardComponent.vue";
import Modal from "./Modal.vue";
import { ref, defineProps, defineExpose } from "vue";

import selfPic from "../img/self-pic.jpg";
import html from "../img/html.png";
import js from "../img/JS.png";
import vue from "../img/vue.png";

const props = defineProps({
  PracticeTitle: String,
  FeaturedTitle: String,
  cards: Array,
  // 這是告訴父組件我的card是陣列
  lgGridClass: {
    type: String,
    default: "grid-cols-2",
  },
  mdGridClass: {
    type: String,
    default: "grid-cols-1",
  },
  smGridClass: {
    type: String,
    default: "grid-cols-1",
  },
});

const sectionEl = ref(null); // 定義一個參考來記錄 DOM 元素
defineExpose({ sectionEl }); // 把這個參考暴露出去，讓父元件可以用

const showModal = ref(false); // 這是控制Modal是否顯示
const selectedCard = ref(); // 這是儲存我選擇的卡片資料
const selected = (card) => {
  selectedCard.value = card;
  showModal.value = true;
};
// 這是結合CardComponent的select事件發出的動作
// 當某個CardComponent被點擊, 他的值就會被帶入selected的card

// 作品內容
const projectA = {
  title: "表單驗證製作",
  desc: "這是假字，功游平文汁包：化司畫跟松它禾元示國五中跟聲火，林飽消又說朱法找們姊爬坡服！追且怕夕它牠水他頁由坡枝棵古是錯沒歌。帽沒布現游四借以幼就心笑雨司什法點。安旦斥對裝歌兒帶不頭昔：背物停牙年今彩掃而夏躲地雨、包寫什火遠說，收意兩歡頁植婆手細功，者爬抱且別根兔化十，愛具月。",
  intro:
    "這是假字，功游平文汁包：化司畫跟松它禾元示國五中跟聲火，林飽消又說朱法找們姊爬坡服！這是假字，功游平文汁包：化司畫跟松它禾元示國五中跟聲火，林飽消又說朱法找們姊爬坡服！這是假字，功游平文汁包：化司畫跟松它禾元示國五中跟聲火，林飽消又說朱法找們姊爬坡服！",
  image: "../img/self-pic.jpg",
  tags: ["Vue", "作品"],
};
const projectB = {
  title: "To-do List製作",
  desc: "這是第二個作品",
  intro: "這是假字，功游平文汁包：化司畫跟松它禾元示國五中跟聲火，",
  image: "xxx.jpg",
  tags: ["Vue", "作品"],
};

// 練習內容
const practiceA = {
  title: "網頁排版與視覺還原練習",
  desc: "為了熟悉排版技巧與 CSS 操作，透過模仿實際網站或設計稿的方式，進行 UI 切版練習。目標是提升 HTML 與 CSS 的掌握能力。這是假字，功游平文汁包：化司畫跟松它禾元示國五中跟聲火，林飽消又說朱法找們姊爬坡服！這是假字，功游平文汁包：化司畫跟松它禾元示國五中跟聲火，林飽消又說朱法找們姊爬坡服！這是假字，功游平文汁包：化司畫跟松它禾元示國五中跟聲火，林飽消又說朱法找們姊爬坡服！",
  intro: "透過模仿UI設計進行實作練習，熟練運用HTML與CSS。",
  image: "xxx.jpg",
  tags: ["HTML", "練習"],
};
const practiceB = {
  title: " JavaScript 功能模擬練習",
  desc: "練習內容包含計數器、變色方塊、計時器，強化對JavaScript的操作邏輯與互動事件的掌控。",
  intro: "練習DOM與事件處理。",
  image: "xxx.jpg",
  tags: ["JavaScript", "練習"],
};
const practiceC = {
  title: "Vue 隨機密碼產生器",
  desc: "使用者可選擇密碼長度，即時生成符合條件的密碼。練習目標：熟悉 Vue 的 v-model、computed、methods 與條件輸出。",
  intro: "運用 Vue 計算屬性實作密碼生成器",
  image: "xxx.jpg",
  tags: ["Vue", "練習"],
};
</script>

<template>
  <Modal :show="showModal" @close="showModal = false" :card="selectedCard">
    <h2 class="text-xl font-bold mb-2">{{ selectedCard?.title }}</h2>
    <p>{{ selectedCard?.desc }}</p>
  </Modal>
  <section
    class="list bg-white lg:px-36 md:px-24 sm:px-12 xs: px-6 py-12"
    ref="sectionEl"
  >
    <h2 class="text-2xl font-bold mb-8">{{ FeaturedTitle }}</h2>
    <div
      :class="`grid gap-4 lg:${lgGridClass} md:${mdGridClass} sm:${smGridClass}`"
    >
      <CardComponent
        :image="selfPic"
        @click="showModal = true"
        @select="selected"
        :card="projectA"
      >
        <template #title>
          <h5 class="font-bold text-xl">{{ projectA.title }}</h5>
        </template>
        <template #img> </template>
        <template #info>
          <span>{{ projectA.intro }}</span>
          <!-- 使用span才不會受block排版影響 -->
        </template>
      </CardComponent>

      <CardComponent
        :image="selfPic"
        @click="showModal = true"
        @select="selected"
        :card="projectB"
      >
        <template #title>
          <h5 class="font-bold text-xl">{{ projectB.title }}</h5>
        </template>
        <template #img> </template>
        <template #info>
          <span>{{ projectB.intro }}</span>
        </template>
      </CardComponent>
    </div>
  </section>

  <span class="w-full px-12 bg-orange-300"></span>
  <section class="list bg-white lg:px-36 md:px-24 sm:px-12 xs: px-6 py-12">
    <h2 class="text-2xl font-bold mb-8">{{ PracticeTitle }}</h2>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      <CardComponent
        :image="html"
        @click="showModal = true"
        @select="selected"
        :card="practiceA"
      >
        <template #title>
          <h5 class="font-bold text-xl">{{ practiceA.title }}</h5>
        </template>
        <template #img> </template>
        <template #info>
          <span>{{ practiceA.intro }}</span>
        </template>
      </CardComponent>
      <CardComponent
        :image="js"
        @click="showModal = true"
        @select="selected"
        :card="practiceB"
      >
        <template #title>
          <h5 class="font-bold text-xl">{{ practiceB.title }}</h5>
        </template>
        <template #img> </template>
        <template #info>
          <span>{{ practiceB.intro }}</span>
        </template>
      </CardComponent>
      <CardComponent
        :image="vue"
        @click="showModal = true"
        @select="selected"
        :card="practiceC"
      >
        <template #title>
          <h5 class="font-bold text-xl">{{ practiceC.title }}</h5>
        </template>
        <template #img> </template>
        <template #info>
          <span>{{ practiceC.intro }}</span>
        </template>
      </CardComponent>
    </div>
  </section>

  <span class="w-full px-12 bg-orange-300"></span>
</template>

<style scoped></style>
