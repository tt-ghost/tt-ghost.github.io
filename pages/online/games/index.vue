<template>
  <div class="fe-games">
    <FeCardItems :list="games" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { defaultGames } from "@/utils/games";
const gameList = defaultGames();

const games = ref(gameList);
</script>
