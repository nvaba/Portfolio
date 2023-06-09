<template>
  <article class="my-7">
    <h3>Software and Programs</h3>

    <div
      v-for="languageItem in languageItems"
      :key="languageItem.acf.software_and_programs_repeater[0].software_name"
      class="mt-2 grid grid-cols-2 gap-1 rounded-2xl bg-panel2 p-4 xs:grid-cols-3 sm:grid-cols-4 2xl:grid-cols-5"
    >
      <div
        v-for="stackItem in languageItem.acf.software_and_programs_repeater"
        :key="stackItem.software_name"
        class="flex flex-col items-center overflow-hidden transition-transform hover:translate-y-[-0.125rem]"
      >
        <img
          class="block max-h-[40px] max-w-[40px] rounded-xl"
          :src="stackItem.software_image.url"
          :alt="stackItem.software_image.alt"
        />
        <p class="text-[0.7rem] text-headingtext">
          {{ stackItem.software_name }}
        </p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

interface LanguageItem {
  acf: {
    software_and_programs_repeater: {
      software_name: string;
      software_image: {
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

    console.log(languageItems.value[0].acf.software_and_programs_repeater);
  } catch (error) {
    console.error("Failed to fetch about items:", error);
  }
});
</script>
