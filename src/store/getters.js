const getters = {
  // user
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  roles: state => state.user.roles,
  permission: state => state.user.permission,
  menu: state => state.user.menu,
  // common
  isCollapse: state => state.common.isCollapse
}

export default getters
