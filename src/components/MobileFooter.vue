<template>
  <footer
    class="mt-[5rem] lg:hidden"
    role="contentinfo"
    aria-label="Mobile Footer"
  >
    <section>
      <h4 class="text-center">Let's Connect!</h4>
      <div class="mx-auto mt-2 text-center">
        <button
          @click="copyEmail"
          class="w-[12rem] transform rounded-xl bg-accent px-8 py-2 text-[0.85rem] text-panel transition-all duration-300 ease-in-out active:scale-95"
          aria-labelledby="mobile-email"
        >
          {{ buttonText }}
        </button>
      </div>
    </section>

    <section class="my-[5rem]">
      <div class="flex flex-col">
        <h4 class="text-center" aria-label="Copyright">
          &#xA9; 2023 | Nate Abaria
        </h4>
        <nav
          class="mt-2 flex justify-center gap-2"
          role="navigation"
          aria-label="Social Media Links"
        >
          <a
            href="https://www.linkedin.com/in/nate-abaria/"
            target="_blank"
            class="block"
            title="LinkedIn"
            aria-label="LinkedIn"
            rel="noopener"
            ><SVGLinkedin
          /></a>
          <a
            title="GitHub"
            class="block"
            href="https://github.com/nvaba"
            target="_blank"
            aria-label="GitHub"
            rel="noopener"
            ><SVGGithub
          /></a>
        </nav>
      </div>
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
