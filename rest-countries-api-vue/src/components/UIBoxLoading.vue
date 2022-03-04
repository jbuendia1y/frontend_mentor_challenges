<script>
export default {
  setup(props) {
    const classes =
      "bg-ligthText m-0 bg-opacity-10 border border-transparent animate-pulse" +
      props.class;
    return { classes };
  },
};
</script>

<template>
  <div v-bind:class="classes"></div>
</template>
