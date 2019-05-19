<template>
  <div class="container">
    <div class="top">
      <div style="padding-top: .38rem">资金管理</div>
      <div style="margin-top: .5rem;font-size: .8rem;font-weight: 800">￥120000</div>
      <div style="margin-top: .8rem">当前账户资金</div>
    </div>
    <div class="two-icon">
      <div class="left">
        <div class="icon"></div>
        <div>我要提现</div>
      </div>
      <div class="right">
        <div class="icon"></div>
        <div>提现记录</div>
      </div>
      <div class="line">

      </div>
    </div>
    <div class="next">
      <div style="margin-left:.3rem">资金明细</div>

    </div>
    <div class="from-list">
      <div class="list-tap">
        <div>平台发放</div>
        <div>积分提现</div>
        <div>兑换商品</div>
      </div>
      <div class="type" v-for="item in list">
        <div class="left">
          <div style="font-size: .3rem">{{item.type}}</div>
          <div style="font-size:.22rem;color:#989898 ">{{item.date}}</div>
        </div>
        <div class="right">
          {{item.num}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "moneyquery",
    data(){
      return{
        list:[{
          type:"提现",
          date:'2018-09-10 10:09:12',
          num:'+ 2000.00'
        },
          {
            type:"提现",
            date:'2018-09-10 10:09:12',
            num:'+ 2000.00'
          },
          {
            type:"积分售出",
            date:'2018-09-10 10:09:12',
            num:'- 500.00'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    height: 100%;
    font-size: .36rem;
    background: #F3F3F3;
    .top{
      box-sizing: border-box;
      background: #FFA554;
      width: 100%;
      height: 4.36rem;
      text-align: center;
      color: #ffffff;
    }
    .two-icon{
      width: 100%;
      height: 1.6rem;
      display: flex;
      justify-content: space-around;
      position: relative;
      background: #ffffff;
      margin-bottom: .24rem;
      .icon{
        width: .4rem;
        height: .36rem;
        background: orange;
        margin: .22rem auto .22rem auto;
      }
      .left{

      }
      .right{

      }
      .line{
        position: absolute;
        top: 0;
        bottom:0;
        left: 0;
        right: 0;
        margin: auto;
        width: 1px;
        height: 1rem;
        background: #D7D7D7;
      }
    }
    .next{
      width: 100%;
      height: 1.2rem;
      background: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;

    }
    .from-list{
      width: 100%;
      .list-tap{
        width: 100%;
        height: .78rem;
        background: #ffffff;
        color:#989898;
        font-size: .28rem;
        display: flex;
        justify-content: space-around;
        margin-top: .3rem;
        line-height: .78rem;
      }
      .type{
        width: 100%;
        background: #ffffff;
        display: flex;
        padding: .26rem .3rem .26rem .3rem;
        box-sizing: border-box;
        position: relative;
        border-bottom: 1px solid #F3F3F3;
        .left{
          color: #323232;
        }
        .right{
          position: absolute;
          right: .5rem;
        }
      }
    }
  }
</style>
