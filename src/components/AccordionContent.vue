<template>
  <div>
    <h4>{{ item.acf.overview_title }}</h4>

    <p class="projecttext mt-1">{{ item.acf.overview_text }}</p>

    <nav class="mt-2">
      <a class="project-external-link" :href="item.acf.live_website_url"
        >Live Site</a
      >
      <a class="project-external-link" :href="item.acf.repo_url"
        >View Repository</a
      >
    </nav>
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
      // Add more properties as needed
    };
    // Add more properties as needed
  };
}

// Define the props
const props = defineProps<AccordionContentProps>();

// Output the received data
console.log(props.item.acf.live_website_url); // Using dot notation
</script>

<style scoped>
/* Add styles as needed */
</style>
