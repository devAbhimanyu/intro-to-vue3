const conterModule = {
  namespaced: false,
  // state inside a module is treated as a local state
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
  actions: {
    incrementAfter2Sec(context) {
      setTimeout(() => {
        context.commit("increment");
      }, 2000);
    },
    incrementByAfter2Sec(context, payload) {
      setTimeout(() => {
        context.commit("incrementBy", payload);
      }, 2000);
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
    globalCounter(_, getters, rootState, rootGetters) {
      if (rootState.isLoggedIn) {
        console.log("is logged in");
      } else {
        console.log("not logged in");
        const fcount = rootGetters.fCounter;
        const finalCounter = getters.finalCounter;
        return fcount + finalCounter;
      }
    },
  },
};
export default conterModule;
