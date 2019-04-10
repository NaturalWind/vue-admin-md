// import Layout from '@/page/index/index'

export default [
  {
    path: '/',//'/login',
    name: '登录页',
    component: () => import ('@/page/login/index'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  }
]
