import { createStore } from "vuex";
import { mentorsModule } from "./modules";

export default createStore({
  modules: { mentors: mentorsModule },
  state() {
    return {
      userId: "c3",
    };
  },
  mutations: {},
  actions: {},
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});
