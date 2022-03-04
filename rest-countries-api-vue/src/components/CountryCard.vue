<script setup>
import { getFlag } from "../utils/countryFunctions";

defineProps({
  country: { type: Object, required: true },
});
</script>

<template>
  <router-link
    v-bind:to="`/${country.name.common}`"
    class="inline-block max-w-full bg-ligthEl dark:bg-darkEl"
  >
    <img
      class="inline-block object-cover w-full max-w-full h-44"
      v-bind:src="getFlag(country.flags)"
      v-bind:alt="country.name"
    />
    <div class="p-2">
      <h1 class="mb-1 text-xl font-bold">{{ country.name.official }}</h1>
      <p>
        Population: <span>{{ country.population }}</span>
      </p>
      <p>
        Region: <span>{{ country.region }}</span>
      </p>
      <p v-if="country.capital">
        Capital: <span>{{ country.capital[0] }}</span>
      </p>
    </div>
  </router-link>
</template>
