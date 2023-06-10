<template>
  <div
    id="left"
    class="fade-in-slide-up h-screen w-full md:px-20 lg:fixed lg:w-1/2 xl:px-32"
  >
    <div class="relative mt-20 h-full justify-between lg:flex lg:flex-col">
      <div>
        <h1>Nate Abaria</h1>
        <p>Web Developer and Designer</p>
        <p class="mt-[14rem] lg:mt-16 lg:text-[1rem]">
          Specializing in simplicity <br />
          and functionality
        </p>
      </div>

      <DownSVG />
      <DesktopFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import DownSVG from "./DownSVG.vue";
import DesktopFooter from "./DesktopFooter.vue";
</script>
