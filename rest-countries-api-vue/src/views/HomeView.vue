<script>
import UIContainerVue from "../components/UIContainer.vue";
import UIBoxLoadingVue from "../components/UIBoxLoading.vue";
import HomeFiltersVue from "../components/HomeFilters.vue";
import CountryCardVue from "../components/CountryCard.vue";

import { inject } from "vue";

// setup method cannot be async method

export default {
  name: "homeView",
  components: {
    UIContainerVue,
    CountryCardVue,
    HomeFiltersVue,
    UIBoxLoadingVue,
  },
  async beforeCreate() {
    await this.store.methods.getAll();
  },
  setup() {
    const store = inject("store");

    const handleChange = ({ key, value }) => {
      store.methods.setFilter(key, value);
    };

    return { store, handleChange };
  },
};
</script>

<template>
  <main class="min-h-screen mt-4">
    <UIContainerVue>
      <template v-if="store.state.countries">
        <HomeFiltersVue v-on:change="handleChange" />
        <div
          class="grid justify-center grid-cols-1 gap-3 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          <CountryCardVue
            v-for="country of store.state.countries"
            :key="country.name"
            v-bind:country="country"
          ></CountryCardVue>
        </div>
      </template>
      <div
        v-else
        class="grid justify-center grid-cols-1 gap-3 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        <div
          v-for="item of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
          class="w-full h-56 max-w-full rounded-md bg-ligthEl dark:bg-darkEl animate-pulse"
          :key="`lodaingEl${item}`"
        >
          <UIBoxLoadingVue class="h-24" />
          <UIBoxLoadingVue class="my-2 h-9" />
          <UIBoxLoadingVue class="h-16 mb-2" />
        </div>
      </div>
    </UIContainerVue>
  </main>
</template>
