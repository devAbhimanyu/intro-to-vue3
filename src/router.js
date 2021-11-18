import { createRouter, createWebHistory } from "vue-router";
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import UserItem from "./components/users/UserItem.vue";
import NotFound from "./components/nav/NotFound.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/teams" },
    {
      name: "team",
      path: "/teams",
      component: TeamsList,
      meta: { extrainfo: "can be used in the hooks for custom guards" },
    },
    // { path: "/teams", component: TeamsList, alias: "/" },
    {
      path: "/users",
      component: UsersList,
      beforeEnter(to, from, next) {
        console.log(to, from, next);
        // add guards here
        next();
      },
    },
    {
      name: "team-specific",
      path: "/teams/:teamId",
      component: TeamMembers,
      props: true,
    },
    { path: "/users/:userId", component: UserItem },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

// before each route happens
// router.beforeEach((to,from, next)=>{})

// router.afterEach((to, from) => {
//   // can be used for analytics
//   console.log(to, from);
// });

export default router;
