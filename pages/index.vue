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
import { defaultGames } from "@/pages/online/games/constant";

const games = ref(defaultGames());
</script>
