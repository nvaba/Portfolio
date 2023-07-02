<template>
  <section class="fade-in-slide-up shadow-lg" v-if="aboutContent.length > 0">
    <h2 id="about" class="mt-[5rem]">About</h2>
    <article class="rounded-lg bg-accordion" aria-labelledby="about">
      <ul
        class="about-list mt-2 flex flex-col gap-4 rounded-lg px-2 py-4 sm:px-4"
      >
        <li
          v-for="item in aboutContent[0].acf.about_repeater"
          :key="item.about_heading"
        >
          <h4 class="text-headingtext">{{ item.about_heading }}</h4>
          <p>{{ item.about_text_area }}</p>
        </li>
      </ul>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

interface AboutItem {
  id: number;
  acf: {
    about_repeater: {
      about_heading: string;
      about_text_area: string;
    }[];
  };
}

const aboutContent = ref<AboutItem[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://nateabaria.ca/naportfolio/wp-json/wp/v2/about"
    );
    aboutContent.value = response.data;

    console.log(aboutContent.value[0].acf.about_repeater);
  } catch (error) {
    console.error("Failed to fetch about items:", error);
  }
});
</script>

<style>
.about-list li {
  list-style-type: none;
}
</style>
