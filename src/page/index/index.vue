<template>
  <div class="md-frame" :class="{'md-collapse': isCollapse}">
    <div class="md-left">
      <sidebar></sidebar>
    </div>
    <div class="md-right">
      <div class="md-header-options">
        <header-options></header-options>
      </div>
      <div class="md-tags-bar"></div>
      <el-scrollbar class="md-main-view">
        <keep-alive>
          <router-view :style="{'height': '100%'}" v-if="$route.meta.$keepAlive"/>
        </keep-alive>
        <router-view :style="{'height': '100%'}" v-if="!$route.meta.$keepAlive"/>
      </el-scrollbar>
    </div>
    <div class="md-shade" v-show="false" @click="showCollapse"></div>
  </div>
</template>

<script>
// vuex
import { mapGetters } from 'vuex';
// 组件
import Sidebar from '@/page/Sidebar/Sidebar';
import HeaderOptions from '@/page/HeaderOptions/Options';

export default {
  name: 'layout',
  components: {
    Sidebar,
    HeaderOptions
  },
  computed: {
    ...mapGetters([
      'isCollapse'
    ])
  },
  data () {
    return {
      // x
    }
  },
  methods: {
    showCollapse () {
      // x
    }
  }
}
</script>

<style lang="scss" scoped>
.md-frame {
  position: relative;
  width: 100%;
  height: 100%;
  background: cadetblue;
  .md-left {
    position: fixed;
    top: 0;
    left: 0;
    width: 220px;
    height: 100%;
    z-index: 1024;
    background: chocolate;
  }
  .md-right {
    position: absolute;
    top: 0;
    left: 220px;
    width: calc(100% - 220px);
    height: 100%;
    background: cornflowerblue;
    .md-header-options {
      position: relative;
      width: 100%;
      height: 64px;
      background: rebeccapurple;
    }
    .md-tags-bar {
      position: relative;
      width: 100%;
      height: 40px;
      background: green;
    }
    .md-main-view {
      position: relative;
      width: 100%;
      height: calc(100% - 64px - 40px);
      background: cadetblue;
    }
  }
  .md-shade {
    position: absolute;
    top: 0;
    left: 220px;
    width: calc(100% - 220px);
    height: 100%;
    z-index: 1024;
    background: rgba(0, 0, 0, .3);
  }
}

.md-collapse {
  .md-left {
    width: 64px;
  }
  .md-right {
    left: 64px;
    width: calc(100% - 64px);
  }
  .md-shade {
    left: 64px;
    width: calc(100% - 64px);
  }
}

@media screen and (max-width: 768px) {
  .md-frame {
    .md-left {
      display: block;
      width: 220px;
    }
    .md-right {
      left: 220px;
      width: calc(100% - 220px);
    }
    .md-shade {
      left: 220px;
      width: calc(100% - 220px);
    }
  }

  .md-collapse {
    .md-left {
      display: none;
      width: 0;
    }
    .md-right {
      left: 0;
      width: 100%;
    }
    .md-shade {
      left: 0;
      width: 100%;
    }
  }
}
</style>
