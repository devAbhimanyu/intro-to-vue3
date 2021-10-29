<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleContact">
      {{ showContact ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="showContact">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "ContactDetail",
  props: ["name", "phoneNumber", "email"],
  data() {
    return {
      showContact: false,
      friend: {},
    };
  },
  methods: {
    toggleContact() {
      this.showContact = !this.showContact;
    },
  },
};
</script>
