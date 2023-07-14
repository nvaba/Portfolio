<template>
  <article class="mt-8" role="region" aria-label="Tab 1 Content">
    <h4 v-if="props.item.acf.tab_1_content.tab_1_content_title">
      {{ props.item.acf.tab_1_content.tab_1_content_title }}
    </h4>

    <div
      class="my-6 text-center"
      v-if="props.item.acf.tab_1_content.tab_1_content_list"
    >
      <div
        class="learnlist inline-block max-w-[80%] text-left text-[0.95rem] text-headingtext"
        v-html="props.item.acf.tab_1_content.tab_1_content_list"
        role="list"
        aria-label="List of items learned"
      ></div>
    </div>

    <p
      class="mt-5 text-[0.95rem] text-text"
      role="textbox"
      aria-label="Text Area"
      v-if="props.item.acf.tab_1_content.tab_1_content_text_area"
    >
      {{ props.item.acf.tab_1_content.tab_1_content_text_area }}
    </p>
  </article>
</template>

<script setup lang="ts">
interface AccordionContentProps {
  item: {
    id: number;
    acf: {
      tab_1_content: {
        tab_1_content_title?: string;
        tab_1_content_list?: string;
        tab_1_content_text_area?: string;
      };
    };
  };
}

// Define the props
const props = defineProps<AccordionContentProps>();
</script>

<style>
.learnlist li {
  margin-bottom: 0.1rem;
}
</style>
