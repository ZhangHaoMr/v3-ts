import { createStore } from "vuex";
import { IStorState } from "./type";
import loginModule from "./login";

const store = createStore<IStorState>({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loginModule
  }
});
export default store;

export function setupStore() {
  store.dispatch("loginModule/getLogin");
}
