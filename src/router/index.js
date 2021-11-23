import { createRouter, createWebHistory } from "vue-router";
import MentorDetail from "../views/mentors/MentorDetail.vue";
import MentorList from "../views/mentors/MentorList.vue";
import MentorRegister from "../views/mentors/MentorRegister.vue";
import ContactCoach from "../views/requests/ContactCoach.vue";
import RequestsReceived from "../views/requests/RequestsReceived.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/mentors",
  },
  {
    path: "/mentors",
    name: "Mentors",
    component: MentorList,
  },
  {
    path: "/mentors/:id",
    component: MentorDetail,
    children: [
      {
        path: "contact",
        component: ContactCoach,
      },
    ],
  },
  {
    path: "/register",
    name: "Register",
    component: MentorRegister,
  },
  {
    path: "/requests",
    name: "Requests",
    component: RequestsReceived,
  },
  {
    path: "/:notFound(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
