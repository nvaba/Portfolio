<template>
  <div>
    <article
      v-for="section in item.acf.tab_3_repeater_content"
      :key="section.tab_3_content_title"
    >
      <h4 class="mt-8">{{ section.tab_3_content_title }}</h4>
      <div class="imagediv mt-4">
        <img
          :src="section.tab_3_content_preview.url"
          :alt="section.tab_3_content_preview.alt"
        />
      </div>
      <p class="mt-5">
        {{ section.tab_3_text_area }}
      </p>
    </article>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface AccordionContentProps {
  item: {
    id: number;
    acf: {
      tab_3_repeater_content: {
        tab_3_content_title: string;
        tab_3_content_preview: {
          url: string;
          alt: string;
        };
        tab_3_text_area: string;
      }[];
      // Add more properties as needed
    };
    // Add more properties as needed
  };
}

// Define the props
defineProps<AccordionContentProps>();

// Log the contents of tab_2_repeater_content
</script>
