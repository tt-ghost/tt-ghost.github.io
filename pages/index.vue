<template>
  <div class="fe-home">
    <FeCardItems :list="games" title="游戏" more-link="/online/games" />
    <!-- <FeCardItems :list="cmses" title="管理系统" more-link="/online/cms" /> -->
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { defaultGames } from "@/utils/games";
// const gameList = defaultGames().slice(0, 8);

const games = ref(defaultGames());
</script>
