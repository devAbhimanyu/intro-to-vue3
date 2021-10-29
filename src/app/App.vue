<template>
  <header>
    <h1>Contacts List</h1>
  </header>
  <section id="app">
    <new-contact @add-new-contact="addContact"> </new-contact>
    <ul>
      <contact-detail
        v-for="f in contacts"
        :key="f.id"
        :id="f.id"
        :name="f.name"
        :phone-number="f.phone"
        :email="f.email"
        :is-fav="f.fav"
        @toggle-fav="toggleFavoriteStatus"
        @delete="deleteContact"
      ></contact-detail>
    </ul>
  </section>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      contacts: [
        {
          id: 100,
          name: "abc",
          phone: 10201,
          email: "@abcwhatmail.com",
          fav: false,
        },
        {
          id: 101,
          name: "def",
          phone: 1022301,
          email: "def@whatmail.com",
          fav: true,
        },
        { id: 102, name: "qwe", phone: 10132, email: "qwe@whatmail.com" },
      ],
      value: "App component",
      counter: 103,
    };
  },
  methods: {
    toggleFavoriteStatus(id) {
      // debugger;
      console.log(id);
      const selectedContact = this.contacts.find((f) => f.id === id);
      selectedContact.fav = !selectedContact.fav;
    },
    addContact(data) {
      this.counter++;
      const newContact = { id: this.counter, fav: false, ...data };
      this.contacts.push(newContact);
    },
    deleteContact(id) {
      this.contacts = this.contacts.filter((c) => c.id !== id);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
