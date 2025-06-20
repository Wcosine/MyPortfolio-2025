<script setup>
import Modal from "../components/Modal.vue";
import { ref, defineExpose } from "vue";

// card相片
import SectionList from "../components/SectionList.vue";
import selfPic from "../img/self-pic.jpg";
import html from "../img/html.png";
import js from "../img/JS.png";
import vue from "../img/vue.png";
import Form from "../img/FormValidation.gif";
import Todo from "../img/TodoList.gif";
// modal相片
import htmlModal from "../img/html-practice.png";
import jsModal from "../img/JS-Practice.gif";
import vueModal from "../img/RandomPassword.gif";

const showModal = ref(false);
const selectedCard = ref(null);

const handleCardSelect = (card) => {
  selectedCard.value = card;
  showModal.value = true;
  //這裡是認明哪一張卡片被選到的功能, 被選到就開啟視窗
};

// 卡片資料（可拆成單獨資料檔）
const featuredCards = [
  {
    title: "表單驗證製作",
    desc: "嘗試練習將檔案拆解成多個獨立元件製作，得以讓元件可以被重複使用，提升維護性。實作過程中，不僅練習了元件間資料傳遞的方式，像是props、emits，也同時也更深入理解元件設計的思維邏輯。",
    intro: "練習元件資料傳遞的方式，並進一步探索元件拆分與設計的邏輯。",
    image: Form,
    modalImage: htmlModal,
    href: "https://fanciful-muffin-ce7668.netlify.app/",
    tags: ["Vue", "作品"],
  },
  {
    title: "To-do List製作",
    desc: "這是我在初期嘗試Vue時實作的小練習，透過watch監聽資料變化、onMounted控制資料存取，並練習運用.push、.fliter方法，處理使用者的資料。",
    intro: "透過基礎的小練習，熟悉對Vue Composition API的操作",
    image: Todo,
    modalImage: htmlModal,
    href: "https://unique-dasik-0c0ac5.netlify.app/",
    tags: ["Vue", "作品"],
  },
];

const practiceCards = [
  {
    title: "網頁排版與視覺還原練習",
    desc: "為了熟悉排版技巧與 CSS 操作，透過模仿實際網站或設計稿的方式，進行 UI 切版練習。目標是提升 HTML 與 CSS 的掌握能力。",
    intro: "透過模仿UI設計進行實作練習，熟練運用HTML與CSS。",
    image: html,
    modalImage: htmlModal,
    href: "https://remarkable-lollipop-ebbc98.netlify.app/",
    tags: ["HTML", "練習"],
  },
  {
    title: " JavaScript 功能模擬練習",
    desc: "練習內容包含計數器、變色方塊、計時器，強化對JavaScript的操作邏輯與互動事件的掌控。",
    intro: "練習DOM與事件處理。",
    image: js,
    modalImage: jsModal,
    href: "https://harmonious-panda-6b400b.netlify.app/",
    tags: ["JavaScript", "練習"],
  },
  {
    title: "Vue 隨機密碼產生器",
    desc: "使用者可選擇密碼長度，即時生成符合條件的密碼。練習目標：熟悉 Vue 的 v-model、computed、methods 與條件輸出。",
    intro: "運用 Vue 計算屬性實作密碼生成器",
    image: vue,
    modalImage: vueModal,
    href: "https://neon-praline-21872d.netlify.app/",
    tags: ["Vue", "練習"],
  },
];

// 這是滾動功能
const projectRef = ref(null);
const practiceRef = ref(null);

const scrollToSection = (target) => {
  if (target === "projects") {
    projectRef.value.sectionEl?.scrollIntoView({ behavior: "smooth" });
    // .value 是用來取得 Vue 3 ref 物件的實際內容
    // .sectionEl就是指定我要的那一個DOM
  }
  if (target === "practices") {
    practiceRef.value.sectionEl?.scrollIntoView({ behavior: "smooth" });
  }
};

defineExpose({ scrollToSection }); //這是為了把功能暴露給父層使用
</script>

<template>
  <Modal :show="showModal" @close="showModal = false" :card="selectedCard">
    <h2 class="text-xl font-bold mb-2">{{ selectedCard?.title }}</h2>
    <p>{{ selectedCard?.desc }}</p>
  </Modal>

  <SectionList
    title="精選作品"
    :cards="featuredCards"
    @select="handleCardSelect"
    lgGridClass="grid-cols-2"
    ref="projectRef"
  />

  <span class="w-full px-12 bg-orange-300"></span>

  <SectionList
    title="精選練習紀錄"
    :cards="practiceCards"
    @select="handleCardSelect"
    lgGridClass="grid-cols-3"
    mdGridClass="grid-cols-2"
    smGridClass="grid-cols-1"
    ref="practiceRef"
  />

  <span class="w-full px-12 bg-orange-300"></span>
</template>
