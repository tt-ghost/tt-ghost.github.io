<template lang="pug">
.fe-menu
  router-link.fe-menu-item(
    v-for='menu in menus'
    :to='menu.to'
    :class='{active: matchMemu(menu.to) }'
  ) {{menu.name}}
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const menus = ref([
  { name: "首页", to: "/" },
  { name: "技术", to: "/tech" },
  { name: "摄影", to: "/photo" },
  { name: "文章", to: "/article" },
]);
const route = useRoute();
console.log(route.path);
const matchMemu = (to) => route.path === to;
</script>
