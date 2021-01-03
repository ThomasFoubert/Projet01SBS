<template>
  <div id="app">


    <div class="boardlg">
      <div class="container-fluid m-5 d-flex flex-lg-row flex-column justify-content-center">


        <div class="col-lg-2 profil mr-lg-5 col-8 d-flex w-50">
          <div class="imgprofil">
            <img src="../assets/etudiante.jpg" alt="img_profil" style="width: 150px; border-radius: 90px;">
          </div>
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
            <button type="submit" class="btn text-white">
              <router-link to="/Profil" class="nav-link">Voir
                profil
              </router-link>
            </button>
          </div>
        </div>

        <div class="row ">

          <h2 class=" titre col-sm-10 mb-lg-0 p-lg-3  text-white text-center">MES ÉLÉMENTS COMPLEXES</h2>

          <div class="col-lg-5 col-8 complexes">
            <div class="fondelements mt-lg-4 p-lg-4">
              <h3 class="text-center">MES PROJETS</h3>
              <table class="unevaleur m-lg-3">
                <tr>

                  <th>Année</th>
                  <th>Projets</th>
                  <th>Intitulé</th>

                </tr>

                <tr>

                  <td>
                    2016
                  </td>
                  <td>
                    Projet Individuel
                  </td>
                  <td>
                    Radiocativ'man
                  </td>
                </tr>
                <tr>
                  <td>
                    2016
                  </td>
                  <td>
                    Projet collectif-S2
                  </td>
                  <td>
                    Greengoods
                  </td>
                </tr>
              </table>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn text-white">Ajouter</button>
              </div>
            </div>
          </div>
          <div class="col-lg-5 complexes">
            <div class="fondelements mt-lg-4 p-lg-4">
              <h3 class="text-center">MES STAGES</h3>
              <table class="unevaleur m-lg-3">
                <tr>
                  <th>Durée</th>
                  <th>Entreprises</th>
                  <th>Fonction</th>
                </tr>
                <tr>
                  <td>
                    De Mars 2019 à Juin 2019
                  </td>
                  <td>
                    Brand Agency
                  </td>
                  <td>
                    Intégrateur Web
                  </td>
                </tr>
              </table>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn text-white">Ajouter</button>
              </div>
            </div>

          </div>


          <div class=" col-lg-5">
            <div class="promo">
              <h3 class="text-center">MA PROMO</h3>
              <div class="profilspromos">
                <img id="1" src="#" alt="#" height="40px" width="40px">
                <img id="2" src="#" alt="#" height="40px" width="40px">
                <img id="3" src="#" alt="#" height="40px" width="40px">
                <img id="4" src="#" alt="#" height="40px" width="40px">
                <img id="5" src="#" alt="#" height="40px" width="40px">
              </div>
              <a href="#">Voir plus ...</a>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="promo">
              <h3 class="text-center">DERNIERES OFFRES</h3>
              <table class="paddingcarré m-lg-3">
                <tr>
                  <th>
                    Date de publication
                  </th>
                  <th>
                    Sujet
                  </th>
                  <th>
                    Entreprises
                  </th>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
              <a href="#">Voir plus ...</a>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="containersm d-block container mt-5">
      <div class="row m-0">
        <div class="col-sm-12 m-2">
          <div class="profilsm">
            <div class="elemprincipal d-flex flex-row">
              <div class="imgprofil">
                <img src="../assets/etudiante.jpg" alt="img_profil" style="width: 150px; border-radius: 90px;">
              </div>
              <div class="descriprofil text-center ml-3">
                <h4 class="name">Jeanne Holat</h4>
                <h6 class="naissance">17 Décembre 2001</h6>
                <p class="diplome_promo">DUT MMI 2021</p>
              </div>
            </div>
            <div class="elemprofil mt-3">

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
              <button type="submit" class="btn text-white">
                <router-link to="/Profil" class="nav-link">Voir
                  profil
                </router-link>
              </button>
            </div>
          </div>
        </div>
      </div>


      <div class="row">
        <div class="col-sm-12 mr-4">
          <h2 class="text-center mt-5 mb-4" style="color: #1D3557;">MES ÉLÉMENTS COMPLEXES</h2>

          <div class="col-sm-12 complexes">
            <div class="fondelements  p-4">
              <h3 class="text-center">MES PROJETS</h3>
              <table class="unevaleur m-lg-3">
                <tr>

                  <th>Année</th>
                  <th>Projets</th>
                  <th>Intitulé</th>

                </tr>

                <tr>

                  <td>
                    2016
                  </td>
                  <td>
                    Projet Individuel
                  </td>
                  <td>
                    Radiocativ'man
                  </td>
                </tr>
                <tr>
                  <td>
                    2016
                  </td>
                  <td>
                    Projet collectif-S2
                  </td>
                  <td>
                    Greengoods
                  </td>
                </tr>
              </table>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn text-white">Ajouter</button>
              </div>
            </div>
          </div>

        </div>
        <div class="col-sm-12  mb-4 mt-2">
          <div class="col-12 complexes">
            <div class="fondelements p-4">
              <h3 class="text-center">MES STAGES</h3>
              <table class="unevaleur">
                <tr>
                  <th>Durée</th>
                  <th>Entreprises</th>
                  <th>Fonction</th>
                </tr>
                <tr>
                  <td>
                    De Mars 2019 à Juin 2019
                  </td>
                  <td>
                    Brand Agency
                  </td>
                  <td>
                    Intégrateur Web
                  </td>
                </tr>
              </table>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn text-white">Ajouter</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Board',
  data() {
    return {
      msg: 'Voici mon tableau de bord'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 768px) {
  i {
    font-size: 30px;
    margin: 10px;

  }

  .complexes {
    padding: 10px;
  }

  .boardlg {
    display: none;
  }

  .containersm {
    display: block;
  }
}

.titre {
  background-color: #E63946;

}

/********************Bloc de droite*********************/
.paddingcarré {
  border-spacing: 5px;
}


/********************Tableaux*********************/
table {
  border-collapse: separate;

}

th {
  color: #E63946;
  font-family: "Fredoka One", sans-serif;
  font-weight: 400;
  margin-left: 10px;
}

/********************Les deux blocs du haut*********************/

.unevaleur {
  border-spacing: 10px;
}

.profil {
  box-shadow: 8px 8px 12px #FBE1E3;
}

.complexes {
  background-color: #E63946;
}

.fondelements {
  background-color: white;
}

.complexes .btn {
  background-color: #1D3557;
  font-family: Poppins, sans-serif;
  font-weight: 600;

}

.profil .btn {
  background-color: #1D3557;
  font-family: Poppins, sans-serif;
  font-weight: 600;
  margin-bottom: 10px;

}

.profil p {
  font-family: Poppins, sans-serif;
  font-size: 15px;
  font-weight: 400;
}

.profil {
  display: flex;
  align-items: center;
  flex-direction: column;
}

h4 {
  font-family: "Fredoka One", sans-serif;
  font-size: 20px;
  color: #1D3557;
  margin-top: 5px;
}

ul li {
  display: inline-block;
}

.promo {
  border: 10px solid #E63946;
  margin-top: 20px;
  padding: 15px;
}

.profilspromos img {
  width: 50px;
  border: 1px solid black;
}

.promo a {
  justify-content: left;
}

h2 {
  font-family: "Fredoka One", sans-serif;
}
a {
  color: white
}
  .containersm {
  display: none;
}

</style>
