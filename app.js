const app = Vue.createApp({
  data() {
    return {
      friends: [
        { id: 100, name: "abc", phone: 10201, email: "@abcwhatmail.com" },
        { id: 101, name: "def", phone: 1022301, email: "def@whatmail.com" },
        { id: 102, name: "qwe", phone: 10132, email: "qwe@whatmail.com" },
      ],
    };
  },
});

app.component("contact-detail", {
  template: `
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleContact">Show Details</button>
    <ul>
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>`,
  data() {
    return {
      friend: {
        id: 100,
        name: "comp value",
        phone: 10201,
        email: "@abcwhatmail.com",
      },
      showContact: false,
    };
  },
  methods: {
    toggleContact() {
      this.showContact = !this.showContact;
    },
  },
});

app.mount("#app");
