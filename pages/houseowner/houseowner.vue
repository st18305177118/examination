<template>
    <div class="index">
      <div style="height: 60px"><menuBar/></div>
      <div class="banner">
        <div class="pc ban">
          <img src="//public.wutongwan.org/public-20180531-FltEWH-75tF4qw5tUk2qpydWuXg_" alt="业主加盟图片" title="业主加盟-租金随行就市，开启全新房屋托管模式" width="640" height="650">
        </div>
        <div class="entrust_btn">
          <el-button  type="primary" style="width: 160px;top: 100px;height:50px" round @click="dialogVisible=true">立即委托</el-button>
          <el-dialog
            :visible.sync="dialogVisible"
            width="30%">
            <el-form :model="form">
              <el-form-item >
                <span style="font-size: 18px">我有房子要委托出租</span>
              </el-form-item>
              <el-form-item >
                <el-input v-model="form.name" placeholder="请输入您的姓名"></el-input>
              </el-form-item>
              <el-form-item >
                <el-input v-model="form.phone" placeholder="请输入您的手机号"></el-input>
              </el-form-item>
              <el-form-item >
                <el-input v-model="form.placename" placeholder="所在小区名称"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即委托</el-button>
              </el-form-item>
            </el-form>

          </el-dialog>
        </div>
      </div>
      <div class="m-sws center">
        <div class="tit">
          <div class="m-title-h2">
            <h2>简单4步 做省心房东</h2>
            <p class="english-title">NEEDS FOUR SIMPLE STEEPS</p>
          </div>
          <p class="desc pc">不要再做忙碌的房东，经常找租客，找维修，找增值途径...</p>
          <p class="desc mobile">房屋出租交给蛋壳公寓，做省心房东</p>
        </div>

        <ul class="steps">
          <li class="l1">
            <span class="name">意向沟通</span>
          </li>
          <li class="l2">
            <span class="name">实勘测量</span>
          </li>
          <li class="l3">
            <span class="name">合作签约</span>
          </li>
          <li class="l4">
            <span class="name">坐享收益</span>
          </li>
        </ul>
      </div>
      <div class="earnings-guide center">
        <div class="tit">
          <div class="m-title-h2">
            <h2>业主收益指南</h2>
            <p class="english-title">REVENUE GUIDE</p>
          </div>
        </div>
        <div class="guide-swiper">

            <el-carousel class="carousel" indicator-position="outside">
              <el-carousel-item class="item" v-for="item in items" :key="item.id">
                <div class="title">
                  <h3>{{item.h1}}</h3>
                  <p>{{item.p1}}</p>
                  <p>{{item.p2}}</p>
                  <p>{{item.p3}}</p>
                </div>
              </el-carousel-item>
              <el-carousel-item class="item" v-for="item1 in items1" :key="item1.id">
                <div class="title">
                  <h3>{{item1.h2}}</h3>
                  <p>{{item1.p4}}</p>
                  <p>{{item1.p5}}</p>
                  <p>{{item1.p6}}</p>
                </div>
              </el-carousel-item>
              <el-carousel-item class="item" v-for="item2 in items2" :key="item2.id">
                <div class="title">
                  <h3>{{item2.h3}}</h3>
                  <p>{{item2.p7}}</p>
                  <p>{{item2.p8}}</p>
                </div>
              </el-carousel-item>

            </el-carousel>

        </div>
      </div>
      <div class="service">
        <el-button class="service-btn"  type="primary"  round @click="dialogVisible=true" >立即委托</el-button>
        <el-dialog
          :visible.sync="dialogVisible"
          width="30%">
          <el-form :model="form">
            <el-form-item >
              <span style="font-size: 18px">我有房子要委托出租</span>
            </el-form-item>
            <el-form-item >
              <el-input v-model="form.name" placeholder="请输入您的姓名"></el-input>
            </el-form-item>
            <el-form-item >
              <el-input v-model="form.phone" placeholder="请输入您的手机号"></el-input>
            </el-form-item>
            <el-form-item >
              <el-input v-model="form.placename" placeholder="所在小区名称"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即委托</el-button>
            </el-form-item>
          </el-form>

        </el-dialog>
        <p class="p1">房屋托管 首选蛋壳</p>
        <p class="p2">400-062-8688</p>
        <p class="p3">服务时间：9:00 - 21:00(节假日照常)</p>
      </div>

      <div><footerBar/></div>
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
          activeIndex: '6',
          items:[
            {
            id:1,
            h1:'甩手掌柜',
            p1:'蛋壳保证与业主签署合同后及时打款。',
            p2:'在房屋整个租期内，有蛋壳专业管家打理，省心省力，坐享收益。',
            p3:'房屋升级改造，配置全套家具、家电，实现高额增值服务。'
          }
          ],
          items1:[{
            id:2,
            h2:'省时省心',
            p4:'蛋壳提供“一站式全程托管”服务。',
            p5:'在租期内出现的任何生活、物业问题，将由蛋壳管家进行解决，让您省时省心。',
            p6:'蛋壳将至少每两周对公共区域进行保洁和物品检查，将最大程度的维护房屋安全和保障。'
          }],
          items2:[{
            id:3,
            h3:'安全无忧',
            p7:'出租人群严格筛选，高素质租户。',
            p8:'租约结束后，蛋壳会为您的房子做深度保洁。'
          }],
         dialogVisible:false,
           form: {
          name: '',
            phone: '',
            placename: ''

        }
        }
      },
      methods: {
        onSubmit() {
          console.log('submit!'),
            this.$message({
              message:'恭喜你，委托成功',
              type:'success',
              duration:3000,
              center: true,
            });
        }
      }
    }
</script>

<style lang="less">
@import "./houseowner.less";
</style>
