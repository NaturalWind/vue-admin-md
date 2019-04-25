<template>
  <div class="md-sidebar-item-frame">
    <template v-for="item in menu">
      <!-- 一层 -->
      <el-menu-item
        :index="item.path"
        :key="item.name + item.path"
        v-if="!item.children.length && !isURL(item.path)"
        @click="clickMenuIten(item)">
        <!-- iconfont 后面有空格 -->
        <i :class="'iconfont ' + item.icon"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
      <!-- 外链 -->
      <el-menu-item
        :index="item.path"
        :key="item.name + item.path"
        v-if="isURL(item.path)"
        @click="clickMenuIten(item)">
        <!-- iconfont 后面有空格 -->
        <i :class="'iconfont ' + item.icon"></i>
        <span v-if="!item.isJump" slot="title">{{ item.name }}</span>
        <a v-if="item.isJump" v-show="!isCollapse" :href="item.path" target="_blank">{{ item.name }}</a>
        <el-tooltip v-if="item.isJump" v-show="isCollapse" effect="dark" :content="item.name" placement="right">
          <a :href="item.path" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
        </el-tooltip>
      </el-menu-item>
      <!-- 多层 -->
      <el-submenu :index="item.path" :key="item.name + item.path" v-if="item.children.length">
        <template slot="title">
          <!-- iconfont 后面有空格 -->
          <i :class="'iconfont ' + item.icon"></i>
          <span :style="{'display': isCollapse ? 'none' : 'inline'}" slot="title">{{ item.name }}</span>
        </template>
        <sidebar-item :menu="item.children"></sidebar-item>
      </el-submenu>
    </template>
  </div>
</template>

<script>
// vuex
import { mapGetters } from 'vuex';
// 工具
import { isURL } from '@/util/validate';

export default {
  name: 'sidebarItem',
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapGetters([
      'isCollapse'
    ])
  },
  methods: {
    isURL,
    clickMenuIten (item) {
      if (item.isJump) {
        return;
      }
      let routerPath = isURL(item.path) ? '/mdIframe' : item.path;
      let routerQuery = isURL(item.path) ? {url: item.path} : undefined;
      this.$router.push({
        path: routerPath,
        query: routerQuery
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
