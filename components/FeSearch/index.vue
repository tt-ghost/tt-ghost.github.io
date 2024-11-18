<template>
  <div class="fe-search">
    <a-input-search
      size="large"
      placeholder="请输入"
      v-model="keyword"
      @press-enter="onSearch"
      @search="onSearch"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const keyword = ref("");

defineProps({
  data: {
    type: Object,
    default: () => null,
  },
  src: {
    type: String,
    default: "",
  },
});

const onSearch = () => {
  console.log(keyword.value);
};
</script>
<style lang="less">
.fe-search {
  min-width: 300px;
  max-width: 600px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  .arco-input-wrapper {
    background-color: #fff;
    border-radius: 30px;
    .arco-input.arco-input-size-large {
      font-size: 16px;
      padding: 12px 0 12px 4px;
    }
    .arco-input-suffix {
      font-size: 18px;
    }
  }
}
</style>
