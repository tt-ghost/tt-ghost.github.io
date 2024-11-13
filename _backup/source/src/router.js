import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("./views/Home.vue") },
  { path: "/tech", name: "tech", component: () => import("./views/Tech.vue") },
  {
    path: "/photo",
    name: "photo",
    component: () => import("./views/Photo.vue"),
  },
  {
    path: "/article",
    name: "article",
    component: () => import("./views/Article.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
