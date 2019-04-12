<template>
  <div class="md-header-options-frame">
    <div class="options-left">
      <div class="collapse-icon-wrapper">
        <i class="collapse-icon iconfont iconzhankai"></i>
      </div>
    </div>
    <div class="options-right">
      <span class="item-icon-wrapper">
        <i class="item-icon iconfont iconbug-fill"></i>
      </span>
      <span class="item-icon-wrapper">
        <i class="item-icon iconfont iconsuoping"></i>
      </span>
      <span class="item-icon-wrapper">
        <i class="item-icon iconfont iconlingdang"></i>
      </span>
      <span class="item-icon-wrapper">
        <i class="item-icon iconfont iconsmile"></i>
      </span>
      <span class="item-icon-wrapper">
        <i class="item-icon iconfont iconfullscreen"></i>
      </span>
      <div class="item-account-wrapper">
        <img class="item-account-icon" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif" alt="">
        <el-dropdown class="item-account-name" @command="clickAccountOptions">
          <span class="el-dropdown-link">下拉菜单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) in accountOptions" :key="index" :command="item.value">{{ item.label }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <span class="item-icon-wrapper">
        <i class="item-icon iconfont iconyoucecaidan"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      accountOptions: [
        {
          label: '个人信息',
          value: '1'
        },
        {
          label: 'github',
          value: '2'
        },
        {
          label: '退出账号',
          value: '3'
        }
      ]
    }
  },
  methods: {
    clickAccountOptions (value) {
      console.log('当前点击账号：', value);
    }
  }
}
</script>

<style lang="scss" scoped>
.md-header-options-frame {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  background: cadetblue;
  .options-left {
    position: relative;
    width: 70px;
    height: 100%;
    background: hotpink;
    .collapse-icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      .collapse-icon {
        font-size: 30px;
      }
    }
  }
  .options-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    width: calc(100% - 70px);
    height: 100%;
    background: khaki;
    .item-icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
      width: 35px;
      height: 35px;
      background: yellowgreen;
      .item-icon {
        font-size: 30px;
      }
    }
    .item-account-wrapper {
      display: flex;
      margin-right: 15px;
      height: 35px;
      .item-account-icon {
        border-radius: 50%;
        width: 35px;
        height: 35px;
      }
      .item-account-name {
        height: 35px;
        line-height: 35px;
      }
    }
  }
}
</style>
