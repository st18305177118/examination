<template>
    <div class="index">
      <menuBar/>
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
            <!--个人中心首页部分-->
            <!--个人中心首页部分 end-->
            <h3 class="main-name"><i class="el-icon-erp-Opinion"></i>意见反馈</h3>
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
  import leftmenu from '../../components/leftmenu/leftmenu'
    export default {
      components:{
        menuBar,
        leftmenu
      }
    }
</script>

<style lang="less">
@import "./FeedBack.less";
</style>
