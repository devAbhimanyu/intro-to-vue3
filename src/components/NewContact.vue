<template>
  <form @submit.prevent="submitHandler">
    <div class="in-Cont">
      <label for="Name"></label>
      Name: <input type="text" v-model="name" />
    </div>
    <div class="in-Cont">
      <label for="Phone"></label>
      Phone: <input type="tel" v-model="phone" />
    </div>
    <div class="in-Cont">
      <label for="Email"></label>
      Email: <input type="email" v-model="email" />
    </div>
    <button type="submit">Add Contact</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  emits: ["add-new-contact"],
  methods: {
    submitHandler() {
      this.$emit("add-new-contact", {
        name: this.name,
        phone: parseInt(this.phone),
        email: this.email,
      });
    },
  },
};
</script>

<style scoped>
.in-Cont {
  margin: 8px;
}
</style>
