<template>
    <div class="container">
      <div class="user-msg">
        <div class="icn" @click="jumptoset">

        </div>
        <div class="user">
          <div class="photo">

          </div>
          <div class="name">
            魏爸爸
          </div>
        </div>
      </div>
      <!--积分余额 资金金额-->
      <div class="center">
        <div class="integral">
          <div>
            12000000
          </div>
          <span>
            积分余额
          </span>
        </div>
        <div class="money">
          <div>
            ￥12000.00
          </div>
          <span>
            资金金额
          </span>
        </div>
        <div class="line">

        </div>
      </div>

      <!--订单中心、积分明细、资金管理-->
      <div class="bottom">
        <div class="order-form" @click="jumptoordercenter">
          <div class="left" >
            <div class="icn"></div>
            <div class="txt">订单中心</div>
          </div>
          <div class="toright">></div>
        </div>
        <div class="order-form" @click="jumptointergralquery">
          <div class="left">
            <div class="icn" style="background: #FF8A00 " ></div>
            <div class="txt">积分查询</div>
          </div>
          <div class="toright">></div>
        </div>
        <div class="order-form">
          <div class="left" @click="jumptomoneyquery">
            <div class="icn" style="background:#FF6472"></div>
            <div class="txt">资金管理</div>
          </div>
          <div class="toright">></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "mine",
        methods:{
          jumptoordercenter(){
            this.$router.push({path:'ordercenter'})
          },
          jumptointergralquery(){
            this.$router.push({path:'integralquery'})
          },
          jumptomoneyquery(){
            this.$router.push({path:'moneyquery'})
          },
          jumptoset(){
            this.$router.push({path:'set'})
          }
        }
    }
</script>

<style scoped lang="less">
  .container{
    background: #F3F3F3;
    width: 100%;
    height: 100%;
    font-size: .36rem;
    .user-msg{
      width: 100%;
      height: 3.56rem;
      background:#FF9E52;
      position: relative;
      color: #ffffff;
      .icn{
        width:.4rem;
        height: .4rem;
        background: #ffffff;
        position: absolute;
        right: .3rem;
        top: .3rem;
      }
      .user{
        display: flex;
        align-items: center;
        position: absolute;
        left: .3rem;
        top: .88rem;
       .photo{
         width: 1.2rem;
         height: 1.2rem;
         border-radius: 50%;
         background: plum;
         margin-right: .3rem;
       }
      }
    }
    .center{
      width: 6.9rem;
      height: 1.74rem;
      background: #ffffff;
      border-radius: 16px;
      position: absolute;
      top: 2.5rem;
      left: 0;
      right: 0;
      margin: auto;
      display: flex;
      align-items: center;
      text-align: center;
      font-size: .48rem;
      span{
        color: #989898;
        font-size: .24rem;
      }
      .integral{
        position: absolute;
        left: .86rem;
      }
      .money{
        position: absolute;
        right: .5rem;
      }

    }
    .line{
      width:1px;
      height:60px;
      background:#D7D7D7;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;

    }
    .bottom{
      width: 6.9rem;
      height: 4.2rem;
      background: #ffffff;
      border-radius: 24px;
      margin: 1rem auto 0 auto;
      .order-form{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 33.33%;
        .left{
          display: flex;
          align-items: center;
        }
        .icn{
          width: .28rem;
          height: .36rem;
          background: blue;
          margin-right: .3rem;
          margin-left: .3rem;
        }
        .toright{
          margin-right: .6rem;
        }
      }
    }
  }
</style>
