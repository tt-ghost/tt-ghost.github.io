<template>
  <div>{{ title }} HOME</div>
  <div>
    <nuxt-link to="/games">Games</nuxt-link>
    <nuxt-link to="/cms">CMS</nuxt-link>
    <nuxt-link to="/tools">Tools</nuxt-link>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const title = ref("FE1024");
</script>
