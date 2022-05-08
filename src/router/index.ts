import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import Shop from "../views/Shop.vue";
import Service from "../views/Service.vue";
import Datenschutz from "../views/Datenschutz.vue";
import Impressum from "../views/Impressum.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/service",
    name: "Service",
    component: Service,
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: Impressum,
  },
  {
    path: "/datenschutz",
    name: "Datenschutz",
    component: Datenschutz,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
