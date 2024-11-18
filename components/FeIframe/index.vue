<template>
  <iframe class="fe-iframe" v-if="data" frameborder="0" :src="src" noborder />
</template>
<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    default: () => null,
  },
  src: {
    type: String,
    default: "",
  },
});
</script>
