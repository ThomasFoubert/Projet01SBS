<template>
  <div id="app">
<<<<<<< Updated upstream
    {{info}}
=======

<ul>
  <li>
   {{posts}}  </li>
</ul>
>>>>>>> Stashed changes
  </div>


</template>

<script>
export default {
  name: 'Entreprises',
    data() {
    return {
      posts: [

      ]
    }
<<<<<<< Updated upstream
  },
  mounted () {
    JSON
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
}
=======
    },
>>>>>>> Stashed changes

mounted() {

    axios.get('https://entreprise.data.gouv.fr/api/sirene/v3/etablissements/')
  .then(response=>this.posts=response.data)
    }

}
</script>
<style scoped>
</style>
