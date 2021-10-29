<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="submit">new goal</button>
  <teleport to="body">
    <error-alert v-if="isError">
      <h2>Input is empty</h2>
      <p>Please enter valid text</p>
      <button @click="close">close</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: { ErrorAlert },
  data() {
    return {
      isError: false,
    };
  },
  methods: {
    submit() {
      const val = this.$refs.goal.value;
      if (val === "") {
        this.isError = true;
      }
    },
    close() {
      this.isError = false;
    },
  },
};
</script>
