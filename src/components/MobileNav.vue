<template>
  <nav
    :class="{ 'show-nav': showNav }"
    class="fixed bottom-4 left-0 right-0 mx-auto w-[90%] max-w-[400px] rounded-xl bg-navigation px-2 py-2 shadow-lg lg:hidden"
  >
    <ul class="navlist flex list-none justify-around">
      <li class="navlistitem list-none">
        <a @click.prevent="navigate('#left')"><SVGHome /></a>
      </li>
      <li class="navlistitem list-none">
        <a @click.prevent="navigate('#featured-projects')"><SVGProjects /></a>
      </li>
      <!-- <li><a @click.prevent="navigate('#visual-arts')"><SVGArt /></a></li> -->
      <li class="navlistitem list-none">
        <a @click.prevent="navigate('#about')"><SVGPerson /></a>
      </li>
      <li class="navlistitem list-none">
        <a @click.prevent="navigate('#stack')"><SVGStack /></a>
      </li>
      <li class="navlistitem list-none">
        <a @click.prevent="navigate('#mobile-email')"><SVGEmail /></a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import SVGHome from "./SVGHome.vue";
import SVGProjects from "./SVGProjects.vue";
import SVGStack from "./SVGStack.vue";
import SVGEmail from "./SVGEmail.vue";
import SVGPerson from "./SVGPerson.vue";

import { ref } from "vue";

const showNav = ref(false);
const navClicked = ref(false);
let lastScrollPosition = window.scrollY;
const scrollThreshold = 10; // Adjust this value as needed
const initialHideThreshold = 100; // The navigation will remain hidden until the user scrolls this distance
let navClickTimeoutId: number | undefined = undefined; // Update the type to 'number | undefined'

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;
  const scrollDifference = Math.abs(currentScrollPosition - lastScrollPosition);

  if (
    currentScrollPosition > initialHideThreshold &&
    scrollDifference >= scrollThreshold
  ) {
    if (currentScrollPosition < lastScrollPosition) {
      // User is scrolling upwards, show the navigation
      showNav.value = true;
      navClicked.value = false;
    } else {
      // User is scrolling downwards
      if (!navClicked.value) {
        // If a nav link wasn't clicked, hide the navigation
        showNav.value = false;
      }
    }
  }

  lastScrollPosition = currentScrollPosition;
});

// Handle click event on navigation links
const navigate = (anchor: string) => {
  navClicked.value = true;

  const targetElement = document.querySelector(anchor);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
    // Wait until the scrolling has ended before hiding the navigation
    clearTimeout(navClickTimeoutId);
    navClickTimeoutId = window.setTimeout(() => {
      navClicked.value = false;
      showNav.value = false;
    }, 2000); // 2000 ms delay to match the smooth scrolling duration
  }
};
</script>

<style scoped>
.show-nav {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

nav {
  transform: translateY(100%);
  opacity: 0;
  pointer-events: none;
}
</style>
