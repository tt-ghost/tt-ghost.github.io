<template>
  <a-layout class="fe-layout-default">
    <!-- <a-layout-header class="fe-layout-default-header">
      <a-page-header :show-back="false">
        <template #title>
          <a-link style="font-size: 24px" to="/" :hoverable="false"
            >FE1024</a-link
          >
        </template>
        <template #subtitle>
          <a-menu
            mode="horizontal"
            :default-selected-keys="activeMenu"
            style="width: 400px"
            @menu-item-click="onMenuClick"
          >
            <a-menu-item key="/">
              <nuxt-link to="/" :hoverable="false">首页</nuxt-link>
            </a-menu-item>
            <a-menu-item key="/online/games">
              <nuxt-link to="/online/games" :hoverable="false">游戏</nuxt-link>
            </a-menu-item>
            <a-menu-item key="/online/cms" disabled>
              <span to="/online/cms" :hoverable="false">管理系统</span>
            </a-menu-item>
            <a-menu-item key="/online/tools" disabled>
              <span to="/online/tools" :hoverable="false">工具</span>
            </a-menu-item>
          </a-menu>
        </template>
        <template #extra></template>
      </a-page-header>
    </a-layout-header> -->

    <h1 class="fe-layout-default-logo">
      <span class="fe-layout-default-logo-text">FE1024</span>
    </h1>
    <a-layout-content class="fe-layout-default-body">
      <slot></slot>
    </a-layout-content>
    <a-layout-footer class="fe-layout-default-footer">
      <footer>
        <a-link :hoverable="false" href="https://fe1024.com">fe1024.com</a-link
        >©2024 开源项目在线展示
      </footer>
    </a-layout-footer>
  </a-layout>
</template>
<script setup lang="ts">
import { ref } from "vue";

const router = useRouter();
const route = useRoute();

console.log(route.path);
const activeMenu = ref([route.path || "/"]);

const onMenuClick = (key: any) => {
  console.log(32, key);
  activeMenu.value = [key];
  router.push(key);
};
</script>
<style lang="less">
.fe-layout-default {
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  .arco-page-header-divider {
    display: none;
  }
  &-logo {
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    color: #e5e5e5;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    &-text {
      background-image: linear-gradient(to right, #3593ff, #d149ff);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  &-body {
    min-height: 500px;
    padding: 32px 16px;
  }

  &-footer {
    text-align: center;
    color: #666;
  }
}
</style>
