import { App } from "vue";
import getSwitchingTime from "./switching-time";

export const globalProperties = {
  install(app: App) {
    app.use(getSwitchingTime);
  }
};
