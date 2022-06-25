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
<style lang="styl">
.fe-menu
  display inline-block;
  font-size 12px;
  &-item
    color #666;
    display inline-block;
    padding-left 24px;
    padding-right 24px;
    text-align center;
    letter-spacing: 4px;
    font-weight 400;
    &:hover,&.active
      font-weight 700;
      color #252525;
</style>
