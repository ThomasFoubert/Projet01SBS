
<template>
  <div id="app">
    {{info}}
  </div>
</template>
<script>
export default {
  name: 'Entreprises',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    JSON
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
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
