<script>
import UIContainer from "../components/UIContainer.vue";
import BorderItemVue from "../components/BorderItem.vue";
import CountryViewItemVue from "../components/CountryViewItem.vue";

import { ref } from "vue";
import { useRoute } from "vue-router";
import CountryRepository from "../repositories/CountryRepository";
import { getCurrencies, getNativeName } from "../utils/countryFunctions";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

export default {
  components: {
    UIContainer,
    BorderItemVue,
    CountryViewItemVue,
  },
  setup() {
    const route = useRoute();
    const countryName = route.params.countryName;

    const country = ref(null);
    const error = ref(null);

    CountryRepository.findOneByName(countryName)
      .then((res) => {
        country.value = res[0];
      })
      .catch((err) => {
        error.value = err.message;
      });
    document.body.scrollTop = 0;

    return {
      getCurrencies,
      getNativeName,
      faArrowAltCircleLeft,
      country,
      error,
    };
  },
};
</script>

<template>
  <UIContainer>
    <div class="mt-4" v-if="error">{{ error }}</div>
    <div v-else-if="country" class="min-h-screen mx-auto mt-12">
      <router-link
        to="/"
        class="px-4 py-2 border border-transparent rounded-sm shadow-sm dark:bg-darkEl"
        ><font-awesome-icon :icon="faArrowAltCircleLeft"></font-awesome-icon>
        Back</router-link
      >
      <div
        class="flex flex-col justify-center mt-6 sm:items-center lg:flex-row"
      >
        <img
          class="inline-block object-cover w-full h-full max-w-full overflow-hidden md:max-w-lg max-h-72"
          v-bind:src="country.flags[0]"
          v-bind:alt="country.name.common"
        />
        <div class="inline-block max-w-lg mt-5 md:mt-0 lg:ml-5">
          <h1 class="mb-2 text-4xl font-semibold">
            {{ country.name.official }}
          </h1>
          <div class="columns-1 sm:columns-2">
            <CountryViewItemVue>
              Native name:
              <span> {{ getNativeName(country.name) }}</span>
            </CountryViewItemVue>
            <CountryViewItemVue>
              Population: <span> {{ country.population }}</span>
            </CountryViewItemVue>
            <CountryViewItemVue>
              Region: <span> {{ country.region }}</span>
            </CountryViewItemVue>
            <CountryViewItemVue>
              Subregion: <span> {{ country.subregion }}</span>
            </CountryViewItemVue>
            <CountryViewItemVue v-if="country.capital">
              Capital: <span> {{ country.capital.toString() }}</span>
            </CountryViewItemVue>
            <CountryViewItemVue v-if="country.tld">
              Top Level Domain:
              <span> {{ country.tld.toString() }}</span>
            </CountryViewItemVue>
            <CountryViewItemVue v-if="country.currencies">
              Currencies:
              <span> {{ getCurrencies(country.currencies).toString() }}</span>
            </CountryViewItemVue>
            <CountryViewItemVue v-if="country.languajes">
              Languajes:
              <span> {{ country.languajes.map((item) => item.name) }}</span>
            </CountryViewItemVue>
          </div>
          <div v-if="country.borders" class="flex items-center">
            <p class="mr-2">Border countries: {{}}</p>
            <div class="flex gap-2">
              <BorderItemVue v-for="item of country.borders" :key="item">{{
                item
              }}</BorderItemVue>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="min-h-screen"></div>
  </UIContainer>
</template>
