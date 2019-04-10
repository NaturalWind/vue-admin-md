<template>
  <div class="md-login-frame">
    <div class="top-wrapper">
      <img class="logo" src="../../assets/logo.png">
    </div>
    <div class="center-wrapper">
      <div class="login-wrapper">
        <p class="title">vue-admin-md</p>
        <el-form
          class="login-form"
          status-icon
          ref="form"
          :model="form"
          :rules="rules">
          <el-form-item prop="username">
            <el-input
              v-model="form.username"
              placeholder="请输入用户名"
              @keyup.enter.native="clickLogin">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              show-password
              v-model="form.password"
              placeholder="请输入密码"
              @keyup.enter.native="clickLogin">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="username">
            <el-button
              class="btn-style"
              round
              type="primary"
              @click="clickLogin">登陆
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: undefined,
        password: undefined
      },
      rules: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'},
                   {min: 6, message: '密码长度最少6位', trigger: 'blur'}]
      }
    }
  },
  methods: {
    clickLogin () {
      // console.log('当前：', this)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
$textColor: #303133;
$iconColor: #303133;

.md-login-frame {
  position: relative;
  width: 100%;
  height: 100%;
  background: $pageBg;
  background-image: url('../../assets/img/login/bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .top-wrapper {
    position: absolute;
    top: 10px;
    left: 10px;
    .logo {
      width: 70px;
      height: 70px;
    }
  }
  .center-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .login-wrapper {
      width: 35%;
      height: 35%;
      .title {
        // P标签存在上下 25px 的外边距
        font-size: 25px;
        text-align: center;
        font-weight: 700;
        color: $textColor;
        width: 100%;
        height: 50px;
        line-height: 50px;
      }
      .login-form {
        width: 100%;
        height: calc(100% - 100px);
        i {
          color: $iconColor;
        }
        .btn-style {
          margin-top: 20px;
          margin-left: 25%;
          margin-right: 25%;
          width: 50%;
        }
      }
    }
  }
}
</style>

<style lang="scss">
$textColor: #303133;
$lineColor: rgb(235, 237, 242);

.md-login-frame {
  .center-wrapper {
    .login-wrapper {
      .login-form {
        .el-form-item {
          margin-bottom: 12px;
        }
        .el-input__inner {
          border: none;
          border-radius: 0;
          border-bottom: 1px solid $lineColor;
          color: $textColor;
          background: transparent;
        }
      }
    }
  }
}
</style>
