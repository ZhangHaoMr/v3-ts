import { createStore } from "vuex";
import { IStorState } from "./type";
import loginModule from "./login";

export default createStore<IStorState>({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loginModule
  }
});
