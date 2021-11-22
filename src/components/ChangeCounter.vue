<template>
  <div>
    <button @click="increment">add 1</button>
    <button @click="incrementBy">add 10</button>
  </div>
  <div>
    Async
    <button @click="increment2">add 1 after 2 sec</button>
    <button @click="incrementBy2">add 10 after 2 sec</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  methods: {
    // increment() {
    //   this.$store.commit("increment");
    // },
    ...mapMutations(["increment"]),
    incrementBy() {
      //   this.$store.commit("incrementBy", { value: 10 });
      this.$store.commit({
        type: "incrementBy",
        value: 10,
      });
    },
    // increment2() {
    //   this.$store.dispatch("incrementAfter2Sec");
    // },
    ...mapActions({
      increment2: "incrementAfter2Sec",
    }),
    incrementBy2() {
      //   this.$store.commit("incrementBy", { value: 10 });
      this.$store.dispatch({
        type: "incrementByAfter2Sec",
        value: 10,
      });
    },
  },
};
</script>
