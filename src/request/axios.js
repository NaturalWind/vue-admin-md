import axios from 'axios'
import store from '@/store'
import router from '@/router/router'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 超时时间
axios.defaults.timeout = 30000
// 返回状态码
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500
}

NProgress.configure({
  showSpinner: false
})

// HTTPrequest拦截
axios.interceptors.request.use(config => {
  NProgress.start()

  let token =  store.getters.token
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
}, error => {
  return Promise.reject(error)
})
// HTTPresponse拦截
axios.interceptors.response.use(res => {
  NProgress.done()

  let status = Number(res.status) || 200
  let message = res.data.message || '发生未知错误'
  if (status === 401) {
    store.dispatch('FedLogOut').then(() => {
      router.push({path: '/login'})
    })
    return
  }
  if (status !== 200) {
    Message({
      message: message,
      type: 'error'
    })
    return Promise.reject(new Error(message))
  }
  
  return res.data
}, error => {
  NProgress.done()
  return Promise.reject(new Error(error))
})

export default axios
