<template>
  <div class="home">
    <section class="upper">
      <!--搜索框-->
      <div class="search">
        <input type="text" placeholder="搜索商品,共31238123款">
      </div>
      <!--tap切换-->
      <div class="tap">
        <div class="txt">
          <div @click="changeshow(1)">推荐</div>
          <div @click="changeshow(2)">新品</div>
          <div @click="changeshow(3)">居家</div>
          <div @click="changeshow(4)">电器</div>
          <div @click="changeshow(5)">洗护</div>
          <div @click="changeshow(6)">饮食</div>
          <div @click="changeshow(7)">限时商品</div>
        </div>
      </div>
    </section>
    <div class="container" ref="scrollWrapper">
      <div class="scroll-content">
        <!--轮播图-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">图 1</div>
            <div class="swiper-slide">图 2</div>
            <div class="swiper-slide">图 3</div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <div class="ctxt">
          <div class="fle">
            <img src="./imgs/ic_exchange.png" alt="">
            <div>积分兑换</div>
          </div>
          <div class="fle">
            <img src="./imgs/ic_exchange.png" alt="">
            <div>正品保障</div>
          </div>
          <div class="fle">
            <img src="./imgs/ic_exchange.png" alt="">
            <div>实时发货</div>
          </div>
        </div>
        <!--物品滑动区域-->
        <!--推荐-->
        <div class="articles">
          <div class="article" v-for="(item,i) in list">
            <img :src="item.imgSrc" alt="">
            <div class="name">{{item.name}}</div>
            <div class="money">{{item.price}}积分</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.css'
  import BScroll from 'better-scroll'
  console.log(BScroll)

  export default {
    name: "Home",
    data(){
      return{
        list:[
          {
          imgUrl:'xxxxxx',
          name:'商品1',
          price:200,
        },
        {
          imgUrl:'xxxxxx',
          name:'商品2',
          price:200,
        },{
          imgUrl:'xxxxxx',
          name:'商品3',
          price:200,
        },{
          imgUrl:'xxxxxx',
          name:'商品4',
          price:200,
        },{
          imgUrl:'xxxxxx',
          name:'商品5',
          price:200,
        },{
          imgUrl:'xxxxxx',
          name:'商品5',
          price:200,
        },{
          imgUrl:'xxxxxx',
          name:'商品5',
          price:200,
        },{
          imgUrl:'xxxxxx',
          name:'商品5',
          price:200,
        },{
          imgUrl:'xxxxxx',
          name:'商品5',
          price:200,
        },{
          imgUrl:'xxxxxx',
          name:'商品5',
          price:200,
        },{
          imgUrl:'xxxxxx',
          name:'商品5',
          price:200,
        }
        ],
      }
    },
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      })
      let scroll = new BScroll(this.$refs.scrollWrapper)
      console.log(scroll)
    },
    methods:{
      changeshow(type){
        console.log(type)
        if (type==1){
        //  推荐
            this.isShowRecommend=true,
            this.isShowNews=false,
            this.isShowLiving=false,
            this.isShowElectronics=false,
            this.isShowDaily=false,
            this.isShowFoods=false,
            this.isShowTimeLimit=false

        } else if(type==2){
        //  新品
            this.isShowRecommend=false,
            this.isShowNews=true,
            this.isShowLiving=false,
            this.isShowElectronics=false,
            this.isShowDaily=false,
            this.isShowFoods=false,
            this.isShowTimeLimit=false
        } else if (type==3){
        //  居家
          this.isShowRecommend=false,
            this.isShowNews=false,
            this.isShowLiving=true,
            this.isShowElectronics=false,
            this.isShowDaily=false,
            this.isShowFoods=false,
            this.isShowTimeLimit=false
        } else if (type==4){
        //  电器
          this.isShowRecommend=false,
            this.isShowNews=false,
            this.isShowLiving=false,
            this.isShowElectronics=true,
            this.isShowDaily=false,
            this.isShowFoods=false,
            this.isShowTimeLimit=false
        } else if (type==5){
        //  洗护
          this.isShowRecommend=false,
            this.isShowNews=false,
            this.isShowLiving=false,
            this.isShowElectronics=false,
            this.isShowDaily=true,
            this.isShowFoods=false,
            this.isShowTimeLimit=false
        } else if (type==6){
        //  饮食
          this.isShowRecommend=false,
            this.isShowNews=false,
            this.isShowLiving=false,
            this.isShowElectronics=false,
            this.isShowDaily=false,
            this.isShowFoods=true,
            this.isShowTimeLimit=false
        } else if (type==7){
        //  限时商品
          this.isShowRecommend=false,
            this.isShowNews=false,
            this.isShowLiving=false,
            this.isShowElectronics=false,
            this.isShowDaily=false,
            this.isShowFoods=false,
            this.isShowTimeLimit=true
        }
      }
    }
  }
</script>

<style scoped lang="less">
@import '../../assets/css/config.less';
h3 {
  color: @text-color;
}
.container {
  font-size: 0.36rem;

  .swiper-container {
    height: 3.6rem;
    background: pink;
  }
  .ctxt {
    width: 100%;
    height: 0.88rem;
    display: flex;
    justify-content: space-around;
    color: #686868;
    font-size: 0.24rem;
    img {
      width: 0.24rem;
      height: 0.24rem;
      margin-right: 0.1rem;
    }
    .fle {
      display: flex;
      align-items: center;
    }
  }
  .articles {
    padding: 0.3rem 0.3rem 0 0.3rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    box-sizing: border-box;
    overflow: scroll;
    .article {
      margin-top: 0.3rem;
      margin-right: 25px;
      &:nth-child(3n) {
        margin-right: 0;
      }
      img {
        width: 2.1rem;
        height: 2.1rem;
      }
      .name {
        font-size: 0.24rem;
      }
      .money {
        color: #fe864c;
        font-size: 0.24rem;
      }
    }
  }
}
</style>
<style lang="less" scoped>
.home {
  height: 100%;
  box-sizing: border-box;
  padding-top: 78px;
  padding-bottom: 49px;
  .upper {
    position: fixed;
    z-index: 99;
    top: 0;
    width: 100%;
    font-size: 14px;
    background: #fff;
    .search {
      width: 100%;
      height: 0.88rem;
      padding: 0.3rem;
      box-sizing: border-box;
      input {
        width: 6.9rem;
        height: 0.6rem;
        background: #ededed;
        outline-style: none;
        outline-width: 0px;
        border: none;
        border-style: none;
        text-shadow: none;
        text-align: center;
      }
    }
    .tap {
      width: 100%;
      height: 0.68rem;
      font-size: 0.28rem;
      padding: 0.2rem;
      box-sizing: border-box;
      font-size: 0.28rem;

      .txt {
        overflow-x: auto;
        display: flex;
        div {
          width: 2rem;
          margin-right: 0.4rem;
        }
      }
    }
  }
  .container {
    height: 100%;
  }
}
</style>

