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
      bindVal: "",
    };
  },
  watch: {
    /**
     * gets triggered when the counter value gets updated
     * @param {number} value last updated counter value
     */
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  computed: {
    /**
     * Gets triggered when one of the dependancies are updated
     */
    computedText() {
      console.log("computed value");
      if (this.text.length) {
        return `this is computed text ${this.text}`;
      }
      return "";
    },
  },
  methods: {
    inputHandler(event, secParam) {
      this.text = `from event ${event.target.value} ${secParam}`;
    },
    notComputedText() {
      console.log("not computed value");
      if (this.text.length) {
        return `this is computed text ${this.text}`;
      }
      return "";
    },
    bindHandler(event) {
      this.bindVal = event.target.value;
    },
    resetBind() {
      this.bindVal = "";
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
