// https://nuxt.com/docs/api/configuration/nuxt-config

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
  app: {
    head: {
      title: "在线游戏|在线示例|FE1024",
      meta: [
        {
          name: "description",
          content: "FE1024 在线游戏|在线示例|网页游戏|开源",
        },
      ],
      script,
    },
  },
});
