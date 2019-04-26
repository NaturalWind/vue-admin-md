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
        v-for="(item, index) in tagList"
        :key="index"
        :label="item.label"
        :name="item.path">
      </el-tab-pane>
    </el-tabs>
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
      })
      this.$store.commit('DEL_TAG', tag);
      // if (tagIndex - 1 > 0) {
      //   this.clickTab({index: tagIndex - 1});
      // }
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
    width: 100%;
    height: 100%;
  }
}
</style>
