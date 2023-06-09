import { ref, defineEmits } from "vue";
import LocalCache from "@/utils/cache";
import router from "@/router";
// const router = useRouter();

const isShowIcon = ref<boolean>(false);

const emits = defineEmits(["isShowIcon"]);
const HandleIsShowIcon = () => {
  isShowIcon.value = !isShowIcon.value;
  emits("isShowIcon", isShowIcon.value);
};

// 退出登录
const logout = () => {
  LocalCache.clearCache();
  router.back();
};

const handleCommand = (k: string) => {
  switch (k) {
    case "logout":
      logout();
      break;

    case "info":
      break;

    case "changePassword":
      break;
  }
};

export { handleCommand, HandleIsShowIcon, isShowIcon };
