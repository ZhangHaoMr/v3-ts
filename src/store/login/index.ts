import { Module } from "vuex";
import { IStorState } from "../type";
import { ILoginState } from "./type";
import LocalCache from "@/utils/cache";
import { AccountLoginPost, getMenus, getUserInfo } from "@/api/login";
import { LoginAccount } from "@/api/login/type";
import router from "@/router";

const loginModule: Module<ILoginState, IStorState> = {
  namespaced: true,
  state: {
    token: LocalCache.getCache("token") ?? "",
    userInfo: LocalCache.getCache("userInfo") ?? {},
    userMenu: LocalCache.getCache("userMenu") ?? []
  },
  getters: {},
  mutations: {
    storeToken(state, token) {
      state.token = token;
    },
    storeUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    storeMenus(state, menus) {
      state.userMenu = menus;
    }
  },
  actions: {
    async accountLoginActions({ commit }, data: LoginAccount) {
      try {
        // 调用登录接口
        const loginResult = await AccountLoginPost(data);
        console.log("loginResult", loginResult.data);

        // 结构 id token
        const { id, token } = loginResult.data;
        // 调用 用户信息接口
        const userInfo = await getUserInfo(id);
        // 调用 菜单接口
        const userMenu = await getMenus(id);

        // 存储
        LocalCache.setCache("token", token);
        LocalCache.setCache("userInfo", userInfo.data);
        LocalCache.setCache("userMenu", userMenu.data);
        // 调用 方法
        commit("storeToken", token);
        commit("storeUserInfo", userInfo.data);
        commit("storeMenus", userMenu.data);

        router.push("/");
      } catch (e) {
        console.log(e);
      }
    }
  },
  modules: {}
};
export default loginModule;
