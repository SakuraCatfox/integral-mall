<template>
    <div class="container">
<<<<<<< HEAD
      <Tap :options="TapOptions" @change="clickHandler"></Tap>
      <div class="articles" v-for="item in list"  @click="jumptoorder(item.id)">
=======
      <Tap :options="TapOptions" @change="changeHandler"></Tap>
      <div class="articles" v-for="item in list" >
>>>>>>> 9452bba46282d9e1c82728752409afa5b2d367d6
        <div class="article">
          <div class="order-num">
            <div>
              订单号：
            </div>
            <span>{{item.ordernum}}</span>
            <div>
            {{item.date}}
          </div>
        </div>
        <div class="order-status">
          <img :src="item.imgUrl" alt="">
          <div class="txt">
            <div style="margin-bottom: .36rem">{{item.name}}</div>
            <span style="font-size: .24rem;">数量 x{{item.count}}</span>
          </div>
          <div class="status">
            {{item.status}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Tap from '../../common/Tap/Tap'
    export default {
        name: "ordercenter",
        components:{Tap},
        data(){
          return{
            list:[
              {
                ordernum:78347238847873,
                imgUrl:'http://img2.imgtn.bdimg.com/it/u=3421823110,2921944670&fm=26&gp=0.jpg',
                date:'2019-08-01 19:21:13',
                name:'Apple',
                count:1,
                status:'待发货',
                id:1
              },
              {
                ordernum:2474237893411,
                imgUrl:'http://img4.imgtn.bdimg.com/it/u=2327746252,2179456318&fm=26&gp=0.jpg',
                date:'2018-12-01 19:41:13',
                name:'Banana',
                count:1,
                status:'待发货',
                id:2
              },
              {
                ordernum:78347238847873,
                imgUrl:'http://img1.imgtn.bdimg.com/it/u=2852978268,1441403491&fm=26&gp=0.jpg',
                date:'2019-01-02 11:21:13',
                name:'Apple',
                count:1,
                status:'待发货',
                id:3,
              },
              {
                ordernum:521834197131489,
                imgUrl:'http://img5.imgtn.bdimg.com/it/u=2439458277,626495660&fm=26&gp=0.jpg',
                date:'2019-08-14 14:11:13',
                count:1,
                status:'待发货',
                id:4
              },
              {
                ordernum:817329739127391,
                imgUrl:'http://img2.imgtn.bdimg.com/it/u=1577605240,3382444718&fm=26&gp=0.jpg',
                date:'2019-08-01 19:21:13',
                name:'Apple',
                count:1,
                status:'待发货'
              },
              {
                ordernum:86768217468741,
                imgUrl:'http://img2.imgtn.bdimg.com/it/u=2236482400,3213814064&fm=26&gp=0.jpg',
                date:'2019-08-01 10:21:13',
                name:'Apple',
                count:1,
                status:'待发货'
              },
              {
                ordernum:141923719416131,
                imgUrl:'http://img2.imgtn.bdimg.com/it/u=3421823110,2921944670&fm=26&gp=0.jpg',
                date:'2019-08-01 19:21:13',
                name:'Apple',
                count:1,
                status:'待发货'
              },
              {
                ordernum:78347238847873,
                imgUrl:'http://img2.imgtn.bdimg.com/it/u=1577605240,3382444718&fm=26&gp=0.jpg',
                date:'2019-08-01 19:21:13',
                name:'Apple',
                count:1,
                status:'待发货'
              },
              {
                ordernum:78347238847873,
                imgUrl:'http://img1.imgtn.bdimg.com/it/u=1647778614,403100899&fm=26&gp=0.jpg',
                date:'2019-08-01 19:21:13',
                name:'Apple',
                count:1,
                status:'待发货'
              },
            ],
            TapOptions:[
              {taptype:'全部', value:'',},
              {taptype:'代发货', value:'1',},
              {taptype:'已发货', value:'2',},
              {taptype:'已收货', value:'3',},
            ]
          }
        },
      methods:{
<<<<<<< HEAD
        clickHandler(v){
=======
        changeHandler(){
>>>>>>> 9452bba46282d9e1c82728752409afa5b2d367d6

        },
        jumptoorder(itemId){
          this.$router.push({path:`/order/${itemId}`})
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  background: #f3f3f3;
  box-sizing: border-box;

  .articles {
    width: 100%;
    height: 2.72rem;
    background: #ffffff;
    box-sizing: border-box;

    .header{
      width: 100%;
      padding: 0.3rem;
      box-sizing: border-box;
      .order-num {
        font-size: 0.24rem;
        width: 100%;
        margin-bottom: 0.3rem;
        display: flex;
        justify-content: space-between;
      }
      .order-status {
        display: flex;
        img {
          width: 1.5rem;
          height: 1.5rem;
          margin-right: 0.3rem;
        }
        .txt {
          font-size: 0.28rem;
        }
        .status {
          position: absolute;
          top: 1.46rem;
          right: 0.3rem;
          font-size: 0.36rem;
          color: #fe864c;
        }
      }
    }
  }
  .tabs2 {
    height: 200px;
  }
}
</style>
