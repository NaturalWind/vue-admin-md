const dataMap = {
  login: {
    code: 200,
    token: 'loginToken'
  },
  userInfo: {
    code: 200,
    message: 'success',
    data: {
      userInfo: {
        userId: 1,
        deptId: 1,
        username: 'admin',
        password: '$2a$10$QOfWxxFyAMmEEmnuw9UI/..1s4B4eF/u9PzE2ZaGO.ij9YfmcUy.u',
        type: '1',
        phone: '13045678900',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        delFlag: '0',
        lockFlag: '0'
      },
      permissions: [],
      roles: [1]
    }
  },
  menu: {
    code: 200,
    success: true,
    message: 'success',
    data: [
      {
        parentId: 1000, // 父节点Id
        id: 1100, // 节点Id
        type: '0', // 类型 0 菜单 1 按钮
        sort: 1, // 排序
        icon: 'icon-yonghuguanli', // 图标
        label: '用户管理', // 名称
        name: '用户管理', // 名称
        path: 'user', // 地址
        component: 'Layout', // 组件
        keepAlive: false, // 是否缓存页面
        showParentMenu: true, // 是否显示父菜单
        isJump: false, // 外链是否跳转
        children: [] // 子项
      }
    ]
  }
}

export default {
  loginByUsername: () => {
    return dataMap['login']
  },
  getUserInfo: () => {
    return dataMap['userInfo']
  },
  getMenu: () => {
    return dataMap['menu']
  }
}
