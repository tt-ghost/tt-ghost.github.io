<template>
  <FeIframe :data="game.data" :src="game.src" />
</template>
<script setup lang="ts">
import { inject } from "vue";
const game = inject("game");

definePageMeta({
  layout: "game",
});
</script>
<style></style>
