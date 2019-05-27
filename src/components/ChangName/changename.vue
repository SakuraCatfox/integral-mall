<template>
    <div class="container">
      <input type="text" placeholder="请输入新昵称" v-model="name">
      <div style="margin: .2rem 0 .6rem .3rem;color: #989898">您当前的昵称为：{{curname}}</div>
      <div class="btn">
        保存
      </div>
    </div>
</template>

<script>
    export default {
        name: "changename",
        data(){
          return{
            curname:'魏爸爸',
            name:'',
          }
        }
    }
</script>

<style scoped lang="less">

  .container{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: .6rem .3rem 0 .3rem;
    font-size: .24rem;
    background: #F8F8F8;
    position: relative;
    input{
      width: 6.9rem;
      height: .58rem;
      background:#F8F8F8;
      outline:0;
      border: none;
      padding: .14rem .2rem .14rem .24rem;
      box-sizing: border-box;
      border-bottom: 1px solid #FF9854;
      font-size: .3rem;
    }

    .btn{
      width: 100%;
      height: .98rem;
      line-height: .98rem;
      font-size: .36rem;
      text-align: center;
      background:linear-gradient(90deg,rgba(255,165,84,1) 0%,rgba(253,133,73,1) 100%);
      border-radius:4px;
      color: #ffffff;
    }
  }
</style>
