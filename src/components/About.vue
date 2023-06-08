<template>
  <section>
    <h2 id="about" class="mt-[7rem]">About</h2>
    <article
      class="about-list mt-2"
      v-if="aboutContent.length"
      v-html="aboutContent[0].acf.about_list"
    ></article>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

interface AboutItem {
  id: number;
  acf: {
    about_list: string;
  };
}

const aboutContent = ref<AboutItem[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://nateabaria.ca/naportfolio/wp-json/wp/v2/about"
    );
    aboutContent.value = response.data;

    // console.log(aboutContent.value[0].acf.about_list);
  } catch (error) {
    console.error("Failed to fetch about items:", error);
  }
});
</script>

<style>
.about-list li {
  margin-bottom: 0.4rem;
}
</style>
