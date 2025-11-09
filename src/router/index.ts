import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/index'

import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
Nprogress.configure({ showSpinner: false })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/Login/Login_index.vue'),
      meta: { title: '登录' },
    },
    {
      path: '/',
      component: () => import('@/views/Layout/Layout_index.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: () => import('@/views/Home/Home_index.vue'),
          meta: { title: '首页' },
        },
        {
          path: '/article',
          component: () => import('@/views/Article/Article_index.vue'),
          meta: { title: '健康百科' },
        },
        {
          path: '/notify',
          component: () => import('@/views/Notify/Notify_index.vue'),
          meta: { title: '消息通知' },
        },
        {
          path: '/user',
          component: () => import('@/views/User/User_index.vue'),
          meta: { title: '个人中心' },
        },
      ],
    },
  ],
})
// 访问权限控制
router.beforeEach((to) => {
  Nprogress.start()
  // 用户仓库
  const store = useUserStore()
  // 不需要登录的页面，白名单
  const wihteList = ['/login']
  // 如果没有登录且不在白名单内，去登录
  if (!store.user?.token && !wihteList.includes(to.path)) {
    console.log('未登录，去登录')
    return '/login'
  }

  // 否则不做任何处理
})
router.afterEach((to) => {
  document.title = `${to.meta.title || ''}-优医问诊`
  Nprogress.done()
})

export default router
