const getters = {
  // user
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  roles: state => state.user.roles,
  permission: state => state.user.permission
}

export default getters
