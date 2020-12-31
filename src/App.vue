<template>
  <div id="app">
    <img id="logo" src="./assets/logo.svg">
    <nav class="navbar navbar-expand-lg">
        <li class="navbar-item active">
        <router-link to="/Board" class="nav-link">Mon Tableau de Bord</router-link>
      </li>
      <li class="navbar-item">
        <router-link to="/Profil" class="nav-link">Mon Profil</router-link>
      </li>
      <li class="navbar-item">
        <router-link to="/Stages" class="nav-link">Mes Stages</router-link>
      </li>
      <li class="navbar-item ">
        <router-link to="/Offres" class="nav-link">Offres</router-link>
      </li>
      <li class="navbar-item ">
        <router-link to="/Entreprises" class="nav-link">Entreprises</router-link>
      </li>
    </nav>
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
