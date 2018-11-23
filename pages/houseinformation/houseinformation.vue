<template>
    <div class="index">
      <div><menuBar/></div>
      <div class="infor-banner">
        <el-carousel indicator-position="none">
          <el-carousel-item v-for="item in infors" :key="item.id">
            <img :src="item.inforImg">
          </el-carousel-item>
          <el-carousel-item v-for="item in infors1" :key="item.id">
            <img :src="item.inforImg1">
          </el-carousel-item>
        </el-carousel>
        <div class="infor-right">
          <div class="room-name">
            <h1>马群 中垠紫金观邸 主卧 朝西 D室</h1>
            <em>地铁 2号线</em>
          </div>
          <div class="room-title">
            <span>已通风30天</span>
          </div>
          <div class="room-price hot">
            <div class="price-list">
              <label>月租金</label>
              <div class="room-price-num">1290 元/月</div>
            </div>
            <div class="price-list">
              <label>首月租金</label>
              <div class="room-price-sale">
                790
                <em>元/月</em>
              </div>
            </div>

          </div>
          <div class="infor-btn">
            <el-row>
              <el-button type="primary" :plain="true" @click="open" >预约看房</el-button>
            </el-row>
          </div>
          <div class="user-phone">
            <strong>400-809-2223</strong>
            <em>电话咨询服务时间：9:00 - 21:00（节假日照常）</em>
          </div>
        </div>
      </div>
      <div class="danke-promise">
        <h2>
          蛋壳公寓承诺
        </h2>
        <div class="danke-promise-content">
          <div class="danke-promise-item">
            <img src="https://public.wutongwan.org/public-20180710-FgEl0lEz9s_ZE1PMx41B309vYI_8" alt="">
            <p>百分百真实房源</p>
          </div>
          <div class="danke-promise-item">
            <img src="https://public.wutongwan.org/public-20180709-FmKudE1SpLyXqzZItWOzSlXt4zEx" alt="">
            <p>不收取中介费</p>
          </div>
          <div class="danke-promise-item">
            <img src="https://public.wutongwan.org/public-20180709-FsP-XOTqpxKQPvbTxZU_1B4rdzC8" alt="">
            <p>双周保洁安心省心</p>
          </div>
          <div class="danke-promise-item">
            <img src="https://public.wutongwan.org/public-20180710-FoppJzNZhyIQChrOizdbCraqhIKQ" alt="">
            <p>售后维修及时上门</p>
          </div>
          <div class="danke-promise-item">
            <img src="https://public.wutongwan.org/public-20180709-FguIPSRzpZhmlhQrKFQz-4Gq8hpk" alt="">
            <p>智能密码锁</p>
          </div>
          <div class="danke-promise-item">
            <img src="https://public.wutongwan.org/public-20180709-FtTfCx8--Zw1Af9W2jIOAYGgSu3a" alt="">
            <p>免费WIFI</p>
          </div>
        </div>
      </div>
      <div class="danke-set">
        <h2>
          房屋配置
        </h2>
        <div class="danke-set-content">
          <div class="danke-set-item">
            <img src="//public.wutongwan.org/public-20171123-Fit4o3_ZQIEVojXFg1k0eyt-4ytP">
            <p>床</p>
          </div>
          <div class="danke-set-item">
            <img src="//public.wutongwan.org/public-20171123-FrYFDpZlpF4no-kfliDa0F5WOJbd">
            <p>WIFI</p>
          </div>
          <div class="danke-set-item">
            <img src="//public.wutongwan.org/public-20171123-Fu3H3dZA87uIWy7lnhCCy7YPzh48">
            <p>洗衣机</p>
          </div>
          <div class="danke-set-item">
            <img src="//public.wutongwan.org/public-20171123-FlMAOzbw4EGZ4ZCdlvMe9Dhgs-ue">
            <p>空调</p>
          </div>
          <div class="danke-set-item">
            <img src="//public.wutongwan.org/public-20171123-FhnOPpkUtLogeN-wFMr5zrm__bc3">
            <p>智能锁</p>
          </div>
        </div>
      </div>
      <div class="recommendation">
      <div class="recommendation-title">
        <span>精品推荐</span>
      </div>
      <div class="recommendation-room">
        <el-row>
          <el-col :span="6" v-for="Jrent in Jrents" :key="Jrent.id" :offset="0">
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
    </div>
      <div><footerBar/></div>
    </div>
</template>

<script>
  import menuBar from '../../components/menu/menu'
  import footerBar from '../../components/footer/footer'
    export default {
    methods:{
      open(){
        this.$message({
          message:'恭喜你，预约成功',
          type:'success',
          duration:3000,
          center: true,
        });
      }
    },
      components:{
        menuBar,
        footerBar
      },
      data(){
        return{
          infors:[{
            id:1,
            inforImg:'https://public.wutongwan.org/public-20180806-Fkb9zt57uyPg1XMMRkKYHnUAMx0e-roomPcDetail.jpg'
          }],
          infors1:[{
            id:2,
            inforImg1:'https://public.wutongwan.org/public-20180806-FlOgyYQ1L6SAVFuOpjLIhTOgZ6PE-roomPcDetail.jpg'
          }],
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
            }
          ]
        }
      }
    }
</script>

<style lang="less">
@import "./houseinformation.less";
</style>
