<template>
  <div id="app">

  <div class="bodyaccueil">
    <div class="container">
      <div class="accueil d-flex justify-content-center">

        <div class="choix col-6-lg mt-7-lg mt-5-lg">
          <h1>BIENVENUE</h1>
          <h3>sur la nouvelle plateforme de stage
            de l'IUT Belfort-Montbéliard.</h3>
          <p class="blockquote">Plateforme dédiée uniquement à l'IUT de <br> Belfort-Montbéliard</p>

          <div class="buttonaccueil d-flex flex-column justify-content-lg-between w-lg-50 justify-content-center m-5">
            <button class="btnaccueil p-3 btn-primary"><a class="text-decoration-none text-white" href="#">MEMBRE
              DE L'IUT</a></button>
            <br>
            <button class="btnaccueil p-3 btn-primary "><a class="text-decoration-none text-white"
                                                           href="#">ENTREPRISE</a>
            </button>
          </div>
        </div>

        <div class="img col-6 ml-5 d-none-md ">
          <img class="imgaccueil position-fixed " src="../assets/imgaccueil.svg" alt="StageByStage">
        </div>


      </div>

    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Accueil"
}
</script>

<style scoped>
.imgaccueil {
  width: 55%;
}

.btnaccueil {
  background-color: #1D3557;
  border: #1D3557 solid 3px;
}

h1, h3 {
  font-family: 'Fredoka One', cursive;
  letter-spacing: 0.2em;
}

h3 {
  font-size: 20px;
  line-height: 35px;
}

.blockquote {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 200;
  letter-spacing: 0.1em;
  margin-bottom: 30px;
}

.buttonaccueil button {
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 16px;

}
body > div > nav{
  display: none;
}

</style>
