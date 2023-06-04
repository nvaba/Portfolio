<template>
  <section>
    <h2>Featured Projects</h2>
    <div v-for="item in accordionItems" :key="item.id">
      <div
        class="flex cursor-pointer items-center justify-between"
        @click="toggleAccordion(item.id)"
      >
        <h3>{{ item.title }}</h3>
        <div>
          <svg
            class="h-7 transform transition-transform duration-300"
            :class="{ 'rotate-180': activeAccordionItem === item.id }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M7 10l5 5 5-5z" />
          </svg>
        </div>
      </div>
      <div v-show="activeAccordionItem === item.id" class="mt-2">
        <p>{{ item.content }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const accordionItems = [
  {
    id: 1,
    title: "N/A Films",
    content: "Content of Accordion Item #1",
  },
  // Add more accordion items here
];

const activeAccordionItem = ref<number | null>(null);

const toggleAccordion = (itemId: number) => {
  activeAccordionItem.value =
    activeAccordionItem.value === itemId ? null : itemId;
};
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
