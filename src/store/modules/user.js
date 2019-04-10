// api
import { loginByUsername } from '@/api/login'
import { getUserInfo } from '@/api/user/user'

const user = {
  state: {
    token: '',
    userInfo: {},
    roles: [],
    permission: {}
  },
  actions: {
    LoginByUsername({ commit }, userInfo) {
      const parameter = {
        username: userInfo.username,
        password: userInfo.password
      }
      return new Promise((resolve) => {
        loginByUsername(parameter).then(res => {
          commit('SET_TOKEN', res.token)
          resolve()
        })
      })
    },
    GetUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(res => {
          commit('SET_USERINFO', res.data.userInfo)
          commit('SET_ROLES', res.data.roles)
          commit('SET_PERMISSION', res.data.permission)
          resolve()
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
        resolve()
      })
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_PERMISSION: (state, permission) => {
      state.permission = permission
    }
  }
}

export default user
