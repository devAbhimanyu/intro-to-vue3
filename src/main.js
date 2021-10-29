import { createApp } from "vue";
import App from "./app/App.vue";
import ContactDetail from "./components/ContactDetail.vue";

const app = createApp(App);
app.component("contact-detail", ContactDetail);
app.mount("#app");
