<template>
  <div class="container">
    <div class="oldpassword">
      <div class="img">

      </div>
      <div class="line">

      </div>
      <input type="text" placeholder="请输入旧密码" ref="old">
      <div class="eye" @click="showoldpassword">

      </div>
    </div>
    <div class="newpassword" ref="newwrapper">
      <div class="img">

      </div>
      <div class="line">

      </div>
      <input type="text" placeholder="请输入新密码" ref="newp">
      <div class="eye" @click="shownewpassword">

      </div>
    </div>
    <div class="btn" @click="match">
      确认修改
    </div>
  </div>
</template>

<script>
  export default {
    name: "changeloginpassword",
    data() {
      return {}
    },
    mounted(){
      window.c=this
    },
    methods: {
      shownewpassword() {
        let newp = this.$refs.newp
        if (newp.type==='text'){
          newp.type='password'
        } else {
          newp.type='text'
        }
      },
      showoldpassword() {
        let old = this.$refs.old
        if (old.type==='text'){
          old.type='password'
        } else {
          old.type='text'
        }
      },
      match(){
        console.log(newp.value===old.value)
        let newp = this.$refs.newp
        let old = this.$refs.old
        if (newp.value===old.value){
          this.$refs.newwrapper.style.backgroung='#FF5454'
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .container {
    background: #F8F8F8;
    width: 100%;
    height: 100%;
    padding: .8rem .3rem 0 .3rem;
    box-sizing: border-box;
    .oldpassword {
      width: 6.9rem;
      height: .88rem;
      border: #D7D7D7;
      background: #ffffff;
      position: relative;
      .img {
        width: .22rem;
        height: .24rem;
        background: #D7D7d7;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        left: .32rem;
      }
      .line {
        width: 1px;
        height: .4rem;
        background: #D7D7D7;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        left: .82rem;
      }
      input {
        display: inline-block;
        position: absolute;
        left: 1.14rem;
        top: 0;
        bottom: 0;
        margin: auto;
        border: none;
        outline: 0;
        font-size: .24rem;
      }
      .eye {
        width: .2rem;
        height: .2rem;
        background: #979797;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        right: .2rem;
      }
    }
    .newpassword {
      width: 6.9rem;
      height: .88rem;
      border: #D7D7D7;
      background: #ffffff;
      position: relative;
      margin-top: .3rem;
      .img {
        width: .22rem;
        height: .24rem;
        background: #D7D7d7;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        left: .32rem;
      }
      .line {
        width: 1px;
        height: .4rem;
        background: #D7D7D7;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        left: .82rem;
      }
      input {
        display: inline-block;
        position: absolute;
        left: 1.14rem;
        top: 0;
        bottom: 0;
        margin: auto;
        border: none;
        outline: 0;
        font-size: .24rem;
      }
      .eye {
        width: .2rem;
        height: .2rem;
        background: #979797;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        right: .2rem;
      }
    }
    .btn {
      width: 6.9rem;
      height: .98rem;
      background: linear-gradient(90deg, rgba(255, 165, 84, 1) 0%, rgba(253, 133, 73, 1) 100%);
      border-radius: 4px;
      line-height: .98rem;
      color: #ffffff;
      font-size: .36rem;
      text-align: center;
      margin-top: .6rem;
    }
  }
</style>
