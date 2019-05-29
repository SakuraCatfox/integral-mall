<template>
  <div class="switcher-container" :class="value?'actived':''">
    <div class="circular"  @click="changed" :class="value?'actived':''">
    </div>
  </div>
</template>
<script>
  export default {
    name: "Switcher",
    props:{
      model:{prop:'value',event:'input',required:false},
      switched:{
          type:Boolean,
          required:false,
          default:false
      }
    },
    data(){
      return {

      }
    },
    methods:{
      changed(){
        console.log(!this.value)
        this.$emit('input',!this.value)
      }
    }

  }
</script>

<style scoped lang="less">
  .switcher-container {
    width: 1.08rem;
    height: .48rem;
    border: 1px solid #D7D7D7;
    border-radius: .24rem;
    background: #F3F3F3;
    position: relative;
    &.actived{
      background:#FFA554;
    }
    .circular {
      width: .48rem;
      height: .48rem;
      border: 1px solid #D7D7D7;
      border-radius: 50%;
      background-color: #ffffff;
      position: absolute;
      left: -1px;
      top: -1px;
      &.actived{
        left: auto;
        right: -1px;
      }
    }
  }
</style>
