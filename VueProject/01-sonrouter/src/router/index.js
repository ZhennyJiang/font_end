import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");
const Home1 = () => import("../views/Home1.vue");
const Home2 = () => import("../views/Home2.vue");

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      // {
      //   path: "",
      //   redirect: "/home/home1",
      // },
      {
        path: "home1",
        name: "Home1",
        component: Home1,
      },
      {
        path: "home2",
        name: "Home2",
        component: Home2,
      },
    ],
    meta: {
      title: "首页",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "关于",
    },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
});
export default router;
