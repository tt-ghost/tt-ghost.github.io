<template>
  <div class="fe-search">
    <a-input-search
      size="large"
      placeholder="请输入"
      v-model="keyword"
      @press-enter="onSearch"
      @search="onSearch"
      @input="onInput"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { debounce } from "~/utils/helper";

const keyword = ref("");
const emit = defineEmits(["search"]);

const onSearch = () => {
  emit("search", keyword.value);
};
const onInput = debounce(onSearch, 300);
</script>
<style lang="less">
.fe-search {
  min-width: 200px;
  max-width: 600px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
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
