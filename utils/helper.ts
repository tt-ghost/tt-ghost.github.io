const IS_PROD = process.env.NODE_ENV !== "development";
const fe1024base = IS_PROD
  ? "https://ai-bar.cn/fe1024-demo"
  : "http://127.0.0.0:63751/static";

export const fe1024 = (path: string) => `${fe1024base}/games/${path}/`;
export const fe1024img = (path: string) => `${fe1024base}/games_img/${path}`;

export const debounce = <T extends (...args: any[]) => unknown>(
  callback: T,
  delay = 250
): ((...args: Parameters<T>) => void) => {
  let timeoutId: any;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
};
