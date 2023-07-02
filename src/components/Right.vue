<template>
  <main
    id="right"
    class="overflow-auto lg:ml-auto lg:w-1/2 lg:border-l lg:border-bordergray lg:px-16 xl:px-32"
  >
    <FeaturedProjects />
    <VisualArts />
    <About />
    <Stack />
    <MobileFooter />
  </main>
</template>

<script setup lang="ts">
import FeaturedProjects from "./FeaturedProjects.vue";
import VisualArts from "./VisualArts.vue";
import About from "./About.vue";
import Stack from "./Stack.vue";
import MobileFooter from "./MobileFooter.vue";
</script>
