<template>
  <Swiper
    :slidesPerView="1.055"
    :spaceBetween="10"
    :pagination="{
      type: 'progressbar',
    }"
    :modules="modules"
    class="mt-2"
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
          />
        </div>
        <p class="mt-5 text-[0.95rem] text-headingtext">
          {{ section.tab_2_text_area }}
        </p>
      </article>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
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
      // Add more properties as needed
    };
    // Add more properties as needed
  };
}
</script>
