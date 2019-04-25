const common = {
  state: {
    isCollapse: false
  },
  actions: {},
  mutations: {
    SET_COLLAPSE: (state) => {
      state.isCollapse = !state.isCollapse
    }
  }
}

export default common
