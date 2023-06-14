<template>
  <section class="fade-in-slide-up lg:mt-20">
    <h2 id="featured-projects">Featured Projects</h2>
    <!-- div below is where border goes border-b border-text -->
    <div
      class="accordion mt-2 rounded-lg bg-accordion p-4 transition-all hover:translate-y-[-0.125rem] hover:bg-divhover"
      v-for="item in accordionItems"
      :key="item.id"
    >
      <div
        class="hover:translate-y-[-0.125re flex cursor-pointer items-center justify-between transition-transform"
        @click="toggleAccordion(item.id)"
      >
        <h3>{{ item.title.rendered }}</h3>
        <SvgArrow :active="activeAccordionItem === item.id" />
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
import SvgArrow from "./SVGArrow.vue";

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

.accordion {
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.accordion:hover {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.05), 0 6px 8px rgba(0, 0, 0, 0.1);
}
</style>
