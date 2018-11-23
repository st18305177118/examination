<template>
    <div class="index">
      <div style="height: 60px"><menuBar/></div>
      <div class="page-w-rent">
        <div class="m-er-1">
          <div class="er-adorn J-adorn" style="display: block;">
            <span class="ele-1 show"></span>
            <span class="ele-2 show"></span>
            <span class="ele-3 show"></span>
            <span class="ele-4 show"></span>

          </div>
          <img class="mainImg" src="//public.wutongwan.org/public-20180310-FoKSmB8vU_acJgs9KO1PwyMcszGC" title="租房，整租" alt="逸居一居室整租图片">
        </div>

        <div class="m-er-2">
          <div class="sea-text">
            <p>衣帽间与书房融为一体，整体感更强，也充分利用了书桌上面的空间，增加储物功能，整个空间看起来更加通透。</p>
            <p>起居室配置双人床和双人沙发，提升空间的舒适度，家具中增添了梳妆台 产品，阳台作为独立的就餐区增加了更具设计感的餐桌椅三件套，整体品质比”合居“产品有所提升。</p>
          </div>
          <img class="who-sea" src="https://public.wutongwan.org/public-20180627-FqbWXOyl_nQZ83hc6oip_ukIPgEk" title="租房，整租" alt="蛋壳设计师图片">
        </div>

        <div class="m-er-3">
          <div class="index-box">
            <div class="box-center">
              <div class="box-title">
                <div class="box-title-fl">
                  <h1>
                    <span><b>逸·居</b>&nbsp;精选房源</span>
                  </h1>
                  <p>质感&nbsp;&nbsp;简约&nbsp;&nbsp;自然&nbsp;&nbsp;给您空间自主权</p>
                </div>
              </div>
            </div>

            <div class="choice">
              <el-row>
                <el-col :span="8" v-for="Jrent in Jrents" :key="Jrent.id" :offset="0">
                  <el-card shadow="hover" :body-style="{ padding: '0px' }">
                    <div class="J-img"><img :src="Jrent.rentImg" ></div>
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
      </div>

      <div class="foot"><footerBar/></div>
    </div>
</template>

<script>
  import menuBar from '../../components/menu/menu'
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
@import "./wholerent.less";
</style>
