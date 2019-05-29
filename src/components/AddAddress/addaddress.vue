<template>
    <div class="container">
      <div class="input-wrapper">
        <div class="name">
          <span>姓名</span><input type="text">
        </div>
        <div class="name">
          <span>手机号</span><input type="text">
        </div>
        <div class="address">
          <div>
            <span>所在地区</span>
          </div>
          <div>></div>
        </div>
        <div class="text">
          <input type="text" placeholder="详细地址">
        </div>
      </div>
      <div class="moren">
        <div>设为默认地址</div>
        <Switcher v-model="value"></Switcher>
      </div>
      <div class="btn">
        保存地址
      </div>
    </div>
</template>

<script>
  import Switcher from '../../common/Switcher/Switcher'
    export default {
        name: "addaddress",
        components:{Switcher},
        data(){
          return{
            value:false
          }
        },
      methods:{
        switches(v){
          console.log(v)
          this.value=v
        }
      }
    }
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    height: 100%;
    background: #F3F3F3;
    position: relative;
    .input-wrapper{
      background: #ffffff;
      font-size: .28rem;
      color:#979797;
      .name{
        padding: .24rem;
        height: .88rem;
        box-sizing: border-box;
        border-bottom:1px solid #D7D7D7;
      }
      .address{
        width: 100%;
        height: .88rem;
        padding: .24rem;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        border-bottom: 1px solid #D7D7D7;
      }
      .text{
        width: 100%;
        height: 1.76rem;
        padding: .24rem;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        border-bottom: 1px solid #D7D7D7;
        input{
          width: 100%;
          height: 100%;
          display: inline-block;
        }
      }
      input{
        margin-left: .2rem;
        font-size: .36rem;
        outline:0;
      }
    }
    .moren{
      width: 100%;
      height: 0.88rem;
      font-size: 0.28rem;
      background: #ffffff;
      margin-top: 0.2rem;
      -webkit-box-sizing: border-box;
       box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 .2rem;
    }
    .btn{
      width:100%;
      height:.98rem;
      background:linear-gradient(90deg,rgba(255,165,84,1) 0%,rgba(253,133,73,1) 100%);
      border-radius:4px;
      position: absolute;
      top: 6.08rem;
      font-size: .36rem;
      text-align: center;
      color: #ffffff;
      line-height: .88rem;
    }
  }
</style>
