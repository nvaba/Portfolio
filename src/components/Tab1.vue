<template>
  <article class="mt-8">
    <h4>{{ props.item.acf.tab_1_content.tab_1_content_title }}</h4>

    <div class="my-6 text-center">
      <div
        class="learnlist inline-block max-w-[80%] text-left text-[0.95rem] text-headingtext"
        v-html="props.item.acf.tab_1_content.tab_1_content_list"
      ></div>
    </div>

    <p class="mt-5 text-[0.95rem] text-text">
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
        tab_1_content_title: string;
        tab_1_content_list: string;
        tab_1_content_text_area: string;
      };
    };
  };
}

// Define the props
const props = defineProps<AccordionContentProps>();
// console.log(props.item.acf.tab_1_content.tab_1_content_list);
</script>

<style>
.learnlist li {
  margin-bottom: 0.3rem;
}
</style>
