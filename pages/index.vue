<template>
  <div class="fe-home">
    <!-- <FeSearch /> -->
    <!-- <FeFilter /> -->
    <FeCardItems :list="games" title="游戏" more-link="/online/games" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import defaultGames from "@/utils/games";

const games = ref(defaultGames());
</script>
