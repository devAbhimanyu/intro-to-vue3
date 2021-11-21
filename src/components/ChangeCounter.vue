<template>
  <button @click="increment">add 1</button>
  <button @click="incrementBy">add 10</button>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    incrementBy() {
      //   this.$store.commit("incrementBy", { value: 10 });
      this.$store.commit({
        type: "incrementBy",
        value: 10,
      });
    },
  },
};
</script>
