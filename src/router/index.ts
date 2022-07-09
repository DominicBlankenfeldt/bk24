import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Fenster from "../views/Fenster.vue";
import Tueren from "../views/Tueren.vue";
import Rollladen from "../views/Rollladen.vue";
import Extras from "../views/Extras.vue";
import Baustoffe from "../views/Baustoffe.vue";
import Datenschutz from "../views/Datenschutz.vue";
import Impressum from "../views/Impressum.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/fenster",
    name: "Fenster",
    component: Fenster,
  },
  {
    path: "/tueren",
    name: "Tueren",
    component: Tueren,
  },
  {
    path: "/rollladen",
    name: "Rollladen",
    component: Rollladen,
  },
  {
    path: "/zubehoer",
    name: "Zubehoer",
    component: Extras,
  },
  {
    path: "/baustoffe",
    name: "Baustoffe",
    component: Baustoffe,
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
