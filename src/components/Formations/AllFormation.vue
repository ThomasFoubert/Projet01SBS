
<template>
  <div id="app">
    {{msg}}
  </div>
</template>
<script>
export default {
  name: 'ALLFormations',
  data () {
    return {
      msg: 'Je veux afficher toutes les formations'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
