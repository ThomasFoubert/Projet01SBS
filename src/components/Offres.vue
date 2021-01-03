<template>
  <div id="app">
    <div class="row">

      <div class="col-lg-3 offredestage mt-lg-5">
        <form class="search p-4">

          <div class="form-group">
            <label>Type d'offre</label>
            <select class="form-control">
              <option>Stage</option>
              <option>Alternance</option>

            </select>
          </div>
          <div class="form-group">
            <label>Domaine</label>
            <select class="form-control">
              <option>Communication</option>
              <option>Développement</option>
              <option>Design</option>
              <option>Audiovisuel</option>
              <option>Marketing</option>
            </select>
          </div>
          <button type="submit" class="btn text-white mb-2">Valider</button>
          <router-link to="/MotsCles/AllMotsCles" class="nav-link">
            <button type="submit" class="btnpremier btn text-white"><a
              href="#">Rechercher par mots cles</a></button>
          </router-link>

        </form>
      </div>
      <div class="col-lg-9">

        <div class="presentation m-5 m-lg-5 ">
          <h2 class="text-center text-lg-left">Offres de stage</h2>
          <p class="ppresentation text-center text-lg-left">Vous recherchez un stage ou une alternance ? Trouvez
            ci-dessous des offres
            de
            stage et d'alternances dans divers domaines et entreprises. </p>
          <p class="text-center text-lg-left">Vous cherchez un stagiaire ? Déposez votre offre sur notre site.</p>
<<<<<<< HEAD
          <router-link to="./Offres/AddOffres" class="nav-link">
=======
          <router-link to="/Offres/AddOffres" class="nav-link">
>>>>>>> main
            <button type="submit" class="btnpremier btn text-white"><a
              href="#">Ajouter une offre</a></button>
          </router-link>
        </div>
        <div class="deuxiemeform col-lg-3 offredestage mt-lg-5 mb-5">
          <form class="p-4">

            <div class="form-group">
              <label>Type d'offre</label>
              <select class="form-control">
                <option>Stage</option>
                <option>Alternance</option>

              </select>
            </div>
            <div class="form-group">
              <label>Domaine</label>
              <select class="form-control">
                <option>Communication</option>
                <option>Développement</option>
                <option>Design</option>
                <option>Audiovisuel</option>
                <option>Marketing</option>
              </select>
            </div>
            <button type="submit" class="btn text-white mb-2">Valider</button>

          </form>
        </div>
        <div class="offre d-flex flex-lg-row-wrap  justify-content-center flex-wrap ">


          <div class="card">
            <img src="../assets/imgoffre.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Chargé de Communication</h5>
              <p class="card-text">Au sein du service Marketing et Communication, vous apporterez votre
                support à la mise en place
                d’opérations marketing et de communication, à la gestion back office du site e-commerce et à
                l’animation des réseaux sociaux.</p>
              <a href="#" class="btn text-white">En voir plus</a>
            </div>
          </div>
          <div class="card">
            <img src="../assets/imgoffre.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Chargé de Communication</h5>
              <p class="card-text">Au sein du service Marketing et Communication, vous apporterez votre
                support à la mise en place
                d’opérations marketing et de communication, à la gestion back office du site e-commerce et à
                l’animation des réseaux sociaux.</p>
              <a href="#" class="btn text-white">En voir plus</a>
            </div>
          </div>
          <div class="card">
            <img src="../assets/imgoffre.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Chargé de Communication</h5>
              <p class="card-text">Au sein du service Marketing et Communication, vous apporterez votre
                support à la mise en place
                d’opérations marketing et de communication, à la gestion back office du site e-commerce et à
                l’animation des réseaux sociaux.</p>
              <a href="#" class="btn text-white">En voir plus</a>
            </div>
          </div>
          <div class="card">
            <img src="../assets/imgoffre.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Chargé de Communication</h5>
              <p class="card-text">Au sein du service Marketing et Communication, vous apporterez votre
                support à la mise en place
                d’opérations marketing et de communication, à la gestion back office du site e-commerce et à
                l’animation des réseaux sociaux.</p>
              <a href="#" class="btn text-white">En voir plus</a>
            </div>
          </div>
          <div class="card">
            <img src="../assets/imgoffre.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Chargé de Communication</h5>
              <p class="card-text">Au sein du service Marketing et Communication, vous apporterez votre
                support à la mise en place
                d’opérations marketing et de communication, à la gestion back office du site e-commerce et à
                l’animation des réseaux sociaux.</p>
              <a href="#" class="btn text-white">En voir plus</a>
            </div>
          </div>
          <div class="card">
            <img src="../assets/imgoffre.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Chargé de Communication</h5>
              <p class="card-text">Au sein du service Marketing et Communication, vous apporterez votre
                support à la mise en place
                d’opérations marketing et de communication, à la gestion back office du site e-commerce et à
                l’animation des réseaux sociaux.</p>
              <a href="#" class="btn text-white">En voir plus</a>
            </div>
          </div>
          <div class="card">
            <img src="../assets/imgoffre.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Chargé de Communication</h5>
              <p class="card-text">Au sein du service Marketing et Communication, vous apporterez votre
                support à la mise en place
                d’opérations marketing et de communication, à la gestion back office du site e-commerce et à
                l’animation des réseaux sociaux.</p>
              <a href="#" class="btn text-white">En voir plus</a>
            </div>
          </div>
          <div class="card">
            <img src="../assets/imgoffre.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Chargé de Communication</h5>
              <p class="card-text">Au sein du service Marketing et Communication, vous apporterez votre
                support à la mise en place
                d’opérations marketing et de communication, à la gestion back office du site e-commerce et à
                l’animation des réseaux sociaux.</p>
              <a href="#" class="btn text-white">En voir plus</a>
            </div>
          </div>
          <div class="card">
            <img src="../assets/imgoffre.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Chargé de Communication</h5>
              <p class="card-text">Au sein du service Marketing et Communication, vous apporterez votre
                support à la mise en place
                d’opérations marketing et de communication, à la gestion back office du site e-commerce et à
                l’animation des réseaux sociaux.</p>
              <a href="#" class="btn text-white">En voir plus</a>
            </div>
          </div>


        </div>
      </div>

    </div>


  </div>


