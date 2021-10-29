const app = Vue.createApp({
  template: `
  <h2>How Vue Works</h2>
  <input type="text" @input="saveInput" placeholder="with event">
  <input type="text" ref="userText" placeholder="with ref">
  <button @click="setText">Set Text</button>
  <p>{{ message }}</p>
  `,
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  created() {
    console.log("created hook called");
  },
  beforeCreate() {
    console.log("before create hook called");
  },
  beforeMount() {
    console.log("beforeMount hook called");
  },
  mounted() {
    console.log("mounted hook called");
  },
  beforeUpdate() {
    console.log("beforeUpdate hook called");
  },
  updated() {
    console.log("updated hook called");
  },
  beforeUnmount() {
    console.log("beforeUnmount hook called");
  },
  unmounted() {
    console.log("unmounted hook called");
  },

  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      console.dir(this.$refs.userText);
      this.message = this.$refs.userText.value;
    },
  },
});

app.mount("#app");
setTimeout(() => {
  app.unmount();
}, 3000);
