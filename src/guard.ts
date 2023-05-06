import router from "./router";
import localCache from "@/utils/cache";

router.beforeEach((to) => {
  const token = localCache.getCache("token");
  if (to.path !== "/login") {
    if (!token) {
      return "/login";
    }
  }
});
