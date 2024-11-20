<template>
  <a-list
    :grid-props="{ gutter: [20, 20], xs: 24, sm: 12, md: 6, lg: 6, xl: 4 }"
    :data="list"
    :bordered="false"
  >
    <template #item="{ item }">
      <a-list-item
        class="fe-card-items-item"
        :style="`background-image: url(${item.cover})`"
      >
        <a
          :href="getUrl(item, 'name')"
          target="_blank"
          class="fe-card-items-item-link"
        >
          GO
        </a>
        <div class="fe-card-items-item-text">
          <h3 class="fe-card-items-item-title">{{ item.title }}</h3>
        </div>
        <span v-if="item.license" class="fe-card-items-item-license">
          {{ item.license }}
        </span>
        <span v-if="item.repository" class="fe-card-items-item-repo">
          <icon-github />
        </span>
      </a-list-item>
    </template>
  </a-list>
</template>
<script setup lang="ts">
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  title: {
    type: String,
    default: "",
  },
  moreLink: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "game",
  },
});
const urlMap: any = {
  game: "/online/games/",
  crm: "/online/crm/",
};
const getUrl = (item: any, prop: string) => {
  if (item[prop] && /^http/.test(item[prop])) return item[prop];

  const baseUrl = urlMap[props.type];
  if (!baseUrl) return "";

  return baseUrl + item[prop];
};
</script>
<style lang="less">
.fe-card-items {
  margin-bottom: 16px;
  &-item {
    height: 120px;
    border-radius: 9px;
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.3s ease all;
    background-size: 150%;
    color: #fff;
    position: relative;
    box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.1),
      5px 3px 8px rgba(0, 0, 0, 0.05) inset;
    &:hover {
      background-size: 200%;
      box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.2),
        5px 3px 8px rgba(0, 0, 0, 0.2) inset;
      .fe-card-items-item-text,
      .fe-card-items-item-repo,
      .fe-card-items-item-license {
        opacity: 1;
      }
    }
    &-repo {
      transition: 0.3s ease all;
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 18px;
      opacity: 0.3;
    }
    &-license {
      transition: 0.3s ease all;
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 12px;
      opacity: 0.3;
      font-weight: bold;
    }
    &-link {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      text-decoration: none;
      color: rgba(0, 0, 0, 0);
    }
    &-text {
      transition: 0.3s ease all;
      opacity: 0.3;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 8px;
      background-color: rgba(0, 0, 0, 0.8);
    }
    &-title {
      margin: 0;
      font-size: 15px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
