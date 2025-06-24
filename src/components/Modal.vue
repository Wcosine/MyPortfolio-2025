<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  show: {
    type: Boolean,
    default: true,
  },
  // 因為是交給父層決定視窗是否開啟所以用prop控制
  closeOnBackdropClick: {
    type: Boolean,
    default: true,
  },
  card: Object,
});
const emit = defineEmits(["close"]);
// 視窗內會有需要傳遞訊息給父層close的事件
const close = () => {
  emit("close");
};
// 設定close事件
const handleBackdropClick = () => {
  if (props.closeOnBackdropClick) {
    close();
  }
};
// 這是點擊背景即關閉視窗的功能
</script>

<template>
  <teleport to="body">
    <!-- 在body 開啟teleport -->

    <div
      v-if="show"
      class="darkMask fixed inset-0 bg-black/75 flex items-center justify-center z-50"
      @click.self="handleBackdropClick"
    >
      <div
        class="outer bg-white pb-6 rounded-lg w-3/4 max-w-md relative max-h-[80vh] overflow-y-auto overscroll-contain dark:text-[#242424]"
      >
        <div class="bg-gray-100 p-6 relative">
          <h2 class="text-xl font-bold">{{ card?.title }}</h2>
          <button
            @click="$emit('close')"
            class="absolute top-9 right-4 -translate-y-1/2 px-1.5 rounded-xl"
          >
            ✕
          </button>
        </div>
        <div class="mx-6 mt-4">
          <p class="leading-8 text-justify">{{ card?.desc }}</p>
          <a
            :href="card.href"
            target="_blank"
            class="inline-block px-8 py-2 my-4 rounded-lg border"
            >查看詳情</a
          >
          <img
            class="bg-black w-10/12 h-48 w-full"
            :src="card?.modalImage"
            alt="作品預覽圖"
          />
        </div>
      </div>
    </div>
  </teleport>
</template>
