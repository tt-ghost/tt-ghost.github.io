<template lang="pug">
.fe-photo-frame(:style='`background-image: url(${src})`' :class='{small: size === "small"}')
  slot
</template>
<script setup>
defineProps({
  src: String,
  size: String,
});
</script>
<style lang="styl">
.fe-photo-frame
  border 6px solid #000;
  padding 32px 24px;
  font-size 16px;
  background-color #fafafa;
  display inline-block;
  width 240px;
  height 360px;
  box-shadow 6px 16px 1px rgba(0,0,0,.4), 4px 8px 1px rgba(0,0,0,.4) inset;
  background-position center 0;
  background-repeat no-repeat;
  background-size cover;
  &.small
    width 180px;
    height 270px;
</style>
