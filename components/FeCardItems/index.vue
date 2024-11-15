<template>
  <a-card class="fe-card-items" :title="title" :bordered="false">
    <template #extra>
      <a-link v-if="moreLink" :href="moreLink">查看更多</a-link>
    </template>
    <a-row :gutter="20">
      <a-col
        v-for="(item, key) in list"
        :md="12"
        :lg="10"
        :xl="8"
        :xxl="6"
        :style="{ marginBottom: '20px' }"
        :key="key"
      >
        <a-card hoverable :style="{ minWidth: '320px', maxWidth: '480px' }">
          <template #cover>
            <div
              :style="{
                height: '160px',
                overflow: 'hidden',
              }"
            >
              <img
                :style="{ width: '100%', transform: 'translateY(-20px)' }"
                :src="item.cover"
              />
            </div>
          </template>
          <a-card-meta>
            <template #title>
              <div style="position: relative; padding: 8px 0">
                <span>{{ item.title }}</span>
                <a-link
                  :href="item.url"
                  target="_blank"
                  style="
                    position: absolute;
                    right: 0;
                    top: 2px;
                    font-weight: normal;
                  "
                >
                  <a-button type="text">去玩玩</a-button>
                </a-link>
              </div>
            </template>
            <template #description>
              <a-descriptions :column="1">
                <a-descriptions-item label="Github">
                  <a-link target="_blank" :href="item.repository">
                    {{ item.name }}
                  </a-link>
                </a-descriptions-item>
                <a-descriptions-item label="License">
                  {{ item.license }}
                </a-descriptions-item>
              </a-descriptions>
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </a-card>
</template>
<script setup lang="ts">
defineProps({
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
});
</script>
<style>
.fe-card-items {
  margin-bottom: 16px;
}
</style>
