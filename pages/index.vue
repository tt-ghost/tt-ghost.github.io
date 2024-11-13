<template>
  <div>{{ title }} HOME</div>
  <div>
    <nuxt-link to="/games">Games</nuxt-link>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const title = ref("FE1024");
</script>
