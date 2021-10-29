<template>
  <li>
    <h2>{{ name }} {{ isFav ? "(Fav)" : "" }}</h2>
    <button @click="toggleFav">{{ !isFav ? "add" : "rem" }} fav</button>
    <button @click="toggleContact">
      {{ showContact ? "Hide" : "Show" }} Details
    </button>
    <button @click="$emit('delete', id)">Delete</button>
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
    id: {
      type: Number,
      required: true,
    },
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
  emits: ["toggle-fav", "delete"],
  //   emits: {
  //     "toggle-fav": function (id) {
  //       if (id) {
  //         return true;
  //       } else {
  //         console.warn("ID is missing in toggle-fav");
  //         return false;
  //       }
  //     },
  //   },
  data() {
    return {
      showContact: false,
      //   favorite: this.isFav,
    };
  },
  methods: {
    toggleContact() {
      this.showContact = !this.showContact;
    },
    toggleFav() {
      this.$emit("toggle-fav", this.id);
      //   this.favorite = !this.favorite;
    },
  },
};
</script>
