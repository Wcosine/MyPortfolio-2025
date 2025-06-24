<script setup>
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
import MainContent from "./components/MainContent.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";

const mainContentRef = ref(null);
const footerRef = ref(null);
// 這裡的ref是指整個元件, 指向<Section/> 或 <Footer/>
// 但是實際上滾動到的區塊去更內部的DOM, 所以需要Expose

const handleScroll = (target) => {
  if (target === "footer") {
    footerRef.value.footerEl?.scrollIntoView({ behavior: "smooth" });
  } else {
    mainContentRef.value?.scrollToSection(target);
    // 如果mainContentRef有值就執行scroll, 這個scroll是寫在子組件裡的功能
  }
};
const submitMsg = ref(""); // 這是使用者輸入的值
const handleSubmit = (msg) => {
  if (!msg.trim()) {
    alert("想告訴我什麼呢？歡迎留下您的想法");
    return;
  }
  submitMsg.value = ""; // 清空留言欄
  alert("感謝您的留言！✨");
};
</script>

<template>
  <Navbar
    practices="精選練習紀錄"
    projects="精選作品"
    contact="聯絡我"
    @scrollTo="handleScroll"
  ></Navbar>
  <!-- @scrollTo這是呼叫子組件emit的方式, 子組件emit怎麼命名, 父組件就要這樣呼叫 -->

  <Header
    name="HI，我是Novia！"
    subtitle="喜歡動手學習，也愛分享學習過程的前端練習生。"
    content="我正在轉職為前端工程師，熟悉HTML、CSS，並正在持續學習Vue與JavaScript。我是一個對自己要求高、學習動機強的人，目前每天紀錄前端練習進度，已經維持將近90天。透過每日更新不僅督促自己持續學習，也意外獲得一些前輩回饋，讓我更有成長動力。這段過程我發現自己在學習新知識、探索新領域時會感到興奮。這些經驗讓我意識到自己是一個擅長長期投入、熱愛學習的人。"
    href="https://www.threads.net/@just__m.a.d"
  >
  </Header>

  <MainContent ref="mainContentRef"></MainContent>

  <Footer
    FooterTitle="聯絡我"
    phone="0975-280-627"
    email="yxweng975@gmail.com"
    ref="footerRef"
    @submit="handleSubmit"
    v-model="submitMsg"
  >
  </Footer>
</template>

<style scoped></style>
