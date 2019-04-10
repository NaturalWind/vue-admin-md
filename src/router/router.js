import Vue from 'vue'
import VueRouter from 'vue-router'
import PageRouter from './page'

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

Router.addRoutes([...PageRouter])

export default Router
