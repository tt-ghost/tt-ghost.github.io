<template>
  <iframe class="fe-iframe" v-if="data" frameborder="0" :src="url" noborder />
</template>
<script setup lang="ts">
const BASE_URL = "https://cdn.fe1024.com/webstatic/fe1024/games";
const route = useRoute();
const { data } = await useFetch(`/api/game/detail/${route.params.name}`);

const url = data.value.url
  ? data.value.url
  : `${BASE_URL}/${data.value.name}/index.html`;

definePageMeta({
  layout: false,
});
</script>
<style>
.fe-iframe {
  width: 100%;
  height: 100vh;
  display: block;
}
</style>
