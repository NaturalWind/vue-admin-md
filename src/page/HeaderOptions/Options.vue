<template>
  <div class="md-header-options-frame">
    <div class="options-left">
      <div class="collapse-icon-wrapper">
        <i class="collapse-icon iconfont iconzhanghaodenglu"></i>
      </div>
    </div>
    <div class="options-right">
      <!-- x -->
    </div>
  </div>
</template>

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
    position: relative;
    width: calc(100% - 70px);
    height: 100%;
    background: khaki;
  }
}
</style>
