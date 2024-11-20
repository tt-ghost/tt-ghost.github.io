<template>
  <div class="fe-search">
    <a-input-search
      size="large"
      placeholder="search"
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
  --fe-search-color: #ccc;
  min-width: 200px;
  max-width: 600px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  .arco-input-wrapper {
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.2),
      2px 2px 5px rgba(0, 0, 0, 0.05) inset;
    border-radius: 30px;

    .arco-input.arco-input-size-large {
      font-size: 16px;
      padding: 8px 0 8px 4px;
      color: var(--fe-search-color);
      &:focus {
        border-image: linear-gradient(to right, #8f41e9, #578aef) 1;
      }
    }
    .arco-input-suffix {
      font-size: 18px;
      color: var(--fe-search-color);
    }
  }
}
</style>
