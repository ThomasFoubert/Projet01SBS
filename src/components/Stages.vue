
<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg">
      <li class="navbar-item">
        <router-link to="/Board" class="nav-link">Mon Tableau de Bord</router-link>
      </li>
      <li class="navbar-item active">
        <router-link to="/" class="nav-link">Mon Profil</router-link>
      </li>
      <li class="navbar-item">
        <router-link to="/Stages" class="nav-link">Mes Stages</router-link>
      </li>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Profil',
  data () {
    return {
      msg: 'Voici mon profil'
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
