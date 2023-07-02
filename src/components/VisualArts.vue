<template>
  <section
    class="fade-in-slide-up mt-[5rem]"
    role="region"
    aria-labelledby="visual-arts"
  >
    <h2 id="visual-arts">Visual Arts</h2>
    <div
      class="group mt-2 rounded-lg bg-accordion px-2 py-4 shadow-md sm:px-4 lg:hover:bg-divhover"
      role="region"
      aria-label="Visual Arts Collection"
    >
      <p role="textbox" aria-label="Visual Arts Description">
        A collection of my work outside of web development.
      </p>

      <a rel="noopener" target="_blank" href="https://nateabaria.ca/gallery/">
        <div class="mt-2 overflow-hidden rounded-md">
          <img
            class="h-40 w-full transform rounded-md object-cover transition-all duration-200 ease-in-out hover:scale-105 hover:blur-0 hover:brightness-100 sm:h-60 md:h-80 lg:blur-[1px] lg:brightness-[0.4] lg:group-hover:h-80"
            src="/buildings.webp"
            alt="Visual Arts Banner"
            role="img"
            aria-label="Visual Arts Banner"
          />
        </div>
      </a>

      <a
        target="_blank"
        class="group mt-2 inline-block text-accent active:text-headingtext lg:transition-colors lg:duration-100 lg:ease-in-out lg:group-hover:text-headingtext"
        href="https://nateabaria.ca/gallery/"
        role="link"
        aria-label="View Gallery"
        rel="noopener"
      >
        <span class="flex items-center gap-1">
          View Gallery
          <SVGRight
            class="lg:transition-transform lg:duration-200 lg:group-hover:translate-x-[0.25rem]"
            role="img"
            aria-label="Arrow Right"
          />
        </span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import SVGRight from "./SVGRight.vue";
</script>
