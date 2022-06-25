<template lang="pug">
.fe-header
  .fe-header-left
    .fe-logo
      span.fe-logo-fe FE
      span.fe-logo-1024 1024
  .fe-header-right
    FeMenu
</template>
<script setup></script>
<style lang="styl">
.fe-header
  max-width 1440px;
  margin-left auto;
  margin-right auto;
  padding-left 16px;
  height 108px;
  line-height 60px;
  position relative;
  &-left
    display inline-block;
    min-width 200px
  &-right
    position absolute;
    right 0;
    top 48px;
.fe-logo
  display inline-block;
  padding 48px 16px 0;
  font-size 24px;
  background-color #333;
  color #fafafa;
  font-weight 300;
  &-fe
    color #ffd800;
</style>
