<template>
    <div class="switch-outer" :class="value?'checked':''" @click="clickHandler">
        <div class="switch-inner" :class="value?'checked':''"></div>
    </div>
</template>
<script >
export default {
    name:'Switcher',
    props:{
        value:{type:Boolean},
        name:{}
    },
    data() {
        return {
            // checked:false
        }
    },
    methods: {
        clickHandler(){
            console.log(1)
            this.$emit('input',!this.value)
        }
    },
}
</script>
<style lang='less' scoped>
.switch-outer{
    position:relative;
    width: 54px;
    height: 24px;
    border-radius: 24px;
    background-color: #F3F3F3;
    border:1px solid #D7D7D7;
    box-sizing: border-box;
    transition: all .3s;
    &.checked{
       background-color: #FFA554;
    }
    .switch-inner{
        width: 24px;
        height: 24px;
        border-radius: 24px; 
        background-color: #FFF;
        border:1px solid #D7D7D7;
        box-sizing: border-box;
        position: absolute;
        left: -1px;
        top: -1px;
        transition: all .3s;
        &.checked{
          left:30px;
        }
    }
}
</style>
