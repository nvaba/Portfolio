<template>
  <section>
    <h2>Featured Projects</h2>
    <div v-for="item in accordionItems" :key="item.id">
      <div
        class="flex cursor-pointer items-center justify-between"
        @click="toggleAccordion(item.id)"
      >
        <h3>{{ item.title.rendered }}</h3>
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
      "https://nateabaria.ca/naportfolio/wp-json/wp/v2/naportfolio_projects"
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
