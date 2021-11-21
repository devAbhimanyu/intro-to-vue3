<template>
  <p>triple of counter is {{ cubeCounter }}</p>
  <p>normalized counter is {{ normCounter }}</p>
</template>

<script>
export default {
  computed: {
    cubeCounter() {
      return this.$store.getters.finalCounter;
    },
    normCounter() {
      return this.$store.getters.normalizedCounter;
    },
  },
};
</script>
