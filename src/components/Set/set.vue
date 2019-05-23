<template>
    <div class="container">
      <div class="user-info">
          <div class="pic">
            <div class="img"></div>
            <div class="name">魏爸爸</div>
          </div>
        <div class="name1" @click="jumptochangename">
          <div>
            昵称
          </div>
          <div>></div>
        </div>
        <div class="line">

        </div>
      </div>
      <div class="password">
        <div>
          <div class="signup" @click="jumptochangeloginpassword">
            <div>登录密码</div>
            <div>></div>
          </div>
          <div class="trad">
            <div>交易密码</div>
            <div>></div>
          </div>
        </div>
        <div class="line">

        </div>
      </div>
      <div class="address">
        <div>收货地址</div>
        <div>></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "set",
        data(){
          return{

          }
        },
      methods:{
          jumptochangename(){
            this.$router.push({path:'changename'})
          },
          jumptochangeloginpassword(){
          this.$router.push({path:'changeloginpassword'})
        }
      }
    }
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    height: 100%;
    background: #F3F3F3;
    font-size: .3rem;
    .user-info{
      width: 100%;
      height: 2.84rem;
      padding: .2rem .3rem .2rem .3rem;
      box-sizing: border-box;
      background: #ffffff;
      position: relative;
      .pic{
        display: flex;
        align-items: center;
       .img{
         width:1.4rem;
         height: 1.4rem;
         background: pink;
         margin-right: .33rem;
       }
        .name{
          font-size: .36rem;
        }
      }
      .name1{
        display: flex;
        justify-content: space-between;
        margin-top: .66rem;
      }
      .line{
        width: 7.2rem;
        height: 1px;
        background: #D7D7D7;
        position: absolute;
        bottom: .86rem;
      }
    }
    .password{
      position: relative;
      width: 100%;
      height: 1.86rem;
      padding: .2rem .3rem .34rem .2rem;
      box-sizing: border-box;
      margin-top: .2rem;
      background: #ffffff;
      .signup{
        display: flex;
        justify-content: space-between;
      }
      .trad{
        display: flex;
        justify-content: space-between;
        margin-top: .49rem;
      }
      .line{
        width: 7.2rem;
        height: 1px;
        background: #D7D7D7;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
      }
    }
    .address{
      width: 100%;
      height: 1.08rem;
      padding: .2rem;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      background: #ffffff;
      margin-top: .2rem;
    }
  }
</style>
