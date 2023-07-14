<template>
  <section class="fade-in-slide-up lg:mt-20" @keydown.tab="handleTabKey">
    <h2 id="featured-projects">Featured Projects</h2>
    <div
      v-for="item in accordionItems"
      :key="item.id"
      class="accordion group mt-2 rounded-lg bg-accordion px-2 py-4 transition-all hover:translate-y-[-0.125rem] hover:bg-divhover sm:px-4"
    >
      <div
        :id="'accordion-heading-' + item.id"
        :aria-expanded="activeAccordionItem === item.id"
        @click="toggleAccordion(item.id)"
        @keydown.space.prevent="toggleAccordion(item.id)"
        tabindex="0"
        class="flex cursor-pointer items-center justify-between transition-transform"
      >
        <h3 v-if="item.title && item.title.rendered">
          {{ item.title.rendered }}
        </h3>
        <SvgArrow :active="activeAccordionItem === item.id" />
      </div>
      <transition
        name="fade"
        enter-active-class="transition-opacity duration-300"
        leave-active-class="transition-opacity duration-0"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="item.acf && item.acf.mockup_image"
          class="mt-1 hidden overflow-hidden rounded-md lg:block"
          v-show="activeAccordionItem !== item.id"
        >
          <img
            @click="toggleAccordion(item.id)"
            :src="item.acf.mockup_image.url"
            :alt="item.acf.mockup_image.alt"
            class="h-32 w-full rounded-md object-cover brightness-[0.5] transition-all group-hover:scale-105 group-hover:brightness-75"
          />
        </div>
      </transition>
      <transition name="accordion">
        <div
          v-show="activeAccordionItem === item.id"
          class="mt-2"
          role="tabpanel"
        >
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
  acf: {
    overview_title: string;
    overview_text: string;
    mockup_image: {
      url: string;
      alt: string;
    };
    live_website_url: string;
    repo_url: string;
    tab_1_category: string;
    tab_2_category: string;
    tab_3_category: string;
    tab_1_content: {
      tab_1_content_title: string;
      tab_1_content_list: string;
      tab_1_content_text_area: string;
    };
    tab_2_repeater_content: {
      tab_2_content_title: string;
      tab_2_content_preview: {
        url: string;
        alt: string;
      };
      tab_2_text_area: string;
    }[];
    tab_3_repeater_content: {
      tab_3_content_title: string;
      tab_3_content_preview: {
        url: string;
        alt: string;
      };
      tab_3_text_area: string;
    }[];
  };
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

const handleTabKey = (event: KeyboardEvent) => {
  const focusableElements = Array.from(
    document.querySelectorAll(
      '.accordion[role="tablist"] [role="button"], .accordion[role="tablist"] [role="tabpanel"]'
    )
  ) as HTMLElement[];

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.target === lastElement && !event.shiftKey) {
    // Last element, Tab pressed without Shift
    event.preventDefault();
    firstElement.focus();
  } else if (event.target === firstElement && event.shiftKey) {
    // First element, Tab pressed with Shift
    event.preventDefault();
    lastElement.focus();
  }
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
