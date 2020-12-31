
<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg">
     <ul>
        <li class="navbar-item active">
        <router-link to="/" class="nav-link">Mon Tableau de Bord</router-link>
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
      </ul>
    </nav>
    <div class="col-sm-2 profil">
        
        <div class="descriprofil text-center">
            <h4 class="name">Jeanne Holat</h4>
            <h6 class="naissance">17 Décembre 2001</h6>
            <p class="diplome_promo">DUT MMI 2021</p>
        </div>
        <div class="elemprofil">

            <h4>Etudes</h4>
            <p class="diplome_obtenu">Bac général S (scientifique)</p>

            <h4>Contact</h4>
            <p class="mail">khaddie90@gmail.com</p>
            <p class="tel">07.83.56.47.80</p>


            <h4>Réseaux Sociaux</h4>
            <ul>
                <li><i class="fab fa-instagram"></i></li>
                <li><i class="fab fa-facebook-f"></i></li>
                <li><i class="fab fa-linkedin"></i></li>
            </ul>
        </div>
        <div class="profil d-flex justify-content-center">
            <button type="submit" class="btn text-white">Voir profil</button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Board',
  data () {
    return {
      msg: 'Voici mon tableau de bord'
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
