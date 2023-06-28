<template>
  <Swiper
    :pagination="{
      type: 'progressbar',
    }"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :spaceBetween="5"
    :loop="true"
    :modules="modules"
    class="tab2-swiper mt-2"
    id="mySwiper"
  >
    <SwiperSlide
      v-for="section in item.acf.tab_2_repeater_content"
      :key="section.tab_2_content_title"
    >
      <article>
        <h4 class="mt-8">{{ section.tab_2_content_title }}</h4>
        <div class="imagediv mt-4">
          <img
            :src="section.tab_2_content_preview.url"
            :alt="section.tab_2_content_preview.alt"
            class="h-full max-h-[338px] w-full flex-shrink-0 flex-grow-0 object-fill"
          />
        </div>
        <p class="mt-5 flex-grow-0 text-[0.95rem] text-text">
          {{ section.tab_2_text_area }}
        </p>
      </article>
    </SwiperSlide>
    <div class="mt-3 flex justify-between">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper";

const modules = [Pagination, Navigation];

defineProps({
  item: {
    type: Object as () => AccordionContentProps["item"],
    required: true,
  },
});

interface AccordionContentProps {
  item: {
    id: number;
    acf: {
      tab_2_repeater_content: {
        tab_2_content_title: string;
        tab_2_content_preview: {
          url: string;
          alt: string;
        };
        tab_2_text_area: string;
      }[];
    };
  };
}
</script>

<style>
.swiper-button-prev,
.swiper-button-next {
  position: static;
  margin: 0;
  scale: 50%;
  color: #7b8da3;
}
</style>
