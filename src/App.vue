<template>
  <div>
    <Header />
    <button @click="updatedSelected('active-goals')">active</button>
    <button @click="updatedSelected('manage-goals')">manage</button>
    <!-- <active-goals v-if="selectedComp === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComp === 'manage-goals'"></manage-goals> -->
    <!-- without keep-alive state is lost when component is changed -->
    <keep-alive>
      <component :is="selectedComp"> </component>
    </keep-alive>
  </div>
</template>

<script>
import Header from "./components/TheHeader.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  /**
   * local component reg
   */
  components: {
    Header,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComp: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    updatedSelected(compName) {
      this.selectedComp = compName;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
