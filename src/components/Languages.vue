<template>
  <article class="my-2">
    <h3>Developer Stack</h3>

    <div
      v-for="languageItem in languageItems"
      :key="languageItem.acf.stack_repeater[0].stack_name"
      class="mt-2 grid grid-cols-2 gap-1 rounded-lg bg-accordion p-4"
    >
      <article
        v-for="stackItem in languageItem.acf.stack_repeater"
        :key="stackItem.stack_name"
        class="flex items-center gap-2 overflow-hidden rounded-md bg-panel px-1 py-2 transition-transform hover:translate-y-[-0.125rem]"
      >
        <div>
          <img
            class="block max-h-[30px] max-w-[30px] rounded-xl xs:max-h-[40px] xs:max-w-[40px] xl:max-h-[50px] xl:max-w-[50px] 2xl:max-h-[60px] 2xl:max-w-[60px]"
            :src="stackItem.stack_image.url"
            :alt="stackItem.stack_image.alt"
          />
        </div>
        <div class="flex flex-col">
          <h4 class="text-[0.8rem] sm:text-base">
            {{ stackItem.stack_name }}
          </h4>
          <p class="text-[0.6rem] text-text xs:text-[0.7rem] sm:text-[0.8rem]">
            {{ stackItem.stack_desc }}
          </p>
        </div>
      </article>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

interface LanguageItem {
  acf: {
    stack_repeater: {
      stack_name: string;
      stack_desc: string;
      stack_image: {
        url: string;
        alt: string;
      };
    }[];
  };
}

const languageItems = ref<LanguageItem[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://nateabaria.ca/naportfolio/wp-json/wp/v2/stack?acf_format=standard"
    );
    languageItems.value = response.data;

    console.log(languageItems.value[0].acf.stack_repeater);
  } catch (error) {
    console.error("Failed to fetch about items:", error);
  }
});
</script>
