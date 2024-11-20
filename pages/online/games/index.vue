<template>
  <div class="fe-games">
    <FeCardItems :list="games" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const { data } = await useFetch("/api/game/list");

const games = data;
</script>
