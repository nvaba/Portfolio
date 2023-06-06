<template>
  <article class="mt-8">
    <h4>{{ props.item.acf.tab_1_content.tab_1_content_title }}</h4>

    <div class="my-6 text-center">
      <div
        style="display: inline-block; text-align: left"
        v-html="props.item.acf.tab_1_content.tab_1_content_list"
        class="list-div"
      ></div>
    </div>

    <p>
      {{ props.item.acf.tab_1_content.tab_1_content_text_area }}
    </p>
  </article>
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
      tab_1_category: string;
      tab_2_category: string;
      tab_3_category: string;
      tab_1_content: {
        tab_1_content_title: string;
        tab_1_content_list: string;
        tab_1_content_text_area: string;
      };
      // Add more properties as needed
    };
    // Add more properties as needed
  };
}

// Define the props
const props = defineProps<AccordionContentProps>();
// console.log(props.item.acf.tab_1_content.tab_1_content_list);
</script>

<style>
.list-div ul {
  list-style-type: disc;
}
</style>
