import { createRouter, createWebHistory } from "vue-router";
import MentorDetail from "../views/mentors/MentorDetail.vue";
import MentorList from "../views/mentors/MentorList.vue";
import MentorRegister from "../views/mentors/MentorRegister.vue";
import ContactCoach from "../views/requests/ContactCoach.vue";
import RequestsReceived from "../views/requests/RequestsReceived.vue";
import NotFound from "../views/NotFound.vue";
import UserAuth from "../views/auth/UserAuth";
import store from "../store";

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
    props: true,
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
    meta: { requiresAuth: true },
  },
  {
    path: "/requests",
    name: "Requests",
    component: RequestsReceived,
    meta: { requiresAuth: true },
  },
  { path: "/auth", component: UserAuth, meta: { requiresUnauth: true } },
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

router.beforeEach(function (to, _, next) {
  // const r = store.getters.isAuthenticated;
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/mentors");
  } else {
    next();
  }
});

export default router;
