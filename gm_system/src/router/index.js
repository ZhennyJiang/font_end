import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import equip_management from "../components/admin/equip/equip_management.vue";
import equip_borrow from "../components/admin/equip/equip_borrow.vue";
import notice from "../components/admin/site/notice.vue";
import ordinary_site from "../components/admin/site/ordinary_site.vue";
import break_deal from "../components/admin/site/break_deal.vue";
import special_site from "../components/admin/site/special_site.vue";
import site from "../components/admin/site/site.vue";
import carousel from "../components/admin/site/carousel.vue";
import message from "../components/admin/site/message.vue";
import apply_equip from "../components/admin/equip/apply_equip.vue";
const routes = [
  {
    path: "/",
    redirect: "/Home",
  },
  {
    path: "/Home",
    component: Home,
    redirect: "notice",
  },
  {
    path: "/equip_management",
    name: "equip_management",
    component: equip_management,
  },
  {
    path: "/equip_borrow",
    name: "equip_borrow",
    component: equip_borrow,
  },
  {
    path: "/notice",
    name: "notice",
    component: notice,
  },
  {
    path: "/break_deal",
    name: "break_deal",
    component: break_deal,
  },
  {
    path: "/ordinary_site",
    name: "ordinary_site",
    component: ordinary_site,
  },
  {
    path: "/special_site",
    name: "special_site",
    component: special_site,
  },
  {
    path: "/site",
    name: "site",
    component: site,
  },
  {
    path: "/carousel",
    name: "carousel",
    component: carousel,
  },
  {
    path: "/message",
    name: "message",
    component: message,
  },
  {
    path: "/apply_equip",
    name: "apply_equip",
    component: apply_equip,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// //挂载路由导航守卫
// router.beforeEach((to,from,next)=>{
//   //to 将要访问
//   //from 从哪访问
//   //next 是否通行 next(url)重定向到url上,next()继续访问to路径
// });
export default router;
