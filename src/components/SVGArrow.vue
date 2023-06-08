<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    class="h-7 transform transition-transform duration-300"
    :class="{ 'rotate-180': active }"
  >
    <path
      fill="none"
      stroke="#f8f8f8"
      stroke-linecap="square"
      d="m14 5l-6.5 7L1 5"
    />
  </svg>
</template>

<script setup lang="ts">
interface SvgArrowProps {
  active: boolean;
}

defineProps<SvgArrowProps>();
</script>
