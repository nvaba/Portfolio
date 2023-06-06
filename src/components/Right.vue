<template>
  <div
    id="right"
    class="overflow-auto lg:ml-auto lg:w-1/2 lg:border-l lg:border-text lg:pl-20 xl:pl-32"
  >
    <FeaturedProjects />
    <VisualArts />
    <About />
  </div>
</template>

<script setup lang="ts">
import FeaturedProjects from "./FeaturedProjects.vue";
import VisualArts from "./VisualArts.vue";
import About from "./About.vue";
</script>
