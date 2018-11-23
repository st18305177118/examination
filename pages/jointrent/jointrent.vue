<template>
  <div class="index">
    <div style="height: 60px">
      <menu-bar/>
    </div>
    <div class="page-j-rent">
      <div class="m-jr-1">
        <img src="//public.wutongwan.org/public-20180328-FvP1tY8thwP8eMh2RoKniuN0CUZN"
             title="租房，合租" alt="高品质合居图片">
        <p>十口相传为“古”，三口相传为“合”。生活在茫茫都市中的人被动或主动的选择<br>了“合租”生活，但往往内心却仍然偏爱着一点点孤独...</p>
      </div>
      <div class="m-jr-2">
        <div class="w1032 rel">
          <div class="sea-text">
            <img src="https://public.wutongwan.org/public-20180627-FgiMfQEFo6sXzm1ds_fi-Q4MECjC" title="租房，合租"
                 alt="蛋壳合居产品说明图片">
            <p class="sea-mn"> 租住的日子里，由于东西太多，总是会把生活堆积的乱糟糟的。 在你奋斗的岁月里，也许会发现东西越来越多，每一件物品，乃至一
              个玩偶，也许都曾让你开怀大笑的瞬间。正是这些素材的累积，塑造 了一个个生动形象的生活。颜色明快的房间，专属于你的私人订制。</p>
          </div>
          <img class="who-sea" src="https://public.wutongwan.org/public-20180627-FtMfCpteYDEX3YX45Yutc5OM697Z"
               alt="首席设计师图片">
        </div>
      </div>

      <div class="m-jr-3">
        <div class="ele-tit">
          <div class="tit-img"><img src="//public.wutongwan.org/public-20180313-FlRCdwx0nt7l8erKoCqTG1Vfl7TR"
                                    alt="MUJI风格房源图片"></div>
          <div class="tit-h2">MUJI风——质朴无华、极简主义</div>
        </div>
        <!-- 3/4 style-->
        <div class="m-jr-sample">
          <div class="w1032 clearfix">
            <div class="sample-narrow">
              <img src="//public.wutongwan.org/public-20180330-FiQywMrmD5aQ4svTpYIfG3RIi4E3" title="租房，合租"
                   alt="MUJI风格房源图片">
              <div class="narrow-text">
                <h2><span>MUJI风格</span></h2>
                <div class="os scroll">
                  <p>
                    素雅MUJI风：它遵循统一设计理念所产生出来的商品无不诠释着“无印良品”的品牌形象，它所倡导的简约、质朴、回归大自然的生活方式也受品味人士的推崇。它是日本设计中“禅的美学”的代表也是极简主义美学设计风格的代表。每一种色彩给人的心理感受是不同的；muji风的设计贴近自然，朴实无华。白色：具有纯净，明快纯真的感受；灰色：具有高雅，温和，平凡和中庸的感受；米色：具有原始，自然，天然和健康的感受。</p>
                </div>
              </div>
            </div>
            <div class="sample-wide right">
              <div class="w460"><img src="//public.wutongwan.org/public-20180330-Fhjuy3e7wPPxiy9aHl2dj22Je6rQ"
                                     title="租房，合租" alt="MUJI风格房源图片"></div>
              <div class="w202"><img src="//public.wutongwan.org/public-20180330-FkAA0S7wQ3iX9ga8GsWZVYMP9zuD"
                                     title="租房，合租" alt="MUJI风格房源图片"></div>
              <div class="w202"><img src="//public.wutongwan.org/public-20180330-FsYMuCLIWHKZH9vE_rGQPwdfio8m"
                                     title="租房，合租" alt="MUJI风格房源图片"></div>
              <div class="w460"><img src="//public.wutongwan.org/public-20180330-FipXrklTcTCjzJenjGonZqJUMndY"
                                     title="租房，合租" alt="MUJI风格房源图片"></div>
            </div>
          </div>
        </div>
        <!-- 3/4 style end -->
      </div>

      <div class="index-box">
        <div class="box-center">
          <div class="box-title">
            <div class="box-title-fl">
              <h1>
                <span><b>合·居</b>&nbsp;MUJI风格房源</span>
              </h1>
              <p>我们造就的别致，只为不愿将就的你</p>
            </div>
          </div>
        </div>

        <div class="choice">
          <el-row>
            <el-col :span="8" v-for="Jrent in Jrents" :key="Jrent.id" :offset="0">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <div class="J-img"><img :src="Jrent.rentImg"></div>
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
          <nuxt-link style="text-decoration: none" :to="{name: 'findHouse-Fhouse'}">
            <el-button type="primary" style="width: 250px;top: 100px;height:50px" round>更多房源</el-button>
          </nuxt-link>
        </div>

      </div>

      <div class="m-jr-4">
        <div class="ele-tit">
          <div class="in-bl">
            <div class="tit-img"><img src="//public.wutongwan.org/public-20180313-Fvc0_20jl8uFm9Ict-eXbCXid0lX"
                                      title="租房，合租" alt="工业风格房源图片"></div>
            <div class="tit-h2">工业风——复古的艺术范儿</div>
          </div>
        </div>

        <!-- 3/4 style-->
        <div class="m-jr-sample">
          <div class="w1032 clearfix">

            <div class="sample-wide left">
              <div class="w460"><img src="//public.wutongwan.org/public-20180328-Fuq1xZ5So8Bp_QALo5tHnTXpF5Wl"
                                     title="租房，合租" alt="工业风格房源图片"></div>
              <div class="w202"><img src="//public.wutongwan.org/public-20180328-Fszm8jzUegJvV9tWuXiM6OSt8Byk"
                                     title="租房，合租" alt="工业风格房源图片"></div>
              <div class="w202"><img src="//public.wutongwan.org/public-20180328-Fs3n3WBfzG9Wl6mUO6UZKh_sEdR7"
                                     title="租房，合租" alt="工业风格房源图片"></div>
              <div class="w460"><img src="//public.wutongwan.org/public-20180328-FiX78p6UxEjVfr_ZfWqnhi5TUwce"
                                     title="租房，合租" alt="工业风格房源图片"></div>
            </div>
            <div class="sample-narrow">
              <img src="//public.wutongwan.org/public-20180328-Ft1rmg4nqwCnlgRV5mn7EFbWmB8B" alt="工业风格房源图片">
              <div class="narrow-text">
                <h2><span>工业风格</span></h2>
                <div class="os scroll">
                  <p>
                    工业风格是近年来室内装修设计中一股颇受追捧的一股风潮。它起源于将废旧的工业厂房或仓库改建成带居住功能的艺术家工作室。这种亮敞开放的LOFT房子的内部装修往往保留来原有工厂的部门风貌，如裸露的墙砖，质朴的木质横梁，以及暴露的金属管道等产业痕迹。逐渐的，这类有着复古和颓废艺术范的格调成为一种风格，散发着硬朗的旧工业气息。跟工业风经常同时出现的LOFT风格发源地都是在纽约SOHO区，建筑原地址也基本是19世纪末的工厂。</p>
                  <p>发展到后来，考虑到并没有那么多工厂可以用，于是转向保留工厂味道的「硬朗」「厚重」的材质和元素，例如黑色金属制造而成家具，裸露的电线和管道，有痕迹的木质家具都别具一格的展示在蛋壳公寓。</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <!-- 3/4 style end -->
      </div>

      <div class="index-box">
        <div class="box-center">
          <div class="box-title">
            <div class="box-title-fl">
              <h1>
                <span><b>合·居</b>&nbsp;MUJI风格房源</span>
              </h1>
              <p>我们造就的别致，只为不愿将就的你</p>
            </div>
          </div>
        </div>

        <div class="choice">
          <el-row>
            <el-col :span="8" v-for="Jrent in Jrents" :key="Jrent.id" :offset="0">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <div class="J-img"><nuxt-link style="text-decoration: none" :to="{name:'houseinformation-houseinformation'}"><img :src="Jrent.rentImg"></nuxt-link></div>
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
          <nuxt-link style="text-decoration: none" :to="{name: 'findHouse-Fhouse'}">
            <el-button type="primary" style="width: 250px;top: 100px;height:50px" round>更多房源</el-button>
          </nuxt-link>
        </div>

      </div>
    </div>
    <div>
      <footerBar/>
    </div>
  </div>
