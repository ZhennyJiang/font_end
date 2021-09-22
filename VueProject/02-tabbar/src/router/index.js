import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../views/home/Home");
const Shopping = () => import("../views/shopping/Shopping");
const Profile = () => import("../views/profile/Profile");
const Setting = () => import("../views/setting/Setting");

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/shopping",
    name: "Shopping",
    component: Shopping,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/setting",
    name: "Setting",
    component: Setting,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
