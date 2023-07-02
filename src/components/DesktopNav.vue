<template>
  <nav>
    <ul
      class="hidden flex-col gap-5 rounded-xl bg-navigation px-[0.4rem] py-3 shadow-lg lg:inline-flex"
    >
      <li
        class="navlistitem list-none shadow-sm transition-all hover:translate-y-[-0.125rem]"
        role="presentation"
      >
        <a
          @click.prevent="navigate('#featured-projects')"
          aria-label="Navigate to Featured Projects section"
          role="button"
        >
          <SVGProjects class="h-6" />
        </a>
      </li>
      <li
        class="navlistitem list-none shadow-sm transition-all hover:translate-y-[-0.125rem]"
        role="presentation"
      >
        <a
          @click.prevent="navigate('#about')"
          aria-label="Navigate to About section"
          role="button"
        >
          <SVGPerson class="h-6" />
        </a>
      </li>
      <li
        class="navlistitem list-none shadow-sm transition-all hover:translate-y-[-0.125rem]"
        role="presentation"
      >
        <a
          @click.prevent="navigate('#stack')"
          aria-label="Navigate to Stack section"
          role="button"
        >
          <SVGStack class="h-6" />
        </a>
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
