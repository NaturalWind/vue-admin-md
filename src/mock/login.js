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
    message: 'success',
    data: [
      {
        parentId: -1, // 父节点Id
        id: 100, // 节点Id
        type: '0', // 类型 0 菜单 1 按钮
        sort: 1, // 排序
        icon: 'iconapple-fill', // 图标
        label: '系统管理', // 名称
        name: '系统管理', // 名称
        path: '/system', // 地址 如果为 http、https 开头则采用ifrom isJump字段判断是否跳转出去
        component: 'Layout', // 组件
        keepAlive: false, // 是否缓存页面
        showParentMenu: true, // 是否显示父菜单
        isJump: false, // 外链是否跳转
        children: [] // 子项
      },
      {
        parentId: -1, // 父节点Id
        id: 200, // 节点Id
        type: '0', // 类型 0 菜单 1 按钮
        sort: 2, // 排序
        icon: 'icontags', // 图标
        label: '权限管理', // 名称
        name: '权限管理', // 名称
        path: '/permissions', // 地址 如果为 http、https 开头则采用ifrom isJump字段判断是否跳转出去
        component: 'Layout', // 组件
        keepAlive: false, // 是否缓存页面
        showParentMenu: true, // 是否显示父菜单
        isJump: false, // 外链是否跳转
        children: [
          {
            parentId: 200, // 父节点Id
            id: 201, // 节点Id
            type: '0', // 类型 0 菜单 1 按钮
            sort: 1, // 排序
            icon: 'iconapple-fill', // 图标
            label: '用户管理', // 名称
            name: '用户管理', // 名称
            path: '/user', // 地址 如果为 http、https 开头则采用ifrom isJump字段判断是否跳转出去
            component: 'views/permissionManagement/userManagement/index', // 组件
            keepAlive: false, // 是否缓存页面
            showParentMenu: true, // 是否显示父菜单
            isJump: false, // 外链是否跳转
            children: [] // 子项
          }
        ] // 子项
      },
      {
        parentId: -1, // 父节点Id
        id: 300, // 节点Id
        type: '0', // 类型 0 菜单 1 按钮
        sort: 3, // 排序
        icon: 'iconsmile', // 图标
        label: '百度ifrom', // 名称
        name: '百度ifrom', // 名称
        path: 'https://www.baidu.com/', // 地址 如果为 http、https 开头则采用ifrom isJump字段判断是否跳转出去
        component: null, // 组件
        keepAlive: true, // 是否缓存页面
        showParentMenu: true, // 是否显示父菜单
        isJump: false, // 外链是否跳转
        children: [] // 子项
      },
      {
        parentId: -1, // 父节点Id
        id: 400, // 节点Id
        type: '0', // 类型 0 菜单 1 按钮
        sort: 4, // 排序
        icon: 'iconsmile', // 图标
        label: '百度', // 名称
        name: '百度', // 名称
        path: 'http://element-cn.eleme.io/#/zh-CN/component/menu', // 地址 如果为 http、https 开头则采用ifrom isJump字段判断是否跳转出去
        component: null, // 组件
        keepAlive: true, // 是否缓存页面
        showParentMenu: true, // 是否显示父菜单
        isJump: true, // 外链是否跳转
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
