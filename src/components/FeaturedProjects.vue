<template>
  <section>
    <h2 id="featured-projects" class="lg:mt-20">Featured Projects</h2>
    <!-- div below is where border goes border-b border-text -->
    <div class="mt-2 pb-3" v-for="item in accordionItems" :key="item.id">
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
      <transition name="accordion">
        <div v-show="activeAccordionItem === item.id" class="mt-2">
          <AccordionContent :item="item" />
        </div>
      </transition>
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

/* Modify the transition styles */
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s cubic-bezier(0.33, 0, 0.2, 1),
    opacity 0.3s cubic-bezier(0.33, 0, 0.2, 1);
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 100%;
  opacity: 1;
}
</style>
