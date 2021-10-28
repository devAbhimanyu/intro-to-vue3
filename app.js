const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Learning Vue 3",
      courseGoal2: "understanding Vue",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoal;
      } else {
        return this.courseGoal2;
      }
    },
  },
});

app.mount("#user-goal");

const eventApp = Vue.createApp({
  data() {
    return {
      counter: 0,
      addBy: 10,
      reduceBY: 5,
      text: "",
      finalText: "",
    };
  },
  methods: {
    inputHandler(event, secParam) {
      this.text = `from event ${event.target.value} ${secParam}`;
    },
    consfirmedText() {
      this.finalText = this.text;
    },
    submitHandler() {
      alert("form submitted");
    },
    increment(num) {
      this.counter += num;
    },
    decrement(num) {
      this.counter -= num;
    },
  },
});

eventApp.mount("#events");
