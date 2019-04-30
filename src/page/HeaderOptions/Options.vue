<template>
  <div class="md-header-options-frame">
    <div class="options-left">
      <div class="collapse-icon-wrapper">
        <i class="collapse-icon iconfont" :class="isCollapse ? 'iconsuoping' : 'iconzhankai'" @click="clickCollapse"></i>
      </div>
    </div>
    <div class="options-right">
      <div class="item-icon-wrapper">
        <el-color-picker v-model="selectColor" show-alpha :predefine="predefineColors"></el-color-picker>
      </div>
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
// vuex
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'isCollapse'
    ])
  },
  data () {
    return {
      selectColor: '#409EFF',
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        '#c7158577',
        'rgba(255, 69, 0, 0.68)'
      ],
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
    clickCollapse () {
      this.$store.commit('SET_COLLAPSE');
    },
    clickAccountOptions (value) {
      console.log('当前点击账号：', value);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.md-header-options-frame {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  color: $mainTextColor;
  background: $mainBg;
  .options-left {
    position: relative;
    width: 70px;
    height: 100%;
    .collapse-icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      .collapse-icon {
        font-size: 25px;
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
    .item-icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
      width: 35px;
      height: 35px;
      .item-icon {
        font-size: 25px;
      }
    }
    .item-account-wrapper {
      display: flex;
      margin-right: 10px;
      height: 35px;
      .item-account-icon {
        border-radius: 50%;
        width: 35px;
        height: 35px;
      }
      .item-account-name {
        padding-left: 5px;
        color: $mainTextColor;
        height: 35px;
        line-height: 35px;
      }
    }
  }
}
</style>

<style lang="scss">
.md-header-options-frame {
  .options-right {
    .item-icon-wrapper {
      .el-color-picker {
        height: 35px;
        .el-color-picker__trigger {
          width: 35px;
          height: 35px;
        }
      }
    }
  }
}
</style>
