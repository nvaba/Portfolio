<template>
  <article
    class="my-3 rounded-lg bg-accordion py-2 shadow-lg sm:py-4"
    tabindex="0"
  >
    <h3 class="px-4" id="software-programs-heading">Software and Programs</h3>
    <div
      v-for="languageItem in languageItems"
      :key="languageItem.acf.software_and_programs_repeater[0]?.software_name"
      class="mt-2 grid grid-cols-2 gap-2 rounded-lg px-4"
      role="list"
      aria-labelledby="software-programs-heading"
    >
      <div
        v-for="stackItem in languageItem.acf.software_and_programs_repeater"
        :key="stackItem.software_name"
        class="flex items-center gap-2 overflow-hidden rounded-md bg-panel px-1 py-2 transition-transform hover:translate-y-[-0.125rem]"
        role="listitem"
      >
        <div v-if="stackItem.software_image">
          <img
            class="block max-h-[30px] max-w-[30px] rounded-xl xs:max-h-[40px] xs:max-w-[40px] xl:max-h-[50px] xl:max-w-[50px]"
            :src="stackItem.software_image?.url"
            :alt="stackItem.software_image?.alt"
          />
        </div>
        <div class="flex flex-col">
          <h4 v-if="stackItem.software_name" class="text-[0.8rem] sm:text-base">
            {{ stackItem.software_name }}
          </h4>
          <p
            v-if="stackItem.software_desc"
            class="text-[0.6rem] text-text xs:text-[0.7rem] sm:text-[0.8rem]"
          >
            {{ stackItem.software_desc }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

interface StackImage {
  url: string;
  alt: string;
}

interface StackItem {
  software_name?: string;
  software_desc?: string;
  software_image?: StackImage;
}

interface LanguageItem {
  acf: {
    software_and_programs_repeater: StackItem[];
  };
}

const languageItems = ref<LanguageItem[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://nateabaria.ca/naportfolio/wp-json/wp/v2/stack?acf_format=standard"
    );
    languageItems.value = response.data;
  } catch (error) {
    console.error("Failed to fetch about items:", error);
  }
});
</script>
