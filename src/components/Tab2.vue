<template>
  <Swiper
    :navigation="false"
    :slidesPerView="1.052"
    :spaceBetween="10"
    :pagination="{
      type: 'progressbar',
    }"
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
      // Add more properties as needed
    };
    // Add more properties as needed
  };
}

// const swiperBreakpoints = {
//   // when window width is >= 320px
//   320: {
//     slidesPerView: 1.052,
//   },
//   1024: {
//     slidesPerView: 1,
//   },
// };
</script>

<style>
/* .tab2-swiper .swiper-button-next,
.tab2-swiper .swiper-button-prev {
  position: static;
  color: #7b8da3;
  left: auto;
  right: 0.2%;
  scale: 50%;
  display: none;
}

.tab2-swiper .swiper-button-prev {
  right: calc(0.2% + 25px);
}

@media (min-width: 1024px) {
  .tab2-swiper .swiper-button-next,
  .tab2-swiper .swiper-button-prev {
    display: block;
  }
} */
</style>
