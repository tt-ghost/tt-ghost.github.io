<template lang="pug">
.fe-header
  .fe-header-left
    .fe-logo
      router-link(to='/')
        span.fe-logo-fe FE
        span.fe-logo-1024 1024
  .fe-header-right
    FeMenu
</template>
<script setup></script>
