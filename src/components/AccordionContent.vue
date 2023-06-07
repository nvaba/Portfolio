<template>
  <article class="mt-3 rounded-lg bg-panel p-5">
    <section>
      <h4>{{ item.acf.overview_title }}</h4>
      <p class="projecttext mt-2">{{ item.acf.overview_text }}</p>
      <nav class="mt-3 flex gap-1">
        <a class="project-external-link" :href="item.acf.live_website_url"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 256 256"
            class="logosvg"
          >
            <path
              fill="#7b8da3"
              d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm-26.37 144h52.74C149 186.34 140 202.87 128 215.89c-12-13.02-21-29.55-26.37-47.89ZM98 152a145.72 145.72 0 0 1 0-48h60a145.72 145.72 0 0 1 0 48Zm-58-24a87.61 87.61 0 0 1 3.33-24h38.46a161.79 161.79 0 0 0 0 48H43.33A87.61 87.61 0 0 1 40 128Zm114.37-40h-52.74C107 69.66 116 53.13 128 40.11c12 13.02 21 29.55 26.37 47.89Zm19.84 16h38.46a88.15 88.15 0 0 1 0 48h-38.46a161.79 161.79 0 0 0 0-48Zm32.16-16h-35.43a142.39 142.39 0 0 0-20.26-45a88.37 88.37 0 0 1 55.69 45ZM105.32 43a142.39 142.39 0 0 0-20.26 45H49.63a88.37 88.37 0 0 1 55.69-45ZM49.63 168h35.43a142.39 142.39 0 0 0 20.26 45a88.37 88.37 0 0 1-55.69-45Zm101.05 45a142.39 142.39 0 0 0 20.26-45h35.43a88.37 88.37 0 0 1-55.69 45Z"
            />
          </svg>
        </a>
        <a class="project-external-link" :href="item.acf.repo_url"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            class="logosvg"
          >
            <path
              fill="#7b8da3"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
            />
          </svg>
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
