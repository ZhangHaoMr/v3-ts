import { switching } from "@/utils/data-format";
import { App } from "vue";

export default function getSwitchingTime(app: App) {
  app.config.globalProperties.$filter = {
    switchingTime(value: string) {
      return switching(value);
    }
  };
}
