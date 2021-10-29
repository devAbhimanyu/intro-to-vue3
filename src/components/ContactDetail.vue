<template>
  <li>
    <h2>{{ name }} {{ favorite ? "(Fav)" : "" }}</h2>
    <button @click="toggleFav">{{ !favorite ? "add" : "rem" }} fav</button>
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
  //   props: ["name", "phoneNumber", "email", "isFav"],
  props: {
    name: String,
    phoneNumber: Number,
    email: { type: String, required: true },
    isFav: {
      type: Boolean,
      required: false,
      default: false,
      //   validator(value) {
      //     if (typeof value !== "boolean") {
      //       console.log("the type is invalid");
      //       return false;
      //     }
      //     return true;
      //   },
    },
  },
  data() {
    return {
      showContact: false,
      favorite: this.isFav,
    };
  },
  methods: {
    toggleContact() {
      this.showContact = !this.showContact;
    },
    toggleFav() {
      this.favorite = !this.favorite;
    },
  },
};
</script>
