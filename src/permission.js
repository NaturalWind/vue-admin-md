import router from './router/router'
import store from './store'
import { validateNull } from '@/util/validate'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  showSpinner: false
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (store.getters.token) {
    if (to.path === '/login') {
      next({
        path: '/'
      })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetUserInfo').then(() => {
          next({
            ...to,
            replace: true
          })
        }).catch(() => {
          store.dispatch('FedLogOut').then(() => {
            next({ path: '/login' })
          })
        })
      } else {
        let label = to.name
        let path = to.fullPath
        if (to.meta.isTab !== false &&
            !validateNull(label) &&
            !validateNull(path)) {
          store.commit('ADD_TAG', {
            label: label,
            path: path,
            params: to.params,
            query: to.query
          })
        }
        next()
      }
    }
  } else {
    if (to.meta.isAuth === false) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
