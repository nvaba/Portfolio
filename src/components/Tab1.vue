<template>
  <div>
    <article
      v-for="section in item.acf.tab_1_repeater"
      :key="section.tab_1_heading_1"
    >
      <h4 class="mt-4">{{ section.tab_1_heading_1 }}</h4>
      <div class="mt-4">
        <img :src="section.preview_gif" alt="" />
      </div>
      <p class="mt-5">
        {{ section.tab_1_text_area }}
      </p>
    </article>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface AccordionContentProps {
  item: {
    id: number;
    title: {
      rendered: string;
    };
    acf: {
      overview_title: string;
      overview_text: string;
      live_website_url: string;
      repo_url: string;
      tab_title_1: string;
      tab_title_2: string;
      tab_title_3: string;
      tab_1_repeater: {
        preview_gif: string;
        tab_1_heading_1: string;
        tab_1_text_area: string;
        // Add more properties as needed
      }[];
    };
    // Add more properties as needed
  };
}

// Define the props
const props = defineProps<AccordionContentProps>();
console.log(props.item.acf.tab_1_repeater[0].preview_gif);
</script>
