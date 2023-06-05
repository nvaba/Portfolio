<template>
  <section>
    <h2 class="lg:mt-20">Featured Projects</h2>
    <div
      class="mt-2 border-b border-text pb-3"
      v-for="item in accordionItems"
      :key="item.id"
    >
      <div
        class="flex cursor-pointer items-center justify-between"
        @click="toggleAccordion(item.id)"
      >
        <h3>{{ item.title.rendered }}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          class="h-7 transform transition-transform duration-300"
          :class="{ 'rotate-180': activeAccordionItem === item.id }"
        >
          <path
            fill="none"
            stroke="#f8f8f8"
            stroke-linecap="square"
            d="m14 5l-6.5 7L1 5"
          />
        </svg>
      </div>
      <div v-show="activeAccordionItem === item.id" class="mt-2">
        <AccordionContent :item="item" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import AccordionContent from "./AccordionContent.vue";

interface AccordionItem {
  id: number;
  title: {
    rendered: string;
  };
  // Add more properties as needed
}

const accordionItems = ref<AccordionItem[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://nateabaria.ca/naportfolio/wp-json/wp/v2/naportfolio_projects?acf_format=standard"
    );
    accordionItems.value = response.data; // Assuming the API response is an array of accordion items
    console.log(response.data); // Log the API response
  } catch (error) {
    console.error("Failed to fetch accordion items:", error);
  }
});

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
