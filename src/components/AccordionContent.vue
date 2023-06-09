<template>
  <article class="mt-3 rounded-lg bg-panel p-[0.8rem]">
    <section>
      <h4>{{ props.item.acf.overview_title }}</h4>
      <p class="projecttext mt-2 text-headingtext">
        {{ props.item.acf.overview_text }}
      </p>
      <nav class="mt-3 flex gap-1">
        <a
          title="View Live Site"
          class="project-external-link"
          :href="props.item.acf.live_website_url"
          target="_blank"
          aria-label="View Live Site"
          rel="noopener"
          ><SVGWebsite />
        </a>
        <a
          title="View Github Repository"
          class="project-external-link"
          :href="props.item.acf.repo_url"
          target="_blank"
          aria-label="View Github Repository"
          rel="noopener"
          ><SVGGithub />
        </a>
      </nav>
    </section>

    <section>
      <div class="relative mt-7 text-center">
        <div class="mx-auto inline-block rounded-md bg-background p-2">
          <button
            aria-controls="tab1-content"
            ref="tabs"
            class="tab mr-[0.5rem] text-[0.85rem] hover:text-headingtext lg:text-[0.9rem]"
            @click="activeTab = 'tab1'"
            :class="{ active: activeTab === 'tab1' }"
            aria-selected="true"
            role="tab"
            :id="'tab1-' + props.item.id"
          >
            {{ props.item.acf.tab_1_category }}
          </button>
          <button
            aria-controls="tab2-content"
            ref="tabs"
            class="tab mr-[0.5rem] text-[0.85rem] hover:text-headingtext lg:text-[0.9rem]"
            @click="activeTab = 'tab2'"
            :class="{ active: activeTab === 'tab2' }"
            aria-selected="false"
            role="tab"
            :id="'tab2-' + props.item.id"
          >
            {{ props.item.acf.tab_2_category }}
          </button>
          <button
            aria-controls="tab3-content"
            ref="tabs"
            class="tab text-[0.85rem] hover:text-headingtext lg:text-[0.9rem]"
            @click="activeTab = 'tab3'"
            :class="{ active: activeTab === 'tab3' }"
            aria-selected="false"
            role="tab"
            :id="'tab3-' + props.item.id"
          >
            {{ props.item.acf.tab_3_category }}
          </button>
        </div>
      </div>

      <div
        v-if="activeTab === 'tab1' && props.item.acf.tab_1_content"
        aria-labelledby="tab1"
        role="tabpanel"
      >
        <Tab1 :item="props.item" />
      </div>
      <div v-if="activeTab === 'tab2'" aria-labelledby="tab2" role="tabpanel">
        <Tab2 :item="props.item" />
      </div>
      <div v-if="activeTab === 'tab3'" aria-labelledby="tab3" role="tabpanel">
        <Tab3 :item="props.item" />
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted, onUpdated } from "vue";
import SVGWebsite from "./SVGWebsite.vue";
import SVGGithub from "./SVGGithub.vue";
import Tab1 from "./Tab1.vue";
import Tab2 from "./Tab2.vue";
import Tab3 from "./Tab3.vue";

interface AccordionContentProps {
  item: {
    id: number;
    title: {
      rendered: string;
    };
    acf: {
      overview_title: string;
      overview_text: string;
      live_website_url: string;
      repo_url: string;
      tab_1_category: string;
      tab_2_category: string;
      tab_3_category: string;
      tab_1_content: {
        tab_1_content_title: string;
        tab_1_content_list: string;
        tab_1_content_text_area: string;
      };
      tab_2_repeater_content: {
        tab_2_content_title: string;
        tab_2_content_preview: {
          url: string;
          alt: string;
        };
        tab_2_text_area: string;
      }[];
      tab_3_repeater_content: {
        tab_3_content_title: string;
        tab_3_content_preview: {
          url: string;
          alt: string;
        };
        tab_3_text_area: string;
      }[];
    };
  };
}

// Define the props
const props = defineProps<AccordionContentProps>();

// Define the activeTab ref
const activeTab = ref("tab1");

const tabs: Ref<Element[] | null> = ref(null);

onMounted(() => {
  tabs.value = Array.from(document.querySelectorAll(".tab"));
});

onUpdated(() => {
  tabs.value = Array.from(document.querySelectorAll(".tab"));
});
</script>

<style scoped>
.tab {
  position: relative;
  transition: color 0.3s ease-in-out;
}

.tab::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 1px;
  background: #dfdfdf;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}

.tab.active {
  color: #dfdfdf;
}

.tab.active::after {
  transform: scaleX(1);
}
</style>
