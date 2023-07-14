<template>
  <footer class="mb-40 hidden items-center justify-between gap-4 lg:flex">
    <section>
      <button
        @click="copyEmail"
        class="emailButton group relative h-[2.75rem] w-32 cursor-copy overflow-hidden rounded-lg bg-panel2 text-lg transition-all hover:translate-y-[-0.125rem]"
        aria-label="Copy email address to clipboard"
      >
        <div
          class="absolute inset-0 w-1 bg-accent transition-all duration-[250ms] ease-out group-hover:w-full"
          role="presentation"
        ></div>
        <span
          class="relative text-[0.9rem] text-headingtext group-hover:text-panel"
          >{{ buttonText }}</span
        >
      </button>
    </section>

    <section>
      <nav class="flex gap-2">
        <a
          href="https://www.linkedin.com/in/nate-abaria/"
          target="_blank"
          class="block"
          title="LinkedIn"
          aria-label="LinkedIn profile"
          rel="noopener"
          ><SVGLinkedin
        /></a>
        <a
          title="GitHub"
          class="block"
          href="https://github.com/nvaba"
          target="_blank"
          aria-label="GitHub profile"
          rel="noopener"
          ><SVGGithub
        /></a>
      </nav>
    </section>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SVGLinkedin from "./SVGLinkedin.vue";
import SVGGithub from "./SVGGithub.vue";

let buttonText = ref("Copy Email");

const copyEmail = () => {
  navigator.clipboard
    .writeText("nateaba@gmail.com")
    .then(() => {
      buttonText.value = "Email Copied!";
      setTimeout(() => {
        buttonText.value = "Copy Email";
      }, 2000);
    })
    .catch((err) => {
      console.warn("Could not copy email", err);
    });
};
</script>

<style scoped>
.emailButton {
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.emailButton:hover {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.05), 0 6px 8px rgba(0, 0, 0, 0.1);
}
</style>
