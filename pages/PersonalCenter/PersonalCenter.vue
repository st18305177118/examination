<template>
    <div class="index">
      <div><menuBar/></div>
      <div class="Personal-box">
        <div class="m-crumbs w1032">
          <nuxt-link class="link" :to="{name:'index'}">蛋壳公寓</nuxt-link>
          <span>&gt;</span>
          个人设置
          <span>&gt;</span>
          个人中心
        </div>
        <div class="p-wrap clearfix w1032">
          <leftmenu/>
          <div class="slide-main page-user">
            <div class="loadImg js-loading" style="display: none;"></div>
            <!--个人中心首页部分-->
            <div class="ps-hd js-ps-hd">
              <img class="js-user-img" src="http://public.wutongwan.org/public-20180206-FgzEN9SiY65F_cmpAhVWLXfPjYpp" alt="用户头像">
              <div class="ps-info">
                <p class="name js-nickname" v-show="isLogin">{{userName}}</p>
                <p class="desc js-hello">早上好</p>
              </div>
            </div>
            <!--个人中心首页部分 end-->
            <h3 class="main-name1"><i class="el-icon-erp-hetong"></i>我的合同</h3>
            <div class="main-cont clearfix">
              <!--有合同-->
              <div class="ctt-box js-ctt-box"></div>
              <!--暂无合同-->
              <div class="sp-empty mtop50" style="display: block;">
                <p class="sp-txt">您还没有履行中的合同，快去签约吧！～</p>
                <el-row>
                  <nuxt-link class="link1" :to="{name:'findHouse-Fhouse'}"><el-button class="Personal-zfbtn" type="primary" round>找房</el-button></nuxt-link>
                </el-row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import menuBar from '../../components/menu/menu'
  import Leftmenu from "../../components/leftmenu/leftmenu";
  import Cookies from 'js-cookie';
    export default {
      components:{
        Leftmenu,
        menuBar

      },
      data(){
        return{
          isLogin:false,
          userName:''
        }
      },
      created(){
        if (Cookies && Cookies.get("userName")) {
          this.isLogin = true;
          this.userName =  Cookies.get("userName");
        }
      }
    }
</script>

<style lang="less">
@import "./PersonalCenter.less";
@import "../../assets/font-icon1/iconfont.css";
</style>
