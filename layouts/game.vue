<template>
  <div class="fe-layout-game"><slot></slot></div>
</template>
<script setup lang="ts">
import { provide, ref } from "vue";

const BASE_URL = "https://cdn.fe1024.com/webstatic/fe1024/games";
const route = useRoute();

const fullPath = (route.fullPath || "").replace(/\/$/, "");
const name = fullPath.split("/").slice(-1);
const { data } = await useFetch(`/api/game/detail/${name}`);

const src = data.value.url
  ? data.value.url
  : `${BASE_URL}/${data.value.name}/index.html`;
const game = ref({ data, src });
provide("game", game);
</script>
<style lang="less">
.fe-layout-game {
  height: 100%;
  width: 100%;
}
.fe-iframe {
  width: 100%;
  height: 100vh;
  display: block;
}
</style>
