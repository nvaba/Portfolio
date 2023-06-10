<template>
  <footer class="mt-[5rem] lg:hidden">
    <section>
      <h4 class="text-center">Let's Connect!</h4>
      <div class="mx-auto mt-2 text-center">
        <button
          @click="copyEmail"
          class="w-[12.5rem] rounded-xl bg-panel px-8 py-2 text-[0.8rem] text-headingtext transition-all duration-300 ease-in-out hover:translate-y-[-0.125rem] hover:bg-accent hover:text-panel active:bg-accent active:text-panel"
        >
          {{ buttonText }}
        </button>
      </div>
    </section>

    <section class="my-[5rem]">
      <h4 class="text-center">&#xA9; 2023 | Nate Abaria</h4>
      <nav></nav>
    </section>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

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
