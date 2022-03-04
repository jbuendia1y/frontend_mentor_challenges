<script setup>
import { faSearch, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const emit = defineEmits(["change"]);

const handleChange = (e) => {
  const key = e.target.name;
  const value = e.target.value;
  emit("change", { key, value });
};
</script>

<template>
  <div class="flex flex-col justify-between md:flex-row">
    <div class="relative mb-4">
      <font-awesome-icon
        class="absolute left-2 top-3"
        :icon="faSearch"
      ></font-awesome-icon>
      <input
        type="text"
        class="px-8 py-2 border border-transparent rounded-sm shadow-sm outline-none text-ligthInput dark:text-darkText dark:bg-darkEl"
        placeholder="Search for a country..."
        name="name"
        id="name"
        v-on:change="handleChange"
      />
    </div>
    <div class="relative w-max">
      <font-awesome-icon
        class="absolute right-3 top-3"
        :icon="faAngleDown"
      ></font-awesome-icon>
      <select
        class="px-4 py-2 pr-12 appearance-none w-42 bg-ligthEl dark:bg-darkEl text-ligthInput dark:text-darkText"
        name="region"
        id="region"
        placeholder="Filer by region"
        v-on:change="handleChange"
      >
        <option value="">Filer by region</option>
        <option value="americas">America</option>
        <option value="africa">Africa</option>
        <option value="asia">Asia</option>
        <option value="europe">Europa</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  </div>
</template>
