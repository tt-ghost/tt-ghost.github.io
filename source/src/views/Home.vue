<template lang="pug">
.fe-home
  .fe-home-nav
    FePhotoFrame.fe-home-epage(:src="img" size='small')
      h3
        a(href='/demos/epage') Epage
    FePhotoFrame.fe-home-calc(:src="img" size='small')
      h3
        a(href='/demos/awards') 计算器
    FePhotoFrame.fe-home-fullscreen(:src="img" size='small')
      h3
        a(href='/demos/fullscreen') Fullscreen.js
    FePhotoFrame.fe-home-lipper(:src="img" size='small')
      h3
        a(href='/demos/lipper') lipper


</template>

<script setup>
import { ref } from "vue";
import FePhotoFrame from "../components/FePhotoFrame.vue";
const img = ref("");
// const img = ref('https://photo.tuchong.com/3441423/f/149737297.jpg');
</script>

<style lang="styl">
.fe-home
  /* max-width page-max-width; */
  max-width 1440px;
  margin-left auto;
  margin-right auto;
  &-nav
    padding 48px 0;
    text-align center;
  &-epage
    margin 36px 0;
  &-calc
    margin 36px;
    position relative
    top -24px;
  &-fullscreen
    margin 36px 0;
  &-lipper
    position relative
    top -24px;
    margin 36px;
</style>
