const IS_PROD = process.env.NODE_ENV !== "development";
const fe1024base = IS_PROD
  ? "https://ai-bar.cn/fe1024-demo"
  : "http://127.0.0.1:63751/static";
console.log(333, fe1024base);
export const fe1024 = (path: string) => `${fe1024base}/games/${path}/`;
export const fe1024img = (path: string) => `${fe1024base}/games_img/${path}`;
