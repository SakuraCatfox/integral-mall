<template>
    <div class="container">
      <div class="top">
        <div style="padding-top: .38rem">积分市场</div>
        <div style="margin-top: .5rem;font-size: .8rem;font-weight: 800">120000</div>
        <div style="margin-top: .8rem">当前账户积分剩余</div>
      </div>
      <div class="next">
        <div style="margin-left:.3rem">售出积分</div>
        <input type="text" placeholder="请输入要售出的积分" style="margin-right:.3rem">
      </div>
      <div class="btn">
        确认售出积分
      </div>
      <div style="color: #989898;margin-left:.3rem;font-size: .24rem">
        了解积分售卖规则
      </div>
      <div class="txt">
        叭叭叭叭叭叭
      </div>
    </div>
</template>

<script>
    export default {
        name: "intergral"
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
    }
    .btn{
      width: 6.9rem;
      height: .98rem;
      line-height: .98rem;
      text-align: center;
      background: #FFA554;
      color: #ffffff;
      margin: .6rem auto;
    }
    .txt{
      width: 100%;
      height: 2.26rem;
      background: #ffffff;
      padding: .2rem;
      box-sizing: border-box;
      margin-top: .2rem;
      font-size: .24rem;
      color: #323232;
    }
  }
</style>
