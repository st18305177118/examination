<template>
    <div class="index">
      <div class="slide-menu">
        <ul class="menu-list-box clearfix user-center">
          <li class="h3">个人设置</li>
          <li class="menu-list current">
            <nuxt-link class="link1" :to="{name:'PersonalCenter-PersonalCenter'}"> 个人中心</nuxt-link>
          </li>


          <li class="h3">租客服务</li>
          <li class="menu-list ">
            <nuxt-link class="link1" :to="{name:'MyContract-MyContract'}"> 我的合同</nuxt-link>
          </li>

          <li class="h3">意见/建议</li>
          <li class="menu-list ">
            <nuxt-link class="link1" :to="{name:'Feedback-FeedBack'}">  意见反馈</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="less">
@import "./leftmenu.less";
</style>
