import { createStore } from "vuex";
import { mentorsModule, requestsModule, authModule } from "./modules";

export default createStore({
  modules: {
    mentors: mentorsModule,
    requests: requestsModule,
    auth: authModule,
  },
});
