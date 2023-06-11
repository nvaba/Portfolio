<template>
  <footer class="mb-40 hidden items-center justify-between gap-4 lg:flex">
    <section>
      <button
        @click="copyEmail"
        class="emailButton group relative h-[2.75rem] w-32 cursor-copy overflow-hidden rounded-lg bg-panel2 text-lg transition-all hover:translate-y-[-0.125rem]"
      >
        <div
          class="absolute inset-0 w-1 bg-accent transition-all duration-[250ms] ease-out group-hover:w-full"
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
          href="https://www.linkedin.com/in/nate-abaria-891b34243/"
          target="_blank"
          class="block"
          title="LinkedIn"
          ><SVGLinkedin
        /></a>
        <a
          title="GitHub"
          class="block"
          href="https://github.com/nvaba"
          target="_blank"
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
      // Show a message saying that the email was copied
      buttonText.value = "Email Copied!";
      // Change back to original text after 3 seconds
      setTimeout(() => {
        buttonText.value = "Copy Email";
      }, 2000);
    })
    .catch((err) => {
      // Could not copy text: display a warning
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
