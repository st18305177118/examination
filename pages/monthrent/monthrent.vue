<template>
    <div class="index">
     <div style="height: 60px"><menuBar/></div>
      <div class="m-mode-ban">
        <div class="ban-text">
          <span class="s1">月租月轻松</span>
          <span class="s2">虽短暂也美好</span>
        </div>
      </div>
      <div class="m-advage w1032 mtop70 clearfix">
        <div class="advage-b i1">
          <h3 class="tit"><strong>指定房源</strong>，灵活自选</h3>
          <p class="desc">30天～365天租期任选(以合同约定为准)</p>
        </div>

        <div class="advage-b i2">
          <h3 class="tit">品质服务，放心居住</h3>
          <p class="desc">保洁、维修、密码锁，保障您的生活品质及安全</p>
        </div>

        <div class="advage-b i3">
          <h3 class="tit">性价比高</h3>
          <p class="desc">全新房屋，全新生活，给您提供精选高品质房源</p>
        </div>
      </div>
      <div class="m-er-3">
        <div class="index-box">
          <div class="box-center">
            <div class="box-title">
              <div class="box-title-fl">
                <h1>
                  <span>推荐精选月租房源</span>
                </h1>
                <p>虽然短暂，也美好；月租也要有“家”的感觉</p>
              </div>
            </div>
          </div>

          <div class="choice">
            <el-row>
              <el-col :span="8" v-for="Jrent in Jrents" :key="Jrent.id" :offset="0">
                <el-card shadow="hover" :body-style="{ padding: '0px' }">
                  <div><span class="J-img"><img :src="Jrent.rentImg" ></span></div>
                  <div class="describe">
                    <span><b>￥{{Jrent.price}}</b>元/月</span>
                    <p>{{Jrent.describe}} </p>
                    <label>地铁 2号线 / 约13平米 </label>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
          <div class="more-btn">
            <nuxt-link style="text-decoration: none" :to="{name: 'findHouse-Fhouse'}"><el-button  type="primary" style="width: 250px;top: 100px;height:50px" round >更多房源</el-button></nuxt-link>
          </div>

        </div>
      </div>
      <div><footerBar/></div>
    </div>
</template>

<script>
  import menuBar from '../..//components/menu/menu'
  import footerBar from '../../components/footer/footer'
    export default {
      components:{
        menuBar,
        footerBar
      },
      data(){
        return{
          Jrents :[
            {
              id:1,
              rentImg:"https://public.wutongwan.org/public-20180806-FuCjPXzmOWkn46ynTyh63o6lA3qK-roomPcList.jpg",
              price :1458,
              describe:'马群 中垠紫金观邸 主卧 朝西 D室'
            },
            {
              id:2,
              rentImg:"https://public.wutongwan.org/public-20180806-FuCjPXzmOWkn46ynTyh63o6lA3qK-roomPcList.jpg",
              price :1458,
              describe:'马群 中垠紫金观邸 主卧 朝西 D室'
            },
            {
              id:3,
              rentImg:"https://public.wutongwan.org/public-20180806-FuCjPXzmOWkn46ynTyh63o6lA3qK-roomPcList.jpg",
              price :1458,
              describe:'马群 中垠紫金观邸 主卧 朝西 D室'
            },
            {
              id:4,
              rentImg:"https://public.wutongwan.org/public-20180806-FuCjPXzmOWkn46ynTyh63o6lA3qK-roomPcList.jpg",
              price :1458,
              describe:'马群 中垠紫金观邸 主卧 朝西 D室'
            },
            {
              id:5,
              rentImg:"https://public.wutongwan.org/public-20180806-FuCjPXzmOWkn46ynTyh63o6lA3qK-roomPcList.jpg",
              price :1458,
              describe:'马群 中垠紫金观邸 主卧 朝西 D室'
            },
            {
              id:6,
              rentImg:"https://public.wutongwan.org/public-20180806-FuCjPXzmOWkn46ynTyh63o6lA3qK-roomPcList.jpg",
              price :1458,
              describe:'马群 中垠紫金观邸 主卧 朝西 D室'
            }
          ]
        }
      }
    }
</script>

<style lang="less">
@import "./monthrent.less";
</style>
