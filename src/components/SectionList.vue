<script setup>
import CardComponent from "./CardComponent.vue";
import { ref, defineProps, defineEmits, defineExpose } from "vue";

const props = defineProps({
  title: String,
  cards: Array,
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

const emit = defineEmits(["select"]);

const handleClick = (card) => {
  emit("select", card);
};
const sectionEl = ref(null);
defineExpose({ sectionEl });
</script>

<template>
  <section
    class="list bg-white px-12 lg:px-36 md:px-24 sm:px-12 py-12"
    ref="sectionEl"
  >
    <h2 class="text-2xl font-bold mb-8">{{ title }}</h2>
    <div
      :class="`grid gap-4 lg:${lgGridClass} md:${mdGridClass} sm:${smGridClass}`"
    >
      <CardComponent
        v-for="card in cards"
        :key="card.title"
        :image="card.image"
        :card="card"
        @click="handleClick(card)"
        @select="handleClick(card)"
      >
        <template #title>
          <h5 class="font-bold text-xl">{{ card.title }}</h5>
        </template>
        <template #img />
        <template #info>
          <span>{{ card.intro }}</span>
        </template>
      </CardComponent>
    </div>
  </section>
</template>