</template>
<footer class="footer w-100">
<div class="container p-5">
  <div class="row">
    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
      <h5 class="text-uppercase text-white mb-3">ENTREPRISE</h5>
      <ul class="list-unstyled mb-0 flex-column d-flex">
        <li>
          <a href="#" class="text-white">Déposer une offre</a>
        </li>
      </ul>
    </div>

    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
      <h5 class="text-uppercase text-white mb-3 ">Étudiants</h5>

      <ul class="list-unstyled flex-column d-flex">
        <li>
          <a href="#" class="text-white">S'inscrire</a>
        </li>
        <li>
          <a href="#" class="text-white">Se connecter</a>
        </li>
        <li>
          <a href="#" class="text-white">Ma promo</a>
        </li>
      </ul>
    </div>

    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
      <h5 class="text-uppercase text-white mb-3">Vous informer</h5>

      <ul class="list-unstyled mb-0 flex-column d-flex">
        <li>
          <a href="#" class="text-white">Politique de confidentialité</a>
        </li>
        <li>
          <a href="#" class="text-white">Mentions légales</a>
        </li>
        <li>
          <a href="#" class="text-white">A propos</a>
        </li>
        <li>
          <a href="#" class="text-white">Contact</a>
        </li>
      </ul>
    </div>

    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">

      <ul class="list-unstyled mb-0 flex-column d-flex">
        <li>
          <div class="logofooter">
            <img class="w-75" src="./static/logoiut.png" alt="">
          </div>
        </li>
        <li>
          <img class="w-50 ml-lg-2 mt-lg-2" src="./static/logommi.png" alt="">
        </li>

      </ul>
    </div>

  </div>
</div>

<div class="text-center p-2 text-white ">
  <p>Ce site a été réalisé dans un cadre pédagogique.</p>
</div>
</footer>
<script>
export default {
  name: 'Offres',
  data() {
    return {
      msg: 'Voici toutes les offres'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  color: #1D355d;
}

form {
  border: 1px solid #1D355d;
}

.card {
  width: 18rem;
  margin: 10px;
}

.offre {
  font-family: Poppins, sans-serif;
}

.ppresentation {
  font-size: 20px;
}

h2, p {
  color: #1D3557;
}

.btn {
  background-color: #1D3557;
  font-family: Poppins, sans-serif;
  font-weight: 600;

}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: none;
  color: white;
}

button:hover {
  opacity: 0.5;
}

.deuxiemeform {
  display: none;
}

@media (max-width: 768px) {
  .search {
    display: none;
  }

  .btnpremier {
    margin-left: 60px;
  }

  .btn {
    justify-content: center;
    display: flex;
  }
}
</style>
