import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
// 组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 样式
import './styles/index.scss'
// 数据模拟
import './mock'
// iconfont
import { iconfontUrl, iconfontVersion } from '@/config/env'
// 工具
import { loadStyle } from './util/util'
// 权限控制
import './permission'

Vue.use(ElementUI)

Vue.config.productionTip = false

iconfontVersion.forEach(item => {
  loadStyle(iconfontUrl.replace('$key', item))
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
