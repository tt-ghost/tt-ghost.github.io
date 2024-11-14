<template>
  <a-layout class="fe-layout-default">
    <a-layout-header class="fe-layout-default-header">
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
    </a-layout-header>
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

const onMenuClick = (key) => {
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

  &-body {
    min-height: 500px;
    padding: 32px;
  }

  &-footer {
    text-align: center;
    color: #666;
  }
}
</style>
