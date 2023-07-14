<template>
  <Swiper
    v-if="
      item.acf.tab_3_repeater_content &&
      item.acf.tab_3_repeater_content.length > 0
    "
    :pagination="{
      type: 'progressbar',
    }"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :loop="true"
    :modules="modules"
    class="tab3-swiper mt-2"
    id="mySwiper"
    role="region"
    aria-label="Tab 3 Content"
  >
    <SwiperSlide
      v-for="section in item.acf.tab_3_repeater_content"
      :key="section.tab_3_content_title"
      role="article"
      aria-label="Tab 3 Slide"
    >
      <article>
        <h4 class="mt-8" v-if="section.tab_3_content_title">
          {{ section.tab_3_content_title }}
        </h4>
        <p
          class="mt-2 text-[0.95rem] text-text"
          role="textbox"
          aria-label="Tab 3 Text Area"
          v-if="section.tab_3_text_area"
        >
          {{ section.tab_3_text_area }}
        </p>
      </article>
    </SwiperSlide>
    <div class="mt-3 flex justify-between">
      <div
        class="swiper-button-prev"
        role="button"
        aria-label="Previous Slide"
      ></div>
      <div
        class="swiper-button-next"
        role="button"
        aria-label="Next Slide"
      ></div>
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
      tab_3_repeater_content: {
        tab_3_content_title?: string;
        tab_3_text_area?: string;
      }[];
    };
  };
}
</script>
