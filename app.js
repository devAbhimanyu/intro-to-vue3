const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Learning Vue 3",
      vueLink: "https://vuejs.org/",
    };
  },
});

app.mount("#user-goal");
