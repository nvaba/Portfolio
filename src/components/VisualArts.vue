<template>
  <section class="fade-in-slide-up mt-[5rem]">
    <h2 id="visual-arts">Visual Arts</h2>
    <p class="mt-2">A collection of my work outside of web development.</p>
    <a
      target="_blank"
      class="group mt-3 inline-block text-accent active:text-headingtext lg:transition-colors lg:duration-100 lg:ease-in-out lg:hover:text-headingtext"
      href="https://nateabaria.ca/gallery/"
    >
      <span class="flex items-center gap-1">
        View Gallery
        <SVGRight
          class="lg:transition-transform lg:duration-200 lg:group-hover:translate-x-[0.25rem]"
        />
      </span>
    </a>
  </section>
</template>

<script setup lang="ts">
import SVGRight from "./SVGRight.vue";
</script>
