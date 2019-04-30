<template>
  <div class="md-sidebar-frame">
    <div class="sidebar-top">
      <div class="title" v-show="!isCollapse">vue-admin-md</div>
      <i class="logo iconfont iconsmile" v-show="isCollapse"></i>
    </div>
    <el-scrollbar class="sidebar-center">
      <div class="tip" v-if="false">暂无菜单!</div>
      <el-menu
        class="el-menu-vertical-demo"
        unique-opened
        :collapse="isCollapse"
        :default-active="tag.path">
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
      'menu',
      'tag'
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
@import '@/styles/variables.scss';

.md-sidebar-frame {
  position: relative;
  box-shadow: 2px 0 6px rgba(0, 21, 41, .15);
  width: 100%;
  height: 100%;
  .sidebar-top {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 64px;
    color: $mainTextColor;
    background: $mainBg;
    .title {
      font-size: 23px;
      text-align: center;
    }
    .logo {
      font-size: 25px;
      text-align: center;
      width: 25px;
      height: 25px;
    }
  }
  .sidebar-center {
    position: relative;
    width: 100%;
    height: calc(100% - 64px);
    color: $tipTextColor;
    background: $sidebarBgColor;
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
