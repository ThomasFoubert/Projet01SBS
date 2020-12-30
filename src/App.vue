<template>
  <div id="app">
    <img id="logo" src="./assets/logo.svg">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#logo{
  height: 50px;
  text-align: left;
  margin-left: 5%;
}
</style>
