<template>
  <div id="app">
    <div class="row d-flex justify-content-center text-center m-0">
      <div>
        <form class="formconnexion p-lg-5 p-4 shadow-lg mr-5">
          <h2 class="text-center">Connectez-vous</h2>
          <em>Avec vos identifiants <br>CAS de l'université</em>

          <fieldset>
            <div class="form-group mb-1">
              <label> </label>
              <input type="text" name="user_name" placeholder="Identifiant" class="form-control p-lg-4">
            </div>

            <div class="form-group">
              <label></label>
              <input type="text" name="user_name" placeholder="Mot de passe" class="form-control p-lg-4">
            </div>

          </fieldset>
          <router-link to="/Board" class="nav-link text-dark">
          <button type="submit" class="btn text-white pl-lg-4 pr-lg-4 mt-lg-3">Connexion</button>
          </router-link>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ConnexionEtudiant"
}
</script>

<style scoped>
h2 {
  font-family: "Fredoka One", sans-serif;
  letter-spacing: 0.1em;
  color: #1D3557;
}

em {
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.2em;
}

.pageprofil .form-group input {
  border: #E63946 2px solid;
}

.formconnexion {
  border: #E63946 2px solid;
}

form .btn {
  background-color: #1D3557;
  font-family: Poppins, sans-serif;
  font-weight: 600;

}

</style>
