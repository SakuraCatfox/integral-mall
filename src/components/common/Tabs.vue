<template>
    <div class="tabs">
        <div v-for="item in options" @click="clickHandler(item.value)"
         :class="{'tab-item':true,'active':curentValue===item.value}">{{item.label}}</div>
    </div>
</template>
<script >
export default {
    name: 'Tabs',
    props: {
        options: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    data() {
        let defaultValue = this.options[0] && this.options[0].value
        return {
            curentValue: defaultValue
        }
    },
    methods: {
        clickHandler(value) {
            if (value === this.curentValue) return
            this.curentValue = value
            this.$emit('change', value)
        }
    }
}
</script>
<style lang='less' scoped>
.tabs {
  width: 100%;
  height: 0.78rem;
  font-size: 0.28rem;
  line-height: 0.78rem;
  padding: 0 0.6rem 0 0.6rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  color: #989898;
  background: #ffffff;
  .tab-item {
    &.active {
      color: #ff8a00;
      border-bottom: 2px solid #ff8a00;
    }
  }
}
</style>
