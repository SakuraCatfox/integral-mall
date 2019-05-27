<template>
    <div class="container">
      <div class="wrapper">
       <div class="top">
         <div class="icon"></div>
         <div class="user">
           <div class="item">
             <div class="name">{{list.name}}</div>
             <div class="num">{{list.num}}</div>
           </div>
           <div class="address">{{list.address}}</div>
         </div>
      </div>
        <div class="bj">
          <div class="line"></div>
          <div>编辑</div>
        </div>
       <div class="default">
          <input type="checkbox">
          <div>设为默认地址</div>
        </div>
      </div>
      <div class="btn" @click="jumptoaddaddress">
        添加新地址
      </div>
    </div>
</template>

<script>
    export default {
        name: "ress",
        data(){
          return{
            list:{
              name:'魏爸爸',
              num:'188888888888',
              address:"北京北京北京北京北京北京北京北京北京"
            },
          }
        },
      methods:{
        jumptoaddaddress(){
          console.log('ddd')
          this.$router.push('addaddress')
        }
      }
    }
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    height: 100%;
    font-size: .3rem;
    background: #F3F3F3;
    .wrapper{
      width: 100%;
      background: #ffffff;
      height: 2.06rem;
      padding: .3rem;
      box-sizing: border-box;
      position: relative;
      .top{
        display: flex;
        .icon{
          width: .6rem;
          height: .6rem;
          margin-right: .3rem;
          background: plum;
        }
        .user{
          .item{
            margin-right: .3rem;
            display: flex;
            .name{
              margin-right: .36rem;
            }
            .num{
              color: #989898;
              font-size: .24rem;
            }
          }
          .address{
            font-size: .24rem;
            margin-top: .1rem;
          }
        }
      }
      .bj{
        font-size: .24rem;
        color: #D8D8D8;
        position: absolute;
        display: flex;
        align-items: center;
        right: .3rem;
        top: 0;
        bottom: 0;
        margin: auto;
        .line{
          width: 1px;
          height: .6rem;
          background: #D8D8D8;
          margin-right: .3rem;
        }
      }
      .default{
        position: absolute;
        top: 1.36rem;
        left: 1.2rem;
        color: #FF9864;
        font-size: .24rem;
        display: flex;
        align-items: center;
        .input{
          border-radius: 50%;
        }
      }
    }
    .btn{
      width: 100%;
      height: .98rem;
      text-align: center;
      line-height: .98rem;
      background:linear-gradient(90deg,rgba(255,165,84,1) 0%,rgba(253,133,73,1) 100%);
      position: fixed;
      bottom: 0;
      color: #ffffff;
      font-size: .36rem;
    }
  }
</style>
