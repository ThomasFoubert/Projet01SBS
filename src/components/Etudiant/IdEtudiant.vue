<template>
  <div id="app">
    <h1 class="text-center">MON PROFIL</h1>
    <form class="pageprofil d-flex justify-content-left flex-column w-lg-50 m-lg-5 m-2">

      <div>

        <button type="submit"
                class=" btnprofil btn text-white pl-lg-5 pr-lg-5 pt-lg-3 pb-lg-3 mt-lg-3 mb-lg-5 justify-content-center">
          <router-link to="/ModificationProfil" class="nav-link">
            Modifier mon profil</router-link>
        </button>

      </div>

      <div class="subtitles">
        <h3 class="h5">Informations générales</h3>
      </div>
      <div class="mt-lg-4 d-flex flex-row ">
        <div class="form-group mr-lg-3 w-50">
          <label>NOM </label>
          <p class="pprofil">Khadija</p>
        </div>

        <div class="form-group mb-lg-4 w-50">
          <label>PRÉNOM</label>
          <p class="pprofil">Boudjemline</p>
        </div>
      </div>
      <div class="form-group mb-lg-4 w-50">
        <label>MA PROMO</label>
        <p class="pprofil">2020-2021</p>
      </div>

      <div class="form-group mb-lg-4 w-50">
        <label>DATE DE NAISSANCE</label>
        <p class="pprofil">17/12/2001</p>
      </div>

      <div class="form-group mb-lg-4 w-50">
        <label>TÉLÉPHONE</label>
        <p class="pprofil">07 83 56 47 80</p>
      </div>


      <div class="section2 mt-lg-5">
        <div class="subtitles">
          <h3 class="h5">Adresse</h3>
        </div>
        <fieldset>
          <div class="separator mr-lg-5 ">
            <div class="form-group mb-lg-4 mt-lg-4">
              <label>RUE</label>
              <p class="pprofil">17 rue Brigno</p>
            </div>
            <div class="form-group mb-lg-4">
              <label>CODE POSTAL</label>
              <p class="pprofil">25 000 </p>
            </div>

            <div class="form-group mb-lg-4 ">
              <label>PAYS</label>
              <p class="pprofil">France</p>
            </div>
          </div>
          <div class="separator">
            <div class="geolocalisation ">
              <div id="map-container-google-1" class=" mt-lg-5 z-depth-1-half map-container"
                   style="width: 1000px">
                <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameborder="0"
                        style="border:0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </fieldset>
      </div>


      <div class="section3 mt-lg-5">
        <div class="subtitles">
          <h3 class="h5">Parcours</h3>
        </div>
        <fieldset class="bac d-flex flex-row">
          <div class="mt-lg-4 d-flex flex-row ">
            <div class="form-group mr-lg-5 w-50">
              <label>BACCALAURÉAT</label>
              <p class="pprofil">Général</p>
            </div>

            <div class="form-group mb-lg-4 w-50">
              <label>SPÉCIALITÉ</label>
              <p class="pprofil">Scientifique</p>
            </div>
          </div>
        </fieldset>
      </div>

      <div class="section2 mt-lg-5">
        <div class="subtitles">
          <h3 class="h5">Réseaux sociaux</h3>
        </div>
        <fieldset>
          <div class="mt-lg-4 d-flex flex-lg-row flex-column">
            <div class="form-group mr-lg-3  w-lg-100 mt-lg-5 d-flex flex-lg-row  align-items-center">
              <span class="input_icon"><i class="fab fa-facebook"></i></span>
              <p class="pprofil">Facebook</p>
            </div>
            <div class="form-group mr-lg-3  w-100 mt-lg-5 d-flex flex-row align-items-center">
              <span class="input_icon"><i class="fab fa-instagram"></i></span>
              <p class="pprofil">Instagram</p>
            </div>

            <div class="form-group mr-lg-3  w-100 mt-lg-5 d-flex flex-row align-items-center">
              <span class="input_icon"><i class="fab fa-tumblr"></i></span>
              <p class="pprofil">Tumblr</p>
            </div>

            <div class="form-group mr-lg-3  w-100 mt-lg-5 d-flex flex-row  align-items-center">
              <span class="input_icon"><i class="fab fa-linkedin-in"></i></span>
              <p class="pprofil">LinkedIn</p>
            </div>
          </div>
          <div class="mt-lg-4 d-flex flex-lg-row flex-column ">
            <div class="form-group mr-lg-3  w-100 mt-lg-5 d-flex flex-row  align-items-center">
              <span class="input_icon"><i class="fab fa-pinterest"></i></span>
              <p class="pprofil">Pinterest</p>
            </div>
            <div class="form-group mr-lg-3  w-100 mt-lg-5 d-flex flex-row  align-items-center">
              <span class="input_icon"><i class="fab fa-vimeo-v"></i></span>
              <p class="pprofil">Vimeo</p>
            </div>

            <div class="form-group mr-lg-3  w-100 mt-lg-5 d-flex flex-row align-items-center">
              <span class="input_icon"><i class="fab fa-flickr"></i></span>
              <p class="pprofil">Flickr</p>
            </div>
          </div>
        </fieldset>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Profil',
  data() {
    return {
      msg: 'Voici mon profil'
    }
  }
}
</script>

<style scoped>

.subtitles h5 {
  font-family: "Poppins ExtraBold", sans-serif;
  font-size: 25px;
  color: #092F48;

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

form .btn {
  background-color: #1D3557;
  font-family: Poppins, sans-serif;
  font-weight: 600;

}

p {
  font-family: Poppins, sans-serif;
}

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

h3 {
  font-size: 20px;
  line-height: 35px;
}
</style>
