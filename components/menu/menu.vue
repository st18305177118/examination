<style lang="less">
  @import "./menu.less";
</style>
<template>
    <div class="menu">
      <div class="header">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            active-text-color="#909399"
             menu-trigger="click">
            <el-menu-item index="77" class="title" disabled><nuxt-link style="text-decoration: none" :to="{name:'index'}">蛋壳公寓</nuxt-link></el-menu-item>
            <el-menu-item index="1"><nuxt-link class="link" :to="{name:'index'}">首页</nuxt-link></el-menu-item>
            <el-menu-item index="2"><nuxt-link class="link" :to="{name:'findHouse-Fhouse'}">找房</nuxt-link></el-menu-item>
            <el-menu-item index="3"><nuxt-link class="link" :to="{name:'jointrent-jointrent'}">合租</nuxt-link></el-menu-item>
            <el-menu-item index="4"><nuxt-link class="link" :to="{name:'wholerent-wholerent'}">整租</nuxt-link></el-menu-item>
            <el-menu-item index="5"><nuxt-link class="link" :to="{name:'monthrent-monthrent'}">月租</nuxt-link></el-menu-item>
            <el-menu-item index="6"><nuxt-link class="link" :to="{name:'houseowner-houseowner'}">业主</nuxt-link></el-menu-item>
            <el-menu-item index="8" disabled>
              <div class="img">
                <img :src="phone"/>
              </div>
              <div class="font">
                <span class="phone">400-809-2223</span>
                <span class="time">服务时间：09:00 - 21:00</span>
              </div>
            </el-menu-item>
            <el-menu-item index="9">
              <span class="login">
                <nuxt-link v-show="!isLogin" class="link" :to="{name:'login-login'}">登录</nuxt-link>
                <el-row class="block-col-2">
                  <el-col :span="12">
                     <el-dropdown>
                        <span class="el-dropdown-link" v-show="isLogin">
                          {{userName}}
                        </span>
                       <el-dropdown-menu slot="dropdown">
                         <el-dropdown-item style="text-align: center" class="link-geren"><nuxt-link  style="text-decoration: none;color: #333;" :to="{name:'PersonalCenter-PersonalCenter'}">个人中心</nuxt-link></el-dropdown-item>
                         <el-dropdown-item ><nuxt-link style="text-decoration: none" :to="{name:'index'}"><el-button class="button" style="border: none;" @click="exitLogin">安全退出</el-button></nuxt-link></el-dropdown-item>
                       </el-dropdown-menu>
                      </el-dropdown>
                  </el-col>
                </el-row>
              </span>
            </el-menu-item>
          </el-menu>

      </div>
    </div>
</template>

<script>
  import Cookies from 'js-cookie';
    export default {
      name: "menub",
      data() {
        return {
          isLogin: false,
          userName: "",
          activeIndex: '1',
          phone: '../phone.png',
          place: '../place.png'
        };
      },
      created() {
        if (Cookies && Cookies.get("userName")) {
          this.isLogin = true;
          this.userName =  Cookies.get("userName");
        }
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        exitLogin(){
          Cookies.set('userName','',-1)
          this.isLogin = false
          console.log(Cookies.get("userName"))
        }
      }
    }
</script>

<style scoped>

</style>
