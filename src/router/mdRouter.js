let RouterPlugin = function () {
  this.$router = null
  this.$store = null
}

RouterPlugin.install = function (router, store) {
  this.$router = router
  this.$store = store

  function checkMenu (currentMenuData, endMenuData) {
    for (let i = 0; i < endMenuData.length; i++) {
      if (currentMenuData.id === endMenuData[i].id && !endMenuData[i].children.length) {
        return true
      } else {
        checkMenu(currentMenuData, endMenuData[i].children)
      }
    }
    return false
  }

  this.$router.$mdRouter = {
    self: this,
    // 格式化路由
    formatRoutes: function (oldMenu = [], newMenu = [], endMenu = []) {
      let menu = JSON.parse(JSON.stringify(oldMenu))
      // 遍历
      for (let i = 0; i < menu.length; i++) {
        let item = JSON.parse(JSON.stringify(menu[i]))
        let menuItem = {
          path: item.path || '',
          name: item.name || '',
          component: resolve => require([item.component === 'Layout' ? '@/page/index/index.vue' : `@/${item.component}.vue`], resolve),
          meta: {
            keepAlive: item.keepAlive || false
          },
          children: []
        }
        newMenu.push(menuItem)
        // 存在子集继续遍历
        if (item.children.length) {
          this.formatRoutes(item.children, menuItem.children, endMenu)
        }
        // 是否执行完成
        let isStop = checkMenu(item, [endMenu]) || false
        if (isStop) {
          this.self.$router.addRoutes(newMenu)
        }
      }
    }
  }
}

export default RouterPlugin
