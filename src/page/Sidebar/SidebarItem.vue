<template>
  <div class="md-sidebar-item-frame">
    <template v-for="item in menu">
      <!-- 一层 -->
      <el-menu-item
        :index="item.path"
        :key="item.name + item.path"
        v-if="!item.children.length"
        @click="clickMenuIten(item)">
        <!-- iconfont 后面有空格 -->
        <i :class="'iconfont ' + item.icon"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
      <!-- 多层 -->
      <el-submenu :index="item.path" :key="item.name + item.path" v-if="item.children.length">
        <template slot="title">
          <!-- iconfont 后面有空格 -->
          <i :class="'iconfont ' + item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </template>
        <sidebar-item :menu="item.children"></sidebar-item>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: 'sidebarItem',
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    clickMenuIten (item) {
      console.log('当前点击菜单：', item);
      this.$router.push({
        path: item.path
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.md-sidebar-item-frame {
  position: relative;
  width: 100%;
  height: 100%;
  background: chocolate;
}
</style>