</template>

<script>
  import menuBar from '../../components/menu/menu'
  import footerBar from '../../components/footer/footer'

  export default {
    name: "jointrent",
    methods: {},

    components: {
      menuBar,
      footerBar
    },
    data() {
      return {
        activeIndex: '3',
        Jrents: [
          {
            id: 1,
            rentImg: "https://public.wutongwan.org/public-20180806-FuCjPXzmOWkn46ynTyh63o6lA3qK-roomPcList.jpg",
            price: 1458,
            describe: '马群 中垠紫金观邸 主卧 朝西 D室'
          },
          {
            id: 2,
            rentImg: "https://public.wutongwan.org/public-20180806-FuCjPXzmOWkn46ynTyh63o6lA3qK-roomPcList.jpg",
            price: 1458,
            describe: '马群 中垠紫金观邸 主卧 朝西 D室'
          },
          {
            id: 3,
            rentImg: "https://public.wutongwan.org/public-20180806-FuCjPXzmOWkn46ynTyh63o6lA3qK-roomPcList.jpg",
            price: 1458,
            describe: '马群 中垠紫金观邸 主卧 朝西 D室'
          },
          {
            id: 4,
            rentImg: "https://public.wutongwan.org/public-20180806-FuCjPXzmOWkn46ynTyh63o6lA3qK-roomPcList.jpg",
            price: 1458,
            describe: '马群 中垠紫金观邸 主卧 朝西 D室'
          },
          {
            id: 5,
            rentImg: "https://public.wutongwan.org/public-20180806-FuCjPXzmOWkn46ynTyh63o6lA3qK-roomPcList.jpg",
            price: 1458,
            describe: '马群 中垠紫金观邸 主卧 朝西 D室'
          },
          {
            id: 6,
            rentImg: "https://public.wutongwan.org/public-20180806-FuCjPXzmOWkn46ynTyh63o6lA3qK-roomPcList.jpg",
            price: 1458,
            describe: '马群 中垠紫金观邸 主卧 朝西 D室'
          }
        ]
      }
    }
  }
</script>

<style lang="less">
  @import "./jointrent.less";
</style>
