import { createStore } from "vuex";
import conterModule from "./counter";

const store = createStore({
  // like combine reducers
  modules: {
    numbers: conterModule,
  },
  state() {
    return { isLoggedIn: false };
  },
  mutations: {},
  actions: {},
  // work as computed values
  getters: {
    fCounter() {
      return 10;
    },
  },
});

export default store;
