import { Module } from "vuex";
import { IStorState } from "../type";
import { ILoginState } from "./type";
import LocalCache from "@/utils/cache";
import { AccountLoginPost, getMenus, getUserInfo } from "@/api/login";
import { LoginAccount } from "@/api/login/type";
import router from "@/router";
import { MenuRouterAdd } from "@/utils/router-menu";

const loginModule: Module<ILoginState, IStorState> = {
  namespaced: true,
  state: {
    token: "",
    userInfo: {},
    userMenu: []
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
      const routers = MenuRouterAdd(menus);
      // console.log("routers", routers);

      routers.forEach((route) => {
        router.addRoute("home", route);
      });
    }
  },
  actions: {
    async accountLoginActions({ commit }, data: LoginAccount) {
      try {
        // 调用登录接口
        const loginResult = await AccountLoginPost(data);
        // console.log("loginResult", loginResult.data);
        // 结构 id token
        const { id, token } = loginResult.data;
        // 调用 方法
        commit("storeToken", token);
        LocalCache.setCache("token", token);
        // 调用 用户信息接口
        const userInfo = await getUserInfo(id);
        // 调用 菜单接口
        const userMenu = await getMenus(id);
        commit("storeUserInfo", userInfo.data);
        commit("storeMenus", userMenu.data);

        LocalCache.setCache("userInfo", userInfo.data);
        LocalCache.setCache("userMenu", userMenu.data);
        router.push("/");
      } catch (e) {
        console.log(e);
      }
    },
    getLogin({ commit }) {
      const token = LocalCache.getCache("token");
      if (token) commit("storeToken", token);

      const userInfo = LocalCache.getCache("userInfo");
      if (userInfo) commit("storeUserInfo", userInfo);

      const userMenu = LocalCache.getCache("userMenu");
      if (userMenu) commit("storeMenus", userMenu);
    }
  },
  modules: {}
};
export default loginModule;
