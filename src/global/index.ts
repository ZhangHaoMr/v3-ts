import { App } from "vue";
import registerElement from "./register-element";
import registerIcon from "./register-icon";

export const globalRegister = {
  install(app: App) {
    app.use(registerElement);
    app.use(registerIcon);
  }
};
