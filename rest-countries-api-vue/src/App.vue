<script>
import UIHeaderVue from "./components/UIHeader.vue";
import store from "./store";
import { setThemeByLocalStorage } from "./utils/theme";

export default {
  beforeMount() {
    setThemeByLocalStorage();
  },
  components: {
    UIHeaderVue,
  },
  provide() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="bg-bgLight text-ligthText dark:bg-bgDark dark:text-darkText">
    <UIHeaderVue />
    <RouterView />
  </div>
</template>
