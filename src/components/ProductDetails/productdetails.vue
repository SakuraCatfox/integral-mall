<template>
    <div class="container" ref="wrapper">
        <div class="product-instructions" >
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img :src="product.picimg1" alt=""></div>
              <div class="swiper-slide"><img :src="product.picimg2" alt=""></div>
              <div class="swiper-slide"><img :src="product.picimg3" alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <div class="txt-container">
            <div class="txt">{{product.txt}}</div>
            <div class="money">{{product.money}}积分兑换</div>
          </div>
        </div>
        <div class="center">
          <div class="title">——————商品详情——————</div>
          <div class="content">
            <div class="instruction">
              <div class="tit"><span style="color: #FF9854">·</span>{{product.oneinstructions.title}}说明</div>
              <div class="txt">{{product.oneinstructions.txt}}</div>
            </div>
            <div class="instruction">
              <div class="tit"><span style="color: #FF9854">·</span>{{product.oneinstructions.title}}说明</div>
              <div class="txt">{{product.oneinstructions.txt}}</div>
            </div>
            <div class="instruction">
              <div class="tit"><span style="color: #FF9854">·</span>{{product.oneinstructions.title}}说明</div>
              <div class="txt">{{product.oneinstructions.txt}}</div>
            </div>
            <div class="instruction">
              <div class="tit"><span style="color: #FF9854">·</span>{{product.oneinstructions.title}}说明</div>
              <div class="txt">{{product.oneinstructions.txt}}</div>
            </div>
          </div>
        </div>
      <div class="btn" @click="jumptoexchage">
        立即兑换
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.css'
  import BScroll from 'better-scroll'
    export default {
        name: "ProductDetails",
        mounted(){
          var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            }
          })
        },
        data(){
          return{
            product:{
              picimg1:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1643083994,177811625&fm=26&gp=0.jpg',
              picimg2:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3157567589,2647817933&fm=26&gp=0.jpg',
              picimg3:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1726309332,192696640&fm=26&gp=0.jpg',
              txt:'噬元兽，危险系数极高',
              money:200,
              id:this.$route.params.id,
              oneinstructions:{title:'使用',txt:'吸猫一时爽，一直吸猫一直爽，吸猫一时爽，一直吸猫一直爽，吸猫一时爽，一直吸猫一直爽，吸猫一时爽，一直吸猫一直爽'},
              twoinstructions:{title:'使用',txt:'吸猫一时爽，一直吸猫一直爽，吸猫一时爽，一直吸猫一直爽，吸猫一时爽，一直吸猫一直爽，吸猫一时爽，一直吸猫一直爽'},
              threeinstructions:{title:'使用',txt:'吸猫一时爽，一直吸猫一直爽，吸猫一时爽，一直吸猫一直爽，吸猫一时爽，一直吸猫一直爽，吸猫一时爽，一直吸猫一直爽'},
              fourinstructions:{title:'使用',txt:'吸猫一时爽，一直吸猫一直爽，吸猫一时爽，一直吸猫一直爽，吸猫一时爽，一直吸猫一直爽，吸猫一时爽，一直吸猫一直爽'}
            }
          }
        },
      methods:{
         jumptoexchage(){
            this.$router.push({path:`/exchange/${this.id}`})
         }
      }
    }
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    background: #F3F3F3;
      width: 100%;
      height: 100%;
      .product-instructions{
        width: 100%;
        .swiper-container {
          height: 7.6rem;
          background: pink;
          img{
            display: block;
            width: 100%;
            height: 100%;
          }
        }

        .txt-container{
          width: 100%;
          padding:.22rem 0 .14rem .3rem;
          background: #ffffff;
          box-sizing: border-box;
          .txt{
            font-size: .28rem;
            color: #323232;
          }
          .money{
            font-size: .32rem;
            color: #FF9854;
            margin-top: .2rem;
          }
        }
      }
      .center{
        width: 100%;
        padding: .3rem .3rem .98rem .3rem;
        box-sizing: border-box;
        background: #FFFFFF;
        margin-top: .2rem;
        .title{
          width: 100%;
          font-size: .3rem;
          color: #323232;
          text-align: center;
          margin-bottom: .3rem;
        }
        .content{
          margin-bottom: .3rem;
          .instruction{
            margin-bottom: .3rem;
            .tit{
              color: #323232;
              font-size: .24rem;
            }
            .txt{
              color:#989898;
              font-size: .24rem;
            }
          }
        }
      }
      .product-instructions{
        width: 100%;
        .swiper-container {
          height: 7.6rem;
          background: pink;
          img{
            display: block;
            width: 100%;
            height: 100%;
          }
        }

        .txt-container{
          width: 100%;
          padding:.22rem 0 .14rem .3rem;
          background: #ffffff;
          box-sizing: border-box;
          .txt{
            font-size: .28rem;
            color: #323232;
          }
          .money{
            font-size: .32rem;
            color: #FF9854;
            margin-top: .2rem;
          }
        }
      }

    .btn{
      width: 100%;
      height: .98rem;
      line-height: .98rem;
      background:linear-gradient(90deg,rgba(255,165,84,1) 0%,rgba(253,133,73,1) 100%);
      color: #ffffff;
      text-align: center;
      position: fixed;
      bottom: 0;
      font-size: .36rem;
    }
  }
</style>
