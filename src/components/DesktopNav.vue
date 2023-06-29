<template>
  <nav>
    <ul
      class="hidden flex-col gap-5 rounded-xl bg-navigation px-[0.4rem] py-3 shadow-lg lg:inline-flex"
    >
      <li
        class="navlistitem list-none shadow-sm transition-all hover:translate-y-[-0.125rem]"
      >
        <a @click.prevent="navigate('#featured-projects')"
          ><SVGProjects class="h-6"
        /></a>
      </li>
      <li
        class="navlistitem list-none shadow-sm transition-all hover:translate-y-[-0.125rem]"
      >
        <a @click.prevent="navigate('#about')"><SVGPerson class="h-6" /></a>
      </li>
      <li
        class="navlistitem list-none shadow-sm transition-all hover:translate-y-[-0.125rem]"
      >
        <a @click.prevent="navigate('#stack')"><SVGStack class="h-6" /></a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import SVGProjects from "./SVGProjects.vue";
import SVGPerson from "./SVGPerson.vue";
import SVGStack from "./SVGStack.vue";

// Handle click event on navigation links
const navigate = (anchor: string) => {
  const targetElement = document.querySelector(anchor);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
