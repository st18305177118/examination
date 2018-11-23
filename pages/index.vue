<template >
    <div class="index">
      <div style="height: 60px"><menuBar/></div>
      <div class="banner">
          <el-carousel :interval="3000" arrow="always" >
            <el-carousel-item v-for="item in 2" :key="item.id" >
            </el-carousel-item>
          </el-carousel>
      </div>

      <div class="index-box">
        <div class="box-center">
          <div class="box-title">
            <div class="box-title-fl">
              <h1>
                <span><b>精选房源</b>为你而选</span>
              </h1>
              <p>蛋壳公寓致力于为租户创造高品质生活而努力</p>
              <div class="box-title-fr">
                <nuxt-link class="link" :to="{name:'findHouse-Fhouse'}"><a>更多></a></nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <div class="choice">
          <el-row>
            <el-col :span="8" v-for="Jrent in Jrents" :key="Jrent.id" :offset="0">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <div class="J-img"><nuxt-link class="link" :to="{name:'houseinformation-houseinformation'}"><img src="https://public.wutongwan.org/public-20180806-FuCjPXzmOWkn46ynTyh63o6lA3qK-roomPcList.jpg" ></nuxt-link></div>
                <div class="describe">
                  <span><b>￥{{Jrent.houseMoney}}</b>元/月</span>
                  <p>{{Jrent.hoseName}} </p>
                  <label>{{Jrent.hosePosition}} </label>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>

      <div class="J-rent">
          <div class="J-center">
            <div class="J-title">
              <div class="J-title-fl">
                <div class="J-title-fr">
                  <nuxt-link class="link" :to="{name:'findHouse-Fhouse'}"><a>更多></a></nuxt-link>
                </div>
                <h2>
                  <span class="Span"><b>合租·样板间</b>多种风格</span>
                  <p>复古和颓废艺术范的格调颇受大众欢迎</p>
                </h2>
              </div>
            </div>
            <div class="J-carousel">
              <el-carousel  :interval="3000">
                <el-carousel-item v-for="item in rights" :key="item.id" >
                  <ul style="width: 260px;height: 250px;list-style-type: none;float: right" >
                    <li><img style="width: 260px;height: 250px;" :src="item.rentImg1"></li>
                    <li><img style="width: 260px;height: 250px;" :src="item.rentImg2"></li>
                  </ul>

                  <div><img :src="item.rentImg" ></div>

                </el-carousel-item>
                <el-carousel-item v-for="item in rights2" :key="item.id" >
                  <ul style="width: 260px;height: 250px;list-style-type: none;float: right" >
                    <li><img style="width: 260px;height: 250px;" :src="item.rentImg1"></li>
                    <li><img style="width: 260px;height: 250px;" :src="item.rentImg2"></li>
                  </ul>
              <img :src="item.rentImg" >
              </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>

        <div class="W-rent">
          <div class="W-center">
            <div class="W-title">
              <div class="W-title-fl">
                <div class="W-title-fr">
                  <nuxt-link class="link"  :to="{name:'findHouse-Fhouse'}"><a>更多></a></nuxt-link>
                </div>
                <h2>
                  <span class="Span"><b>整租·样板间</b>给你空间自主权</span>
                  <p>随意租，随意住，给你空间自主权</p>
                </h2>
            </div>
          </div>
          <div class="W-carousel">
            <el-carousel  :interval="3000">
              <el-carousel-item v-for="item in rights3" :key="item.id" >
                <ul style="width: 260px;height: 250px;list-style-type: none;float: right" >
                  <li><img style="width: 260px;height: 250px;" :src="item.rentImg1"></li>
                  <li><img style="width: 260px;height: 250px;" :src="item.rentImg2"></li>
                </ul>
                <div><img :src="item.rentImg" ></div>

              </el-carousel-item>
              <el-carousel-item v-for="item in rights4" :key="item.id" >
                <ul style="width: 260px;height: 250px;list-style-type: none;float: right" >
                  <li><img style="width: 260px;height: 250px;" :src="item.rentImg1"></li>
                  <li><img style="width: 260px;height: 250px;" :src="item.rentImg2"></li>
                </ul>
                <img :src="item.rentImg" >
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
      <div><footer-bar/></div>
    </div>
</template>

<script>
  import menuBar from '../components/menu/menu'
  import footerBar from '../components/footer/footer'
  import * as IndexRequest from '../assets/request/index'
    export default {
      data() {
        return {
          activeIndex: '1',
          Jrents :[],
          rights :[{
            id:1,
            rentImg:"https://public.wutongwan.org/public-20180329-Fi8y12a19ESuM_4rFBtv7xto1XAF",
            rentImg1:"https://public.wutongwan.org/public-20180329-FhNHjTODhCrjN2rjUMm2Q1Cltu4m",
            rentImg2:"https://public.wutongwan.org/public-20180329-FheQabPfVZyAwEHhGlC2VaWADEtc"

          }],
          rights2 :[{
            id:2,
            rentImg:"https://public.wutongwan.org/public-20180329-Fo7SUtrkV4mzTfp9IpygZWkrtm-L",
            rentImg1:"https://public.wutongwan.org/public-20180329-Fr_Hm0PcDlWdGY24bSKuFlXYyxLS",
            rentImg2:"https://public.wutongwan.org/public-20180329-Fo25P0K-Ncz1pAOJZSI8nEPg3XqU"
          }],
          rights3:[{
            id:3,
            rentImg:"https://public.wutongwan.org/public-20180402-Ft8Cd_qKwRig0ZZ9w1pHvsyX1VDx",
            rentImg1:"https://public.wutongwan.org/public-20180402-FmvPJmYPZNVess8Y-no1VazwtEqw",
            rentImg2:"https://public.wutongwan.org/public-20180330-Fjnk_FLLdKtsnikGkfB734JrR1Mv"
          }],
          rights4:[{
            id:4,
            rentImg:"https://public.wutongwan.org/public-20180330-Fl1c3PIZy4nR8N6ZdUqcrFA-Jjw4",
            rentImg1:"https://public.wutongwan.org/public-20180330-FpiRfDLKmfVUjBZaEHJDucMHT4o9",
            rentImg2:"https://public.wutongwan.org/public-20180330-FqdyMbmsWDKSEZLgDcUpQgJM1jX5"
          }]

        };
      },
      created() {
         IndexRequest.getHouse(this);
       },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      },
      components: {
        menuBar,
        footerBar
      },

    }
</script>

<style lang="less">
  @import "./index.less";
</style>
