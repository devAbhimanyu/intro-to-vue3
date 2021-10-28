const app = Vue.createApp({
  data() {
    return {
      newGoal: "",
      goals: [],
      obj: {
        name: "abc",
        age: 22,
      },
    };
  },
  methods: {
    addNewGoal() {
      this.goals.push(this.newGoal);
      this.newGoal = "";
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
