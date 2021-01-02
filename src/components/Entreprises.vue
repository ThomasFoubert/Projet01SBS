<template>
  <div id="app">

    <ul>
      <li>
        {{posts}}  </li>
    </ul>
  </div>


</template>

<script>
export default {
  name: 'Entreprises',
  data() {
    return {
      posts: [0
      ]
    }
  },

  mounted() {

    axios.get('https://entreprise.data.gouv.fr/api/sirene/v3/etablissements/')
      .then(response=>this.posts=response.data)
  }

}
</script>
<style scoped>
</style>
