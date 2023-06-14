<template>
  <footer class="mt-[5rem] lg:hidden">
    <section>
      <h4 id="mobile-email" class="text-center">Let's Connect!</h4>
      <div class="mx-auto mt-2 text-center">
        <button
          @click="copyEmail"
          class="w-[12.5rem] rounded-xl bg-panel px-8 py-2 text-[0.8rem] text-headingtext transition duration-300 active:bg-accent"
        >
          {{ buttonText }}
        </button>
      </div>
    </section>

    <section class="my-[5rem]">
      <div class="flex flex-col">
        <h4 class="text-center">&#xA9; 2023 | Nate Abaria</h4>
        <nav class="mt-2 flex justify-center gap-2">
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
