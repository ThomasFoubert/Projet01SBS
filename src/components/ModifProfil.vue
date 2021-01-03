<template>

<div id="app">
  <h1 class="text-center">MODIFIER MON PROFIL</h1>
  <form class="pageprofil d-flex justify-content-left flex-column w-75 m-lg-5">
    <div class="subtitles">
      <h3 class="h5">Informations générales</h3>
    </div>
    <fieldset>
      <div class="mt-lg-4 d-flex flex-row ">
        <div class="form-group mr-lg-3 w-50">
          <label>NOM </label>
          <input type="text" name="user_name" placeholder="Identifiant" class="form-control p-lg-4">
        </div>

        <div class="form-group mb-lg-4 w-50">
          <label>PRÉNOM</label>
          <input type="text" name="user_name" placeholder="Mot de passe" class="form-control p-lg-4">
        </div>
      </div>
      <div class="form-group mb-lg-4 w-50">
        <label>MA PROMO</label>
        <input type="text" name="user_name" placeholder="Mot de passe" class="form-control p-lg-4">
      </div>

      <div class="form-group mb-lg-4 w-50">
        <label>DATE DE NAISSANCE</label>
        <input type="datetime-local" name="user_name" value="2011-08-19T13:45:00" placeholder="Mot de passe"
               class="form-control p-lg-4">
      </div>

      <div class="form-group mb-lg-4 w-50">
        <label>TÉLÉPHONE</label>
        <input type="tel" name="user_name" placeholder="Numéro de téléphone" class="form-control p-lg-4">
      </div>

    </fieldset>


    <div class="section2 mt-lg-5">
      <div class="subtitles">
        <h3 class="h5">Adresse</h3>
      </div>
      <fieldset class="d-flex flex-row">
        <div class="separator mr-lg-5 ">
          <div class="form-group mr-lg-3  w-100 mt-lg-4 ">
            <label>Recherchez votre adresse</label>
            <input type="text" name="user_name" placeholder="Adresse" class="form-control p-lg-4">
          </div>

          <div class="form-group mb-lg-4">
            <label>RUE</label>
            <input type="text" name="user_name" placeholder="Rue" class="form-control p-lg-4">
          </div>
          <div class="form-group mb-lg-4">
            <label>CODE POSTAL</label>
            <input type="text" name="user_name" placeholder="Code Postal" class="form-control p-lg-4">
          </div>

          <div class="form-group mb-lg-4 ">
            <label >PAYS</label>
            <input type="datetime-local" name="user_name" value="2011-08-19T13:45:00" placeholder="Mot de passe"
                   class="form-control p-lg-4">
          </div>
        </div>
        <div class="geolocalisation d-flex flex-column">
          <div>
            <button type="submit" class="btn text-white">Géolocaliser l'adresse</button>
          </div>
          <div id="map-container-google-1" class=" mt-lg-5 z-depth-1-half map-container" style="width: 1000px">
            <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    style="border:0" allowfullscreen></iframe>
          </div>

        </div>

      </fieldset>
    </div>


    <div class="section3 mt-lg-5">
      <div class="subtitles">
        <h3 class="h5">Parcours</h3>
      </div>
      <fieldset class="d-flex flex-row">
        <div class="mt-lg-4 d-flex flex-row ">
          <div class="form-group mr-lg-3 w-50">
            <label>BACCALAURÉAT</label>
            <input type="text" name="user_name" placeholder="Scientifique,Littéraire..." class="form-control p-lg-4">
          </div>

          <div class="form-group mb-lg-4 w-50">
            <label>SPÉCIALITÉ</label>
            <input type="text" name="user_name" placeholder="SI,Maths..." class="form-control p-lg-4">
          </div>
        </div>
      </fieldset>
    </div>

    <div class="section2 mt-lg-5">
      <div class="subtitles">
        <h3 class="h5">Réseaux sociaux</h3>
      </div>
      <fieldset>
        <div class="mt-lg-4 d-flex flex-row ">
          <div class="form-group mr-lg-3  w-100 mt-lg-5 d-flex flex-row justify-content-center align-items-center">
            <span class="input_icon"><i class="fab fa-facebook"></i></span>
            <input type="text" name="user_name" placeholder="" class="form-control p-lg-4">
          </div>
          <div class="form-group mr-lg-3  w-100 mt-lg-5 d-flex flex-row justify-content-center align-items-center">
            <span class="input_icon"><i class="fab fa-instagram"></i></span>
            <input type="text" name="user_name"  class="form-control p-lg-4">
          </div>

          <div class="form-group mr-lg-3  w-100 mt-lg-5 d-flex flex-row justify-content-center align-items-center">
            <span class="input_icon"><i class="fab fa-tumblr"></i></span>
            <input type="text" name="user_name"  class="form-control p-lg-4">
          </div>

          <div class="form-group mr-lg-3  w-100 mt-lg-5 d-flex flex-row justify-content-center align-items-center">
            <span class="input_icon"><i class="fab fa-linkedin-in"></i></span>
            <input type="text" name="user_name"  class="form-control p-lg-4">
          </div>
        </div>
        <div class="mt-lg-4 d-flex flex-row ">
          <div class="form-group mr-lg-3  w-100 mt-lg-5 d-flex flex-row justify-content-center align-items-center">
            <span class="input_icon"><i class="fab fa-pinterest"></i></span>
            <input type="text" name="user_name"  class="form-control p-lg-4">
          </div>
          <div class="form-group mr-lg-3  w-100 mt-lg-5 d-flex flex-row justify-content-center align-items-center">
            <span class="input_icon"><i class="fab fa-vimeo-v"></i></span>
            <input type="text" name="user_name"  class="form-control p-lg-4">
          </div>

          <div class="form-group mr-lg-3  w-100 mt-lg-5 d-flex flex-row justify-content-center align-items-center">
            <span class="input_icon"><i class="fab fa-flickr"></i></span>
            <input type="text" name="user_name" class="form-control p-lg-4">
          </div>
        </div>
      </fieldset>
    </div>
    <div class="mt-lg-5">
      <button type="submit" class="btn text-white pl-lg-5 pr-lg-5 pt-lg-3 pb-lg-3 mt-lg-3">Enregistrer</button>
    </div>
  </form>

</div>
</template>

<script>
export default {
name: "ModifProfil"
}
</script>

<style scoped>

a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: none;
}

button:hover {
  opacity: 0.5;
}

h1, h3 {
  font-family: 'Fredoka One', cursive;
  letter-spacing: 0.2em;
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

form .btn {
  background-color: #1D3557;
  font-family: Poppins, sans-serif;
  font-weight: 600;

}
.pageprofil label {
  font-family: "Poppins SemiBold", sans-serif;
  font-size: 15px;
  color: #E63946;
}

.form-control {
  font-family: "Poppins SemiBold", sans-serif;
  font-size: 10px;
  color: #092F48;
}

.input_icon {
  color: #E63946;
  font-size: 40px; /*Tu peux changer ici*/
  width: 70px;
}

@media (max-width: 768px) {
  h1{
    font-size: 15px;
  }
}
</style>
