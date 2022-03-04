<script setup>
defineProps({
  width: {
    type: String,
    default: "9",
  },
  height: {
    type: String,
    default: "9",
  },
  borderWidth: {
    type: String,
    default: "2",
  },
});
</script>

<template>
  <div
    v-bind:class="`w-${width}
     h-${height}
      rounded-full
       border-${borderWidth}
        border-ligthEl
         border-l-transparent
          dark:border-darkEl dark:border-l-transparent 
           border-solid animate-spin`"
  ></div>
</template>
