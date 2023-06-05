<template>
  <h4 class="mt-4">{{ item.acf.tab_1_repeater[0].tab_1_heading_1 }}</h4>
  <div>
    <img :src="item.acf.tab_1_repeater[0].preview_gif" alt="" />
  </div>

  <p class="mt-5">
    {{ item.acf.tab_1_repeater[0].tab_1_text_area }}
  </p>
</template>

<script setup lang="ts">
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
