<template>
    <div class="index">
     <div style="height: 60px"><menuBar/></div>
      <div class="login-wrap">
        <div class="login-banner w1035">
           <div class="login-form">
             <h3 class="login-name"><span>登录</span></h3>
             <div class="login-input" >
               <el-input name="user"
                 placeholder="请输入用户名"
                 prefix-icon="el-icon-erp-yonghu-tianchong"
                 clearable
               v-model="userInfo.username">
               </el-input>
               <el-input style="top: 20px"
                         name="passwords"
                 placeholder="请输入密码"
                 prefix-icon="el-icon-erp-mima"
                 type="password"
                 clearable
               v-model="userInfo.password">
               </el-input>
             </div>
             <div class="register">
               <nuxt-link class="link" :to="{name:'register-register'}"><span>立即注册</span></nuxt-link>
               <span class="forget">忘记密码？</span>
             </div>
             <div class="login-btn">
               <el-button type="primary" style="width: 310px;top: 100px" @click="login" >登录</el-button>
             </div>
           </div>
        </div>
      </div>
    </div>
</template>

<script>
  import menuBar from '../../components/menu/menu'
  import * as LoginRequest from '../../assets/request/login'
    export default {
      components :{
          menuBar
      },
      data() {
        return {
          activeIndex: '8',
          userInfo:{
            username:'',
            password:''
          }

        }
      },
      created(){

      },
      methods :{
        login(){
          if (this.userInfo.username ==  ''|| this.userInfo.password =='') {
           this.$message.warning("用户名或密码不能为空");
          }else {
            LoginRequest.Login(this)
          }
        }
      }

    }
</script>

<style lang="less">
  @import "./login.less";
  @import "../../assets/font-icon/iconfont.css";
</style>
