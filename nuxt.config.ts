// https://nuxt.com/docs/api/configuration/nuxt-config

import games from "./utils/games";

const prodScripts = [
  {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=UA-62287374-3",
  },
  {
    innerHTML: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-62287374-3');
    `,
  },
  {
    innerHTML: `
     var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?0509dafa02041a5f317e72172d0d10bf";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
     `,
  },
];
const script = process.env.NODE_ENV === "production" ? prodScripts : [];

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0",
    port: 8010,
  },
  app: {
    head: {
      title: "在线游戏|在线示例|FE1024",
      meta: [
        {
          name: "description",
          content: "FE1024 在线游戏|在线示例|网页游戏|开源",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          // href: "https://unpkg.com/@arco-design/web-vue@2.56.3/dist/arco.min.css",
          href: "https://cdn.fe1024.com/webstatic/libs/@arco-design/web-vue@2.56.3/arco.min.css",
        },
      ],
      script,
    },
  },
  generate: {
    routes: games().map((item: any) => `/online/games/${item.name}`),
  },
});
