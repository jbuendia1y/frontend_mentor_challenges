<script setup>
import { changeTheme } from "../utils/theme";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
</script>

<template>
  <header class="py-4 bg-ligthEl dark:bg-darkEl">
    <div class="flex justify-between w-11/12 mx-auto">
      <h1 class="text-lg font-semibold">
        <router-link to="/">Where in the world?</router-link>
      </h1>
      <button v-on:click="changeTheme" class="flex max-h-6">
        <div class="w-8 h-6">
          <font-awesome-icon :icon="faMoon" />
        </div>
        <p>Dark mode</p>
      </button>
    </div>
  </header>
</template>
