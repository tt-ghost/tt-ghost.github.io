<template>
  <iframe
    frameborder="0"
    style="width: 100%; height: 100vh"
    src="https://cdn.fe1024.com/webstatic/fe1024/games/2048/index.html"
    noborder
  />
</template>
<script setup lang="ts">
import { onMounted } from "vue";

definePageMeta({
  layout: false,
});

const libs = [
  {
    name: "melonJS",
    type: "script",
    src: "https://ellisonleao.github.io/clumsy-bird/js/melonJS-min.js",
  },
  {
    name: "clumsy",
    type: "script",
    src: "https://ellisonleao.github.io/clumsy-bird/build/clumsy-min.js",
  },
];

const loadResource = async (src, type) => {
  return new Promise((resolve, reject) => {
    const ele = document.createElement(type);
    ele.onload = () => resolve();
    ele.onerror = (e) => reject(e);

    if (type === "script") {
      document.body.appendChild(ele);
      ele.src = src;
    } else if (type === "link") {
      document.head.appendChild(ele);
      ele.setAttribute("href", src);
      ele.setAttribute("rel", "stylesheet");
      ele.setAttribute("type", "text/css");
    }
  });
};
</script>
