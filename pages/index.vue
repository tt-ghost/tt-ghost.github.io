<template>
  <div class="fe-home">
    <a-card class="fe-home-game" title="游戏" :bordered="false">
      <template #extra>
        <a-link href="/online/games">查看更多</a-link>
      </template>
      <a-row :gutter="20">
        <a-col
          v-for="(game, key) in games"
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
                  :src="game.cover"
                />
              </div>
            </template>
            <a-card-meta>
              <template #title>
                <div style="position: relative; padding: 8px 0">
                  <span>{{ game.title }}</span>
                  <nuxt-link
                    :to="game.url"
                    target="_blank"
                    style="
                      position: absolute;
                      right: 0;
                      top: 2px;
                      font-weight: normal;
                    "
                  >
                    <a-button type="text">去玩玩</a-button>
                  </nuxt-link>
                </div>
              </template>
              <template #description>
                <a-descriptions :column="1">
                  <a-descriptions-item label="Github">
                    <a-link target="_blank" :href="game.repository">
                      {{ game.name }}
                    </a-link>
                  </a-descriptions-item>
                  <a-descriptions-item label="License">
                    {{ game.license }}
                  </a-descriptions-item>
                </a-descriptions>
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const games = ref([
  {
    title: "Clumsy Bird",
    name: "Clumsy Bird",
    url: "/online/games/clumsy-bird",
    repository: "https://github.com/ellisonleao/clumsy-bird",
    license: "GPL-3.0",
    cover:
      "https://camo.githubusercontent.com/569c991e0b382d1bdee15327f2cd691680dd0a839b27d01814d36b68d99d9b2c/687474703a2f2f692e696d6775722e636f6d2f536c62767436352e706e67",
  },
  {
    title: "2048",
    name: "2048",
    type: "static", // 通过静态资源访问
    url: "/_online/games/2048/",
    repository: "https://github.com/gabrielecirulli/2048",
    license: "MIT",
    cover:
      "https://cloud.githubusercontent.com/assets/1175750/8614312/280e5dc2-26f1-11e5-9f1f-5891c3ca8b26.png",
  },
]);
</script>
