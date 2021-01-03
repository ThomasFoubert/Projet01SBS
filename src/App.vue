<template>

  <div class="grp container-fluid">

    <b-navbar toggleable="lg" type="light" variant="white">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>


      <b-navbar-brand>
        <router-link to="/" class="nav-link">
        <img src="./assets/logosbs.svg" alt="" width="50%">
        </router-link>
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse" >

        <b-navbar-nav class = "ml-auto">
          <b-nav-item>
            <router-link to="/Board" class="nav-link text-dark">
              Mon Tableau de Bord
            </router-link>

          </b-nav-item>

          <b-nav-item>
            <router-link to="/Profil" class="nav-link text-dark">
              Mon Profil
            </router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to="/Offres" class="nav-link text-dark">
              Offres
            </router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to="/Entreprises" class="nav-link text-dark">
              Entreprises
            </router-link>
          </b-nav-item>

        </b-navbar-nav>

      </b-collapse>


    </b-navbar>

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
  font-family: 'Poppins',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

}
.nav-link{
  font-weight: 600;
}
@media (max-width: 768px) {
  body > div > nav > button {
    margin-left: 280px;
  }
  .navbar-toggler{
    border: none;
  }
  #nav_collapse{
    text-align: center;
    font-family: 'Poppins',sans-serif;
    font-weight: 400;
  }

}
</style>
