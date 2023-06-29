<template>
  <article class="my-3 rounded-lg bg-accordion py-2 shadow-lg sm:py-4">
    <h3 class="px-4">Currently Learning or Plan to Learn</h3>

    <div
      v-for="languageItem in languageItems"
      :key="languageItem.acf.plan_to_learn_repeater[0].plan_name"
      class="mt-2 grid grid-cols-2 gap-2 rounded-lg px-4"
    >
      <div
        v-for="stackItem in languageItem.acf.plan_to_learn_repeater"
        :key="stackItem.plan_name"
        class="flex items-center gap-2 overflow-hidden rounded-md bg-panel px-1 py-2 transition-transform hover:translate-y-[-0.125rem]"
      >
        <div>
          <img
            class="block max-h-[30px] max-w-[30px] rounded-xl grayscale xs:max-h-[40px] xs:max-w-[40px] xl:max-h-[50px] xl:max-w-[50px]"
            :src="stackItem.plan_image.url"
            :alt="stackItem.plan_image.alt"
          />
        </div>
        <div class="flex flex-col">
          <h4 class="text-[0.8rem] sm:text-base">
            {{ stackItem.plan_name }}
          </h4>
          <p class="text-[0.6rem] text-text xs:text-[0.7rem] sm:text-[0.8rem]">
            {{ stackItem.plan_desc }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

interface LanguageItem {
  acf: {
    plan_to_learn_repeater: {
      plan_name: string;
      plan_desc: string;
      plan_image: {
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

    console.log(languageItems.value[0].acf.plan_to_learn_repeater);
  } catch (error) {
    console.error("Failed to fetch about items:", error);
  }
});
</script>
