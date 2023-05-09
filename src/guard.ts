import router from "./router";
import localCache from "@/utils/cache";
import { filstMenu } from "@/utils/router-menu";

router.beforeEach((to) => {
  const token = localCache.getCache("token");
  if (to.path !== "/login") {
    if (!token) {
      return "/login";
    }
  }
  if (to.path === "/home") {
    if (filstMenu) return filstMenu;
  }
});
