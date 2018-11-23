<template>
  <div class="index">
    <div style="height: 60px">
      <menuBar/>
    </div>
    <div class="box">
      <div class="sear-menu">
        <el-input class="sear-input"
                  placeholder="请输入内容"
                  v-model="searchKey"
                  clearable>
        </el-input>
        <el-row class="btn">
          <el-button type="primary" @click="$onSearch">搜索</el-button>
        </el-row>
      </div>
    </div>
    <div class="list-wrapper">
      <div class="ls-box">
        <div class="ls-fz">
          <ul>
            <li v-for="Jrent in Jrents" :key="Jrent.id">
              <div class="imgs"><img src="https://public.wutongwan.org/public-20181111-FleFVHtZBv_-9-DbE4rxqkRxltWc?imageView2/1/w/380/h/285"></div>
              <div class="describe">
                <el-row class="btn-fz">
                  <nuxt-link style="text-decoration: none" :to="{name:Jrent.routers}">
                    <el-button type="primary">查看详情</el-button>
                  </nuxt-link>
                </el-row>
                <span><b>￥{{Jrent.houseMoney}}</b>元/月</span>
                <p>{{Jrent.hosePosition}}</p>
                <p>地铁 5号线 / 约15平米</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="recommendation">
      <div class="recommendation-title">
        <span>精品推荐</span>
      </div>
      <div class="recommendation-room">
        <el-row>
          <el-col :span="6" v-for="Jrent in Jrents1" :key="Jrent.id" :offset="0">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="J-img"><img src="https://public.wutongwan.org/public-20181111-FleFVHtZBv_-9-DbE4rxqkRxltWc?imageView2/1/w/380/h/285"></div>
              <div class="describe">
                <span><b>￥{{Jrent.price}}</b>元/月</span>
                <p>{{Jrent.describe}}</p>
                <label>地铁 5号线 / 约15平米 </label>
              </div>
            </el-card>
          </el-col>
        </el-row>
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
  import * as FhouseRequest from '../../assets/request/search'

  export default {
    name: "Fhouse",
    data() {
      return {
        activeIndex: '2',
      }
    },
    data() {
      return {
        searchKey: '', // 关键字查询
        Jrents: [
          {
            id: 1,
            routers: 'houseinformation-houseinformation',
            rentImg: "https://public.wutongwan.org/public-20181111-FleFVHtZBv_-9-DbE4rxqkRxltWc?imageView2/1/w/380/h/285",
            houseMoney: 1458,
            hosePosition: '马群 中垠紫金观邸 主卧 朝西 D室'
          },
          {
            id: 2,
            rentImg: "https://public.wutongwan.org/public-20181111-FleFVHtZBv_-9-DbE4rxqkRxltWc?imageView2/1/w/380/h/285",
            houseMoney: 1458,
            hosePosition: '马群 中垠紫金观邸 主卧 朝西 D室'
          },
          {
            id: 3,
            rentImg: "https://public.wutongwan.org/public-20180806-FuCjPXzmOWkn46ynTyh63o6lA3qK-roomPcList.jpg",
            houseMoney: 1458,
            hosePosition: '马群 中垠紫金观邸 主卧 朝西 D室'
          },
          {
            id: 4,
            rentImg: "https://public.wutongwan.org/public-20180806-FuCjPXzmOWkn46ynTyh63o6lA3qK-roomPcList.jpg",
            houseMoney: 1458,
            hosePosition: '马群 中垠紫金观邸 主卧 朝西 D室'
          },
          {
            id: 5,
            rentImg: "https://public.wutongwan.org/public-20180806-FuCjPXzmOWkn46ynTyh63o6lA3qK-roomPcList.jpg",
            houseMoney: 1458,
            hosePosition: '马群 中垠紫金观邸 主卧 朝西 D室'
          },
          {
            id: 6,
            rentImg: "https://public.wutongwan.org/public-20180806-FuCjPXzmOWkn46ynTyh63o6lA3qK-roomPcList.jpg",
            houseMoney: 1458,
            hosePosition: '马群 中垠紫金观邸 主卧 朝西 D室'
          }
        ],
        Jrents1: [
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
          }
        ]
      }
    },
    components: {
      menuBar,
      footerBar
    },
    methods: {
      $onSearch() {
        FhouseRequest.searchHouse(this)

      }
    }
  }

</script>

<style lang="less">
  @import "./Fhouse.less";
</style>
