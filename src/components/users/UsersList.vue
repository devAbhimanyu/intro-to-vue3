<template>
  <button @click="confirmInput">confirm</button>
  <button @click="save">save</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  components: {
    UserItem,
  },
  inject: ["users"],
  data() {
    return {
      saved: false,
    };
  },
  methods: {
    confirmInput() {
      //some logic and then navigate to some route
      this.$router.push("/teams");
      // this.$router.back()
    },
    save() {
      this.saved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    // acts as a route guard
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from);
    if (this.saved) next();
    else {
      const bool = confirm("Do you realy want to leave");
      if (bool) next();
    }
  },
  unmounted() {
    console.log("userlist has been unmounted");
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
