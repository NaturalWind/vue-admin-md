<template>
  <div class="md-tag-frame">
    <el-tabs
      class="tab-wrapper"
      type="card"
      closable
      v-model="currentTab"
      @tab-click="clickTab"
      @tab-remove="clickRemoveTab">
      <el-tab-pane
        v-for="item in tagList"
        :key="item.path"
        :label="item.label"
        :name="item.path">
      </el-tab-pane>
    </el-tabs>
    <el-dropdown class="tab-options-wrapper" @command="clickTabOptions">
      <el-button class="tab-options" type="primary">更多
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="other">关闭其它</el-dropdown-item>
        <el-dropdown-item command="all">全部关闭</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
// vuex
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'tag',
      'tagList'
    ])
  },
  data () {
    return {
      currentTab: ''
    }
  },
  created () {
    this.currentTab = this.tag.path;
  },
  watch: {
    tag (value) {
      this.currentTab = value.path;
    }
  },
  methods: {
    clickTab (tab) {
      let routerObj = this.tagList[Number(tab.index)];
      this.$router.push({
        path: routerObj.path,
        query: routerObj.query
      });
    },
    clickRemoveTab (tabName) {
      let tagIndex = -1;
      let tag = this.tagList.find((item, index) => {
        tagIndex = index;
        return item.path === tabName;
      });
      this.$store.commit('DEL_TAG', tag);
      if (tabName === this.tag.path && tagIndex !== 0) {
        this.clickTab({index: tagIndex - 1});
      }
    },
    clickTabOptions (item) {
      if (item === 'other') {
        this.$store.commit('DEL_TAG_OTHER');
      } else {
        this.$store.commit('DEL_TAG_ALL');
        this.clickTab({index: 0});
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.md-tag-frame {
  position: relative;
  width: 100%;
  height: 100%;
  background: teal;
  .tab-wrapper {
    position: relative;
    width: calc(100% - 75px);
    height: 100%;
    background: cornflowerblue;
  }
  .tab-options-wrapper {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 70px;
    height: calc(100% - 10px);
    background: hotpink;
    .tab-options {
      padding: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
