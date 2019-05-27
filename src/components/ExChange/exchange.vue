<template>
  <div class="container">
    <div class="user-info">
      <div class="pic"></div>
      <div class="address">
        <div>
          <div>迪丽锅巴爸爸
            <span>158888888888</span>
          </div>
          <div class="dz">北京市北京市北京市北京市北京市北京市北京市北京市</div>
        </div>
      </div>
      <div>
      </div>
    </div>
    <div class="product-info">
      <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1643083994,177811625&fm=26&gp=0.jpg" alt="" class="pic">
      <div class="product">
        <div class="content">噬元兽：大橘为重橘式动荡大橘为重橘式动荡大橘为重橘式动荡，大橘为重橘式动荡</div>
        <div class="money">200积分</div>
        <div class="count">
          <span>数量</span>
          <div class="cot">
            <div class="subtraction" @click="sub">-</div>
            <div class="num">{{num}}</div>
            <div class="add" @click="add">+</div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
    <div class="mine-info">
      <div style="margin-bottom: .18rem">兑换商品需要：
        <span style="color: #FF9854;">
          <span style="font-size: .5rem">{{count}}</span>积分</span>
      </div>
      <div style="color: #989898;font-size: .24rem">您当前账户积分余额为：12000</div>
    </div>
    <div class="Btn">
      <div style="background: #B7B9BB">再等等</div>
      <div style="background:linear-gradient(90deg,rgba(255,165,84,1) 0%,rgba(253,133,73,1) 100%);">确认兑换</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "exchange",
    data(){
      return{
        num:1,
        money:200,

      }
    },
    methods:{
      add(){
        this.num++
      },
      sub(){
        this.num--
      }
    },
    computed:{
      count(){
        return this.num*this.money
      }
    }
  }
</script>

<style scoped lang="less">
  .container {
    width: 100%;
    height: 100%;
    background: #F3F3F3;
    font-size: .3rem;
    color: #323232;
    .user-info {
      width: 100%;
      height: 1.8rem;
      background: #FFFFFF;
      padding: .24rem .2rem .2rem .2rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .pic {
        width: .6rem;
        height: .6rem;
        background: pink;
        margin-right: .3rem;
      }
      .address {
        span {
          font-size: .24rem;
          margin-left: .2rem;
          color: #989898;
        }
        .dz {
          font-size: .24rem;
          margin-top: .16rem;
        }
      }
    }
    .product-info{
      width: 100%;
      height: 2.38rem;
      background: #ffffff;
      margin-top: .18rem;
      padding: .24rem .38rem .2rem .2rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      position: relative;
      .pic {
        width: 1.2rem;
        height: 1.2rem;
        background: pink;
        margin-right: .3rem;
      }
      .product{
        .content{
          font-size: .28rem;
        }
        .money{
          color: #FF9854;
          font-size: .24rem;
          margin-top: .16rem;
        }
        .count{
          display: flex;
          align-items: center;
          font-size: .24rem;
          position: absolute;
          right: .3rem;
          bottom: .3rem;
          span{
            color: #989898;
          }
          .cot{
            display: flex;
            width: 1.52rem;
            height: .44rem;
            background: #ffffff;
            text-align: center;
            line-height: .44rem;
            .subtraction{
              width: .4rem;
              height: 100%;
              border:1px solid rgba(215,215,215,1);
            }
            .num{
              width: .72rem;
              height: 100%;
              border:1px solid rgba(215,215,215,1);
            }
            .add{
              width: .4rem;
              height: 100%;
              border:1px solid rgba(215,215,215,1);
            }
          }
        }
      }
    }
    .mine-info{
      width: 100%;
      height: 1.86rem;
      padding: .3rem 0 .26rem .3rem;
      box-sizing: border-box;
      background: #ffffff;
      margin-top: .2rem;
    }
    .Btn{
      width: 100%;
      position: fixed;
      height: .98rem;
      bottom: 0;
      display: flex;
      align-items: center;
      div{
        width: 50%;
        height: 100%;
        text-align: center;
        color: #ffffff;
        line-height: .98rem;
        font-size: .36rem;
      }
    }
  }
</style>
