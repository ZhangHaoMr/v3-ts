import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入样式文件
import "normalize.css";
import "@/assets/css/index.less";
import "element-plus/dist/index.css";

// 按需 引入 element 组件
import { globalRegister } from "./global";

// 引入路由守卫
import "./guard";

const app = createApp(App);

app.use(globalRegister);
app.use(store).use(router).mount("#app");
