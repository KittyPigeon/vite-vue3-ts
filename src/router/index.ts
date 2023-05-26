import { createRouter, createWebHistory } from 'vue-router';
let routes = [
  {
    path: '/',
    name: 'home',
    //使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
    component: () => import('../views/home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    //使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
    component: () => import('../views/login.vue'),
  },
];
// 路由
const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('userid') && to.name != 'login') {
    next({
      name: 'login',
    });
  } else {
    next();
  }
});
// 导出
export default router;
