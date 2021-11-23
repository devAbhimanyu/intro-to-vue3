import { createStore } from "vuex";
import { mentorsModule } from "./modules";

export default createStore({
  modules: { mentors: mentorsModule },
  state: {},
  mutations: {},
  actions: {},
});
