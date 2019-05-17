<template>
      <div class="header" >
        <div v-for="(item,i) in options" @click="clickHandler(item.value)"
        :class="curentValue==item.value?'actived':''">
          <div>{{item.taptype}}</div>
        </div>
      </div>
</template>

<script>
    export default {
        name: "Tap",
        props:{
          options:{
            type:Array,
            required:true,
            default:()=>[]
          }
        },
        data(){
          let defaultValue=this.options[0]&&this.options[0].value
          return {
            curentValue:defaultValue
          }
        },
        methods:{
          clickHandler(value){
            if (value===this.curentValue) return
            this.curentValue=value
            this.$emit('change',value)
          }
        }

    }
</script>

<style scoped lang="less">
    .header{
      width: 100%;
      height: .78rem;
      font-size: .28rem;
      line-height: .78rem;
      padding: 0 .6rem 0 .6rem;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      color: #989898;
      background: #ffffff;
      .actived{
        color: orange;
        border-bottom: 1px solid plum;
      }
    }
</style>
