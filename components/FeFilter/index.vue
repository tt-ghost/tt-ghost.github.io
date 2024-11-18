<template>
  <div class="fe-filter">
    <div class="fe-filter-colorful">
      <div
        class="fe-filter-item fe-filter-colorful-item"
        :class="`fe-filter-colorful-${item.color}`"
        v-for="item in colorfulItems"
        :key="item.value"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="fe-filter-client">
      <div
        class="fe-filter-item fe-filter-client-item"
        :class="`fe-filter-colorful-${item.color}`"
        v-for="item in licenseItems"
        :key="item.value"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const colorfulItems = ref([
  { label: "竞技", value: "jingji", color: "1" },
  { label: "纸牌", value: "zhipai", color: "2" },
]);

const licenseItems = ref([
  { label: "MIT", value: "MIT", color: "3" },
  { label: "Apache-2.0", value: "Apache-2.0", color: "4" },
  { label: "GPL-3.0", value: "GPL-3.0", color: "5" },
]);
</script>
<style lang="less">
.fe-filter {
  &-item {
    user-select: none;
    // height: 40px;
    transition: box-shadow 0.2s,
      transform 0.35s cubic-bezier(0.215, 0.61, 0.355, 1),
      -webkit-transform 0.35s cubic-bezier(0.215, 0.61, 0.355, 1);
    display: inline-block;
    padding: 12px 18px;
    border-radius: 12px;
    margin: 0 5px 10px;
    font-size: 13px;
    font-weight: bold;
    line-height: 15px;
    margin: 0 0 0 7px;
    white-space: nowrap;
    &:hover {
      cursor: pointer;
      transform: translateY(-6px);
    }
  }
  &-colorful {
    &-item {
      color: #fff;
      &:hover {
      }
    }
    &-1 {
      background-color: #ff5b88;
      box-shadow: 0 8px 18px -8px rgba(255, 91, 136, 0.7);
    }
    &-2 {
      background-color: #cb7df6;
      box-shadow: 0 8px 18px -8px rgba(203, 125, 246, 0.7);
    }
    &-3 {
      background-color: #00c1d5;
      box-shadow: 0 8px 18px -8px rgba(0, 193, 213, 0.7);
    }
    &-4 {
      background-color: #d28558;
      box-shadow: 0 8px 18px -8px rgba(210, 133, 88, 0.7);
    }
    &-5 {
      background-color: #40c914;
      box-shadow: 0 8px 18px -8px rgba(64, 201, 20, 0.7);
    }
    &-6 {
      background-color: #50a9f9;
      box-shadow: 0 8px 18px -8px rgba(80, 169, 249, 0.7);
    }
    &-7 {
      background-color: #06d6af;
      box-shadow: 0 8px 18px -8px rgba(6, 214, 175, 0.7);
    }
    &-8 {
      background-color: #ffa300;
      box-shadow: 0 8px 18px -8px rgba(255, 163, 0, 0.7);
    }
    &-9 {
      background-color: #ff4a52;
      box-shadow: 0 8px 18px -8px rgba(255, 74, 82, 0.7);
    }
    &-10 {
      background-color: #8181ff;
      box-shadow: 0 8px 18px -8px rgba(129, 129, 255, 0.7);
    }
    &-11 {
      background-color: #85c716;
      box-shadow: 0 8px 18px -8px rgba(133, 199, 22, 0.7);
    }
  }
}
</style>
