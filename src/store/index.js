import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import websocket from './modules/websocket'
import common from './modules/common'
import tags from './modules/tags'
import logs from './modules/logs'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    websocket,
    common,
    tags,
    logs
  },
  getters
})

export default store
