<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    class="hoverUpDown absolute left-1/2 top-[77%] -translate-x-1/2 transform lg:hidden"
  >
    <path
      fill="none"
      stroke="#dfdfdf"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="4"
      d="M36 12L24 24L12 12m24 12L24 36L12 24"
    />
  </svg>
</template>

<style>
@keyframes hoverUpDown {
  0% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-20px);
  }
  100% {
    transform: translateX(-50%) translateY(0);
  }
}

.hoverUpDown {
  animation: hoverUpDown 2s ease-in-out infinite;
}
</style>
