/* Vue and Vue Router Dependencies */
import Vue from "vue";
import Router from "vue-router";

/* Local Dependencies */
import Home from "../views/Home.vue";
import Start from "../components/Start.vue";
/* other pages will be lazy-loaded */


Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/stepper",
      name: "start",
      component: () => import("../views/Stepper.vue")
    },
    {
      path: "/history",
      name: "history",
      component: () => import("../views/History.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue")
      /* Lazy-Loaded route components via code-splitting*/
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/Admin.vue")
      /* Lazy-Loaded route components via code-splitting*/
    }
  ]
})
