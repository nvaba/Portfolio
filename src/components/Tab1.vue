<template>
  <article class="mt-8">
    <h4>{{ props.item.acf.tab_1_content.tab_1_content_title }}</h4>

    <div class="my-6 text-center">
      <div
        class="learnlist inline-block text-left text-[0.95rem] text-headingtext"
        v-html="props.item.acf.tab_1_content.tab_1_content_list"
      ></div>
    </div>

    <p class="mt-5 text-[0.95rem] text-headingtext">
      {{ props.item.acf.tab_1_content.tab_1_content_text_area }}
    </p>
  </article>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface AccordionContentProps {
  item: {
    id: number;
    acf: {
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
