import { createStore } from "vuex";
import { mentorsModule, requestsModule } from "./modules";

export default createStore({
  modules: {
    mentors: mentorsModule,
    requests: requestsModule,
  },
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
