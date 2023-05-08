import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/HomeView.vue"),
    children: [
      {
        path: "/main/analysis/dashboard",
        name: "/main/analysis/dashboard",
        component: () => import("@/views/main/analysis/dashboard.vue"),
        meta: {
          title: "分析表"
        }
      },
      {
        path: "/main/analysis/overview",
        name: "/main/analysis/overview",
        component: () => import("@/views/main/analysis/overview.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
