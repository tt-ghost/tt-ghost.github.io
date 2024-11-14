<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style lang="less">
html,
body {
  background-color: #f5f5f5;
}
body {
  .arco-menu {
    background-color: transparent;
    .arco-menu-item {
      &,
      &.arco-menu-disabled {
        background-color: transparent;
      }
    }
  }
}
</style>
