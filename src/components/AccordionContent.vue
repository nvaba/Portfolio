<template>
  <div class="mt-3">
    <section>
      <h4>{{ item.acf.overview_title }}</h4>
      <p class="projecttext mt-2">{{ item.acf.overview_text }}</p>
      <nav class="mt-3">
        <a class="project-external-link" :href="item.acf.live_website_url"
          >Live Site</a
        >
        <a class="project-external-link" :href="item.acf.repo_url"
          >View Repository</a
        >
      </nav>
    </section>

    <section>
      <div class="mt-7">
        <button
          @click="activeTab = 'tab1'"
          :class="{ active: activeTab === 'tab1' }"
        >
          {{ item.acf.tab_title_1 }}
        </button>
        <button
          @click="activeTab = 'tab2'"
          :class="{ active: activeTab === 'tab2' }"
        >
          {{ item.acf.tab_title_2 }}
        </button>
        <button
          @click="activeTab = 'tab3'"
          :class="{ active: activeTab === 'tab3' }"
        >
          {{ item.acf.tab_title_3 }}
        </button>
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
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
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
      tab_title_1: string;
      tab_title_2: string;
      tab_title_3: string;
    };
    // Add more properties as needed
  };
}

// Define the props
const props = defineProps<AccordionContentProps>();

// Define the activeTab ref
const activeTab = ref("tab1");

// Output the received data
console.log(props.item.acf.live_website_url);
</script>

<style scoped>
.active {
  color: #dfdfdf;
  text-decoration: underline;
}
</style>
