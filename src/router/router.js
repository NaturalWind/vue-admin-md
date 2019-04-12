import Vue from 'vue'
import VueRouter from 'vue-router'
import PageRouter from './page'
import MDRouter from './mdRouter'
import Store from '../store/'

Vue.use(VueRouter)

let Router = new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  },
  routes: []
})

MDRouter.install(Router, Store)
Router.$mdRouter.formatRoutes(Store.state.user.menu, [], Store.state.user.menu[Store.state.user.menu.length - 1])
Router.addRoutes([...PageRouter])

export default Router
