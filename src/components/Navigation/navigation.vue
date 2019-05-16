<template>
    <div class="nav-container">
      <div @click="jumptohome" :class="this.$route.path=='/home'?'active':''">
        <img src="./imgs/ic_mine.png" alt="">
        商城
      </div>
      <div @click="jumptointergral" :class="this.$route.path=='/intergral'?'active':''">
        <img src="./imgs/ic_mine.png" alt="">
        积分
      </div>
      <div @click="jumptomine" :class="this.$route.path=='/mine'?'active':''">
        <img src="./imgs/ic_mine.png" alt="">
        管理
      </div>
    </div>
</template>

<script>
    export default {
        name: "navigation",
        data(){
          return{

          }
        },
        created(){

        },
        mounted(){

        },
        methods:{
          jumptohome(){
            this.$router.push({ path: 'home' })
          },
          jumptointergral(){
            this.$router.push({ path: 'intergral' })
          },
          jumptomine(){
            this.$router.push({ path: 'mine' })
          }
        },
      computed:{

      }
    }
</script>

<style scoped lang="less">
  .nav-container{
    width: 100%;
    height: .98rem;
    font-size:.24rem;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    background: #ffffff;
    div{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    img{
      width: .3rem;
      height: .36rem;
      margin-bottom: .1rem;
    }
    .active{
      color: #FF8A00;
    }
  }
</style>
