import { createRouter, createWebHistory } from "vue-router";
import CoachDetail from "../views/coaches/CoachDetail.vue";
import CoachList from "../views/coaches/CoachList.vue";
import CoachRegister from "../views/coaches/CoachRegister.vue";
import ContactCoach from "../views/requests/ContactCoach.vue";
import RequestsReceived from "../views/requests/RequestsReceived.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/coaches",
  },
  {
    path: "/coaches",
    name: "Coaches",
    component: CoachList,
  },
  {
    path: "/coaches/:id",
    name: "Coach",
    component: CoachDetail,
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
    component: CoachRegister,
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
