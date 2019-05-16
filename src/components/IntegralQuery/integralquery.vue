<template>
  <div class="container">
    <div class="top">
      <div style="padding-top: .38rem">积分市场</div>
      <div style="margin-top: .5rem;font-size: .8rem;font-weight: 800">120000</div>
      <div style="margin-top: .8rem">当前账户积分</div>
    </div>
    <div class="next">
      <div style="margin-left:.3rem">积分明细</div>
      <div style="margin-right:.3rem" class="btn">提现记录</div>
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
        name: "integralquery",
        data(){
          return{
            list:[{
              type:"平台发放",
              date:'2018-09-10 10:09:12',
              num:'+ 2000.00'
            },
              {
                type:"他人转入",
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
    .next{
      width: 100%;
      height: 1.2rem;
      background: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input{
        text-align: right;
      }
      .btn{
        margin-right: 0.3rem;
        width: 1.8rem;
        height: .6rem;
        line-height: .6rem;
        font-size: .24rem;
        text-align: center;
        background:linear-gradient(90deg,rgba(255,165,84,1) 0%,rgba(253,133,73,1) 100%);
        color: #ffffff;
        border-radius: 30px;
        font-weight: normal;
      }
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
