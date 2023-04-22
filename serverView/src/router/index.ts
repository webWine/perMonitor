import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Performance from '../views/PerformanceView.vue'
const ErrorView = () => import("../views/ErrorView.vue")
const UserBehavior = () => import("../views/UserBehaviorView.vue")

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Performance',
    // chineseName:"性能面板",
    component: Performance
  },
  {
    path: '/errorView',
    name: 'errorView',
    component: ErrorView
  },
  {
    path: '/userBehavior',
    name: 'userBehavior',
    component: UserBehavior
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
