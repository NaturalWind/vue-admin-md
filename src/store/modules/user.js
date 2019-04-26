// api
import { loginByUsernameApi } from '@/api/login'
import { getUserInfoApi } from '@/api/user/user'
import { getMenuApi } from '@/api/user/menu'
// 工具
import { setStorage, getStorage } from '@/util/storage'

const user = {
  state: {
    token: getStorage({
      name: 'token',
      type: 'session'
    }) || '',
    userInfo: getStorage({
      name: 'userInfo',
      type: 'session'
    }) || {},
    roles: getStorage({
      name: 'roles',
      type: 'session'
    }) || [],
    permission: getStorage({
      name: 'permission',
      type: 'session'
    }) || {},
    menu: getStorage({
      name: 'menu',
      type: 'session'
    }) || []
  },
  actions: {
    LoginByUsername({ commit }, userInfo) {
      const parameter = {
        username: userInfo.username,
        password: userInfo.password
      }
      return new Promise((resolve) => {
        loginByUsernameApi(parameter).then(res => {
          commit('SET_TOKEN', res.token)
          resolve()
        })
      })
    },
    GetUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfoApi().then(res => {
          commit('SET_USERINFO', res.data.userInfo)
          commit('SET_ROLES', res.data.roles)
          commit('SET_PERMISSION', res.data.permission)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetMenu({ commit }) {
      return new Promise((resolve, reject) => {
        getMenuApi().then(res => {
          commit('SET_MENU', res.data)
          resolve(res.data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    FedLogOut({ commit }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        commit('SET_USERINFO', {})
        commit('SET_ROLES', [])
        commit('SET_PERMISSION', {})
        commit('SET_MENU', [])
        resolve()
      })
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      setStorage({
        name: 'token',
        content: state.token,
        type: 'session'
      })
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
      setStorage({
        name: 'userInfo',
        content: state.userInfo,
        type: 'session'
      })
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
      setStorage({
        name: 'roles',
        content: state.roles,
        type: 'session'
      })
    },
    SET_PERMISSION: (state, permission) => {
      state.permission = permission
      setStorage({
        name: 'permission',
        content: state.permission,
        type: 'session'
      })
    },
    SET_MENU: (state, menu) => {
      state.menu = menu
      setStorage({
        name: 'menu',
        content: state.menu,
        type: 'session'
      })
    }
  }
}

export default user
