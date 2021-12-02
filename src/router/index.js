import { createRouter, createWebHistory } from "vue-router";
import MentorList from "../views/mentors/MentorList.vue";
import NotFound from "../views/NotFound.vue";
import store from "../store";

const MentorDetail = () => import("../views/mentors/MentorDetail.vue");
const MentorRegister = () => import("../views/mentors/MentorRegister.vue");
const ContactCoach = () => import("../views/requests/ContactCoach.vue");
const RequestsReceived = () => import("../views/requests/RequestsReceived.vue");
const UserAuth = () => import("../views/auth/UserAuth");

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
