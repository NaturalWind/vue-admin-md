<template>
  <div class="md-sidebar-frame">
    <div class="sidebar-top">
      <div class="title-or-logo">vue-admin-md</div>
    </div>
    <el-scrollbar class="sidebar-center">
      <div class="tip" v-if="false">暂无菜单!</div>
      <el-menu
        class="el-menu-vertical-demo"
        unique-opened
        :collapse="isCollapse">
        <sidebar-item
          :menu="menu">
        </sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
// vuex
import { mapGetters } from 'vuex';
// 组件
import SidebarItem from './SidebarItem';

export default {
  name: 'sidebar',
  components: {
    SidebarItem
  },
  computed: {
    ...mapGetters([
      'isCollapse',
      'menu'
    ])
  },
  created () {
    this.getInitData();
  },
  methods: {
    getInitData () {
      this.$store.dispatch('GetMenu').then(data => {
        this.$router.$mdRouter.formatRoutes(data, [], data[data.length - 1])
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.md-sidebar-frame {
  position: relative;
  width: 100%;
  height: 100%;
  background: wheat;
  .sidebar-top {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 64px;
    background: goldenrod;
    .title-or-logo {
      font-size: 23px;
      text-align: center;
      background: cadetblue;
    }
  }
  .sidebar-center {
    position: relative;
    width: 100%;
    height: calc(100% - 64px);
    background: cornflowerblue;
    .tip {
      position: absolute;
      top: calc(50% - 12px);
      bottom: calc(50% - 12px);
      font-size: 20px;
      text-align: center;
      width: 100%;
    }
  }
}
</style>
