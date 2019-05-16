<template>
  <div id="app">
    <router-view/>
    <Nav v-if="showRouter"></Nav>
  </div>
</template>

<script>
import Nav from './components/Navigation/navigation'
export default {
  name: 'App',
  components:{Nav},
  data(){
    return{

    }
  },
  created(){
    var c=window
  },
  computed:{
    showRouter(){
      let route=this.$route.path
      if (route!='/home'&&route!='/intergral'&&route!='/mine'){
        return false
      }else {
        return true
      }
    }
  }
}
</script>

<style>
html {
  height: 100%;
  }
  #app{
    height: 100%;
  }
  html{
    font-size: 50px;
  }
  body{
    margin: 0;
  }

#app {
}
</style>
