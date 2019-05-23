<template>
    <div class="container">
      <input type="text" >
      <div style="margin: .2rem 0 .6rem .3rem;color: #989898">您当前的昵称为：</div>
      <div class="line"></div>
      <div class="btn">
        保存
      </div>
    </div>
</template>

<script>
    export default {
        name: "changename",
        curname:'魏爸爸',
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
      background:#F8F8F8;
      outline:0;
    }
    .line {
      width: 100%;
      height: 1px;
      background: #FF9854;
      position: absolute;
      top: 1.16rem;
      border-width: 0;
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
