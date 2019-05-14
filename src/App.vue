<template>
  <div id="app">
    <router-view/>
    <Nav></Nav>
  </div>
</template>

<script>
  import Nav from './components/Navigation/navigation'
export default {
  name: 'App',
  components:{Nav}
}
</script>

<style>
  html{
    height: 100%;
  }
  body{
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
