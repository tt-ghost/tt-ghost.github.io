<template>
  <div class="fe-home">
    <FeSearch @search="onSearch" />
    <!-- <FeFilter /> -->
    <FeCardItems :list="list" title="游戏" more-link="/online/games" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import defaultGames from "@/utils/games";

const allItems = () => [...defaultGames()];

const list = ref(allItems());
const onSearch = (val: string) => {
  if (!val) {
    list.value = allItems();
    return;
  }
  val = val.toLowerCase();

  const items = allItems().filter((item: any) => {
    const title = item.title.toLowerCase();
    return title.indexOf(val) > -1;
  });
  list.value = items;
};
</script>
