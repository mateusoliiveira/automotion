import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Simulate from "../views/Simulate.vue";
import LocationStore from "../views/LocationStore.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sobre",
    name: "About",
    component: About,
  },
  {
    path: "/simule",
    name: "Simulate",
    component: Simulate,
  },
  {
    path: "/onde",
    name: "LocationStore",
    component: LocationStore,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
