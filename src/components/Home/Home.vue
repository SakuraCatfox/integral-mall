<template>
  <div class="container">
    <div class="header">
      <!--搜索框-->
      <div class="search">
        <input type="text" placeholder="搜索商品,共31238123款">
      </div>
      <!--tap切换-->
      <div class="tap" ref="tap">
        <div class="txt">
          <div>推荐</div>
          <div>新品</div>
          <div>居家</div>
          <div>电器</div>
          <div>洗护</div>
          <div>饮食</div>
          <div>限时商品</div>
        </div>
      </div>
    </div>
    <!--Bscroll滚动区域-->
    <div class="scroll-wrapper" ref="wrapper">
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
        <!--物品-->
        <div class="articles"  >
          <div class="article" v-for="item in list" @click="jumptoproductdetails(item.id)">
            <img :src="item.imgUrl" alt="">
            <div class="name">{{item.name}}</div>
            <div class="money">{{item.price}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.css'
  import BScroll from 'better-scroll'
  export default {
    name: "Home",
    data(){
      return{
        list:[
          {
            imgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2327746252,2179456318&fm=26&gp=0.jpg',
            name:'商品1',
            price:4500,
            id:1,
          },
          {
            imgUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2476194888,4290783802&fm=26&gp=0.jpg',
            name:'商品2',
            price:47200,
            id:2,

          }
          , {
            imgUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3157567589,2647817933&fm=26&gp=0.jpg',
            name:'商品3',
            price:262330,
            id:3,
          }
          , {
            imgUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2620291091,1639543135&fm=26&gp=0.jpg',
            name:'商品3',
            price:180330,
            id:4,
          }
          , {
            imgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1204343166,70149784&fm=26&gp=0.jpg',
            name:'商品4',
            price:97233,
            id:5,
          }
          , {
            imgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1726309332,192696640&fm=26&gp=0.jpg',
            name:'商品5',
            price:678123,
            id:6,
          }
          , {
            imgUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=789324485,2295523873&fm=26&gp=0.jpg',
            name:'商品6',
            price:31233,
            id:7,
          }, {
            imgUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1643083994,177811625&fm=26&gp=0.jpg',
            name:'商品7',
            price:28422,
            id:8,
          }
        ],
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
=======
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css'
import BScroll from 'better-scroll'
export default {
  name: "Home",
  data() {
    return {
      list: [
        {
          imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2327746252,2179456318&fm=26&gp=0.jpg',
          name: '商品1',
          price: 4500
        },
        {
          imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2476194888,4290783802&fm=26&gp=0.jpg',
          name: '商品2',
          price: 47200
>>>>>>> 9452bba46282d9e1c82728752409afa5b2d367d6
        }
      })
      let wrapper=this.$refs.wrapper
      let tap=this.$refs.tap
      let scroll1=new BScroll(wrapper,{
        click:true
      })
      let scroll2=new BScroll(tap,{
        scrollX: true,
        click: true
      })
    },
    methods:{
      jumptoproductdetails(itemId){
        console.log('jumptoproductdetails',itemId)
        this.$router.push({path:`/productdetails/${itemId}`})
      },
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
    let wrapper = this.$refs.wrapper
    let tap = this.$refs.tap
    let scroll1 = new BScroll(wrapper)
    let scroll2 = new BScroll(tap, {
      scrollX: true,
      click: true
    })
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  font-size: 0.36rem;
  padding-top: 1.76rem;
  padding-bottom: 0.98rem;
  box-sizing: border-box;
  .header {
    position: fixed;
    top: 0;
    z-index: 99;
    background: #ffffff;
    .title {
      height: 0.88rem;
      display: flex;
      align-items: center;
      padding: 0 0.16rem;
      box-sizing: border-box;
    }
  }
  .articles {
    padding: 0.3rem 0.3rem 0 0.3rem;
    width: 100%;
    height: 100%;
    font-size: .36rem;
    padding-top: 1.76rem;
    padding-bottom: .98rem;
    box-sizing: border-box;
    .header{
      position: fixed;
      top: 0;
      z-index: 99;
      background: #ffffff;
      .title {
        height: .88rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .16rem;
        box-sizing: border-box;
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
      padding: 0.2rem 0 0.2rem 0.2rem;
      box-sizing: border-box;
      font-size: 0.28rem;
      margin-top: 0.2rem;
      .txt {
        overflow-x: auto;
        display: flex;
        width: 100%;
        div {
          margin-right: 0.4rem;
          &:nth-last-child {
            margin-right: 0;
          }
        }
      }
    }
  }

  .scroll-wrapper {
    width: 100%;
    height: 100%;
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
        margin-right: 0.3rem;
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
}
</style>

