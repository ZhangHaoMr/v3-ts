import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store, { setupStore } from "./store";

// 引入样式文件
import "normalize.css";
import "@/assets/css/index.less";
import "element-plus/dist/index.css";

// 引入路由守卫
import "./guard";

// 引入 图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { globalProperties } from "./global";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(globalProperties);
app.use(store);
setupStore();
app.use(router);
app.mount("#app");
