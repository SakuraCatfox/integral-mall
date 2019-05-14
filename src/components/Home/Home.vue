<template>
  <div class="container">
    <!--头部-->
    <div class="title">
      <div>x</div>
      <div>积分商城</div>
      <div>···</div>
    </div>
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
    <div class="articles" v-show="isShowRecommend">
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
    </div>
    <!--新品-->
    <div class="articles" v-show="isShowNews">
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">新品</div>
        <div class="money">200积分</div>
      </div>

    </div>
    <!--居家-->
    <div class="articles" v-show="isShowLiving">
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">居家</div>
        <div class="money">200积分</div>
      </div>
    </div>
    <!--电器-->
    <div class="articles" v-show="isShowElectronics">
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
    </div>
    <!--洗护-->
    <div class="articles" v-show="isShowDaily">
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
    </div>
    <!--饮食-->
    <div class="articles" v-show="isShowFoods">
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
    </div>
    <!--限时商品-->
    <div class="articles" v-show="isShowTimeLimit">
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
      </div>
      <div class="article">
        <img src="./imgs/images1.png" alt="">
        <div class="name">天然乳胶枕</div>
        <div class="money">200积分</div>
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
        isShowRecommend:true,
        isShowNews:false,
        isShowLiving:false,
        isShowElectronics:false,
        isShowDaily:false,
        isShowFoods:false,
        isShowTimeLimit:false,

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
      let wrapper = document.querySelector('.articles')
      let scroll = new BScroll(wrapper)
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
  .container {
    font-size: .36rem;
    .title {
      height: .88rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 .16rem;
      box-sizing: border-box;
    }
    .search {
      width: 100%;
      height: .88rem;
      padding: .3rem;
      box-sizing: border-box;
      input {
        width: 6.9rem;
        height: .6rem;
        background: #EDEDED;
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
      height: .68rem;
      font-size: .28rem;
      padding: .2rem;
      box-sizing: border-box;
      font-size: .28rem;

      .txt {
        overflow-x: auto;
        display: flex;
        div {
          width: 2rem;
          margin-right: .4rem;
        }
      }
    }
    .swiper-container {
      height: 3.6rem;
      background: pink;
    }
    .ctxt {
      width: 100%;
      height: .88rem;
      display: flex;
      justify-content: space-around;
      color: #686868;
      font-size: .24rem;
      img {
        width: .24rem;
        height: .24rem;
        margin-right: .1rem;
      }
      .fle {
        display: flex;
        align-items: center;

      }
    }
    .articles{
      padding: .3rem .3rem 0 .3rem;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      box-sizing: border-box;
      height: 8rem;
      overflow: scroll;
      .article{
        margin-top: .3rem;
        img{
          width: 2.1rem;
          height: 2.1rem;
        }
        .name{
          font-size:.24rem;
        }
        .money{
          color: #FE864C;
          font-size:.24rem;
        }
      }
    }

  }
</style>
