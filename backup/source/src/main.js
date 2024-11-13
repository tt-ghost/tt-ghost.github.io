import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import Fe from "./components";
import "./styles/main.styl";

createApp(App).use(router).use(Fe).mount("#app");
