<template>
  <article class="mt-3 rounded-lg bg-panel p-5">
    <section>
      <h4>{{ item.acf.overview_title }}</h4>
      <p class="projecttext mt-2">{{ item.acf.overview_text }}</p>
      <nav class="mt-3 flex gap-1">
        <a class="project-external-link" :href="item.acf.live_website_url"
          ><SVGWebsite />
        </a>
        <a class="project-external-link" :href="item.acf.repo_url"
          ><SVGGithub />
        </a>
      </nav>
    </section>

    <section>
      <div class="mt-7 text-center">
        <div class="mx-auto inline-block rounded-md bg-background p-2">
          <button
            class="mr-[0.5rem]"
            @click="activeTab = 'tab1'"
            :class="{ active: activeTab === 'tab1' }"
          >
            {{ item.acf.tab_1_category }}
          </button>
          <button
            class="mr-[0.5rem]"
            @click="activeTab = 'tab2'"
            :class="{ active: activeTab === 'tab2' }"
          >
            {{ item.acf.tab_2_category }}
          </button>
          <button
            @click="activeTab = 'tab3'"
            :class="{ active: activeTab === 'tab3' }"
          >
            {{ item.acf.tab_3_category }}
          </button>
        </div>
      </div>

      <div v-if="activeTab === 'tab1'">
        <Tab1 :item="item" />
      </div>
      <div v-if="activeTab === 'tab2'">
        <Tab2 :item="item" />
      </div>
      <div v-if="activeTab === 'tab3'">
        <Tab3 :item="item" />
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
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
    };
    // Add more properties as needed
  };
}

// Define the props
defineProps<AccordionContentProps>();

// Define the activeTab ref
const activeTab = ref("tab1");

// Output the received data
// console.log(props.item.acf.live_website_url);
</script>

<style scoped>
.active {
  color: #dfdfdf;
  text-decoration: underline;
}
</style>
