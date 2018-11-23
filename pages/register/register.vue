<template>
    <div class="index">
      <div style="height: 60px"><menuBar/></div>
      <div class="login-wrap">
        <div class="login-banner w1035">
          <div class="login-form">
            <h3 class="login-name"><span>注册</span></h3>
            <div class="login-input">
              <el-input
                placeholder="请输入用户名"
                v-model="rUser"
                prefix-icon="el-icon-erp-yonghu-tianchong"
                clearable>
              </el-input>
              <el-input style="top: 20px"
                        placeholder="请输入密码"
                        prefix-icon="el-icon-erp-mima"
                        type="password"
                        v-model="rPassword"
                        clearable>
              </el-input>
            </div>
            <div class="login-btn">
              <el-button type="primary" style="width: 310px;top: 100px" @click="onSubmit" >注册</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import menuBar from '../../components/menu/menu'
  import * as RegisterRequest from '../../assets/request/register'
    export default {
      components:{
          menuBar
      },
      data() {
        return {
          rUser: '',
          rPassword: ''
        }
      },
      methods:{
        onSubmit() {
          RegisterRequest.register(this);
        }
      }
    }
</script>

<style lang="less">
@import "./register.less";
@import "../../assets/font-icon/iconfont.css";
</style>
