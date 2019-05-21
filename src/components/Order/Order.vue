<template>
    <div class="container">
      <div class="top">
        <div class="ordernum">
          <div style="font-size: .24rem">订单号：{{list.ordernum}}</div>
          <div style="font-size: .2rem;color: #989898">{{list.date}}</div>
        </div>
        <div class="top-center">
          <img :src="list.imgUrl" alt="">
          <div>
            <div style="margin-bottom: .18rem">{{list.name}}</div>
            <div style="color: #989898;font-size: .24rem">数量x{{list.count}}</div>
          </div>
        </div>
        <div class="user-info">
          <div class="user">
            <div>收件人：魏爸爸</div>
            <div>1888888888888</div>
          </div>
          <div style="margin-top: .3rem">
            收货地址:啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
          </div>
        </div>
      </div>
      <div class="line">

      </div>
      <div class="address">
        <div>订单状态：已发货</div>
        <div>物流公司：顺丰速递</div>
        <div>快递单号{{list.ordernum}}</div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Order",
      data(){
        return {
          list:{
            ordernum: 78347238847873,
            imgUrl: 'http://img2.imgtn.bdimg.com/it/u=3421823110,2921944670&fm=26&gp=0.jpg',
            date: '2019-08-01 19:21:13',
            name: 'Apple',
            count: 1,
            status: '待发货',
            id: 1
          }
        }
      }
    }

</script>

<style scoped lang="less">
  .container{
    width: 100%;
    height: 100%;
    background: #F3F3F3;
    font-size: .32rem;
    position: relative;
    .top{
      width: 100%;
      height: 4.26rem;
      padding: .3rem;
      background: #ffffff;
      box-sizing: border-box;
      img{
        width: 1.5rem;
        height: 1.5rem;
        margin-top: .28rem;
        margin-right: .3rem;
      }
      .ordernum{
        display: flex;
        justify-content: space-between;
      }
      .top-center{
        display: flex;
        align-items: center;
      }
    }
    .line{
      width: 7.2rem;
      height: 1px;
      background: #D7D7D7;
      position: absolute;
      top: 2.72rem;
      right: 0;
    }
    .user-info{
      margin-top: .62rem;
      color: #989898;
      font-size: .24rem;
      .user{
        display: flex;
        justify-content: space-between;
      }
    }
    .address{
      width: 100%;
      height: 1.64rem;
      padding: .3rem;
      box-sizing: border-box;
      background: #ffffff;
      margin-top: .3rem;
      color: #989898;
      font-size: .2rem;
      div{
        margin-bottom: .1rem;
      }
    }
  }
</style>
