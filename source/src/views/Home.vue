<template lang="pug">
.fe-home-block
  .fe-home-block-inner
    .fe-home-block-left
      img(src='http://epage.didichuxing.com/assets/img/epage-main-iview.a2bbf507.png')
    .fe-home-block-right
      h3.fe-home-block-title
        a(href='/demos/epage/epage-iview' title='查看演示') Epage
      .fe-home-block-body
        p 一款基于schema的可视化页面配置工具
        p 安装 yarn add epage epage-core epage-iview
        p 仓库 
          a(href="https://github.com/didi/epage") Github

.fe-home-block(id='lipper01')
  .fe-home-block-inner
    .fe-home-block-left
      h3.fe-home-block-title
        a(href='/demos/lipper' title='查看演示') lipper
      .fe-home-block-body
        p 浏览器鼠标点击涟漪效果库
        p 安装 yarn add lipper
        p 仓库 
          a(href="https://github.com/tt-ghost/lipper") Github
    .fe-home-block-right
      .fe-home-block-right-lipper(id='lipper02') 涟漪

.fe-home-block
  .fe-home-block-inner
    .fe-home-block-left
      .fe-home-block-left-fc-btn(@click='onFullcreen') 全屏
      .fe-home-block-left-fc-btn(@click='onFullcreenExit') 退出全屏
    .fe-home-block-right
      h3.fe-home-block-title
        a(href='/demos/fullscreen' title='查看演示') Fullscreen.js
      .fe-home-block-body
        p 浏览器全屏操作JS库
        p 安装 yarn add fullscreen.js
        p 仓库 
          a(href="https://github.com/tt-ghost/fullscreen.js") Github

//- .fe-home-nav
//-   FePhotoFrame.fe-home-epage(:src="img" size='small')
//-     a.fe-photo-frame-title(href='/demos/epage/epage-iview') Epage
//-     .fe-photo-frame-body 一款基于schema的可视化页面配置工具
//-   FePhotoFrame.fe-home-calc(:src="img" size='small')
//-     a.fe-photo-frame-title(href='/demos/epage/awards') 计算器
//-     .fe-photo-frame-body 基于Epage搭建的计算器示例
//-   FePhotoFrame.fe-home-fullscreen(:src="img" size='small')
//-     a.fe-photo-frame-title(href='/demos/fullscreen') Fullscreen.js
//-     .fe-photo-frame-body 浏览器全屏操作库
//-   FePhotoFrame.fe-home-lipper(:src="img" size='small')
//-     a.fe-photo-frame-title(href='/demos/lipper') lipper
//-     .fe-photo-frame-body 


</template>

<script setup>
import lipper from "lipper";
import fullscreen from "fullscreen.js";
import { ref, onMounted } from "vue";
// import FePhotoFrame from "../components/FePhotoFrame.vue";
const img = ref("");
onMounted(() => {
  lipper.init({
    duration: 1.5,
    selector: ["#lipper01"],
    radius: 50,
    zindex: 1000,
    center: true,
    overflow: false,
    color: "#fdd800",
  });
});
console.log(22, fullscreen);
const onFullcreen = () => fullscreen.request();
const onFullcreenExit = () => fullscreen.exit();
</script>
