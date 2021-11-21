import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      counter: 1,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    incrementBy(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  // work as computed values
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    // first param is state
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 3) {
        return 0;
      }
      if (finalCounter > 100) return 100;
      return finalCounter;
    },
  },
});

const app = createApp(App);
app.use(store);

app.mount("#app");
