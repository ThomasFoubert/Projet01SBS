<template>
<div id="app">
  <div class="row m-3">

    <div class="col-lg-4 offredestage mb-4">
      <div class="card d-flex justify-content-center">
        <div class="card-body">
          <h4 class="card-title">Indications</h4>
          <p class="card-text">L'offre d'emploi ou la proposition de stage s'effectue en remplissant le
            formulaire ci-contre.
          </p>

          <p class="card-text mt-2">
            Un mail de confirmation atteste votre proposition. L'équipe pédagogique examine votre
            requête. Si votre offre est retenue, une validation vous est transmise par mail.
          </p>
          <p class="card-text mt-2">
            Cette étape vous permet de disposer d'un numéro d'offre pour le suivi de votre demande.
          </p>

          <a href="#" class="btn text-white pl-lg-2 pr-lg-2 pt-lg-2 pb-lg-2 mt-lg-2">Contacter le responsable
            de stage </a>
        </div>
      </div>
    </div>
    <div class="col-lg-8">
      <h2>Formulaire de soumission pour une offre de stage / emploi</h2>
      <p>
        Remplissez ce formulaire si vous souhaitez recherche un stagiaire ou un collaborateur.
      </p>
      <form>
        <h4>Informations sur le poste</h4>
        <div class="col-lg-4 p-0">
          <div class="form-group">
            <label for="typedoffre">Type d'offre</label>
            <select class="form-control" id="typedoffre">
              <option>Emploi</option>
              <option>Stage</option>
              <option>Alternance</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label>Description du poste</label>
          <textarea class="form-control" id="champdetexte"></textarea>
        </div>
        <div class="form-group">
          <label for="champdetexte2">Profil recherché</label>
          <textarea class="form-control" id="champdetexte2"></textarea>
        </div>

        <h4 class="mt-3">Informations sur la société</h4>
        <div class="col-lg-4 p-0">
          <div class="form-group">
            <label>Nom de l'entreprise ou de la structure</label>
            <input type="text" name="user_name" placeholder="Nom de l'entreprise"
                   class="form-control p-lg-4">
          </div>
          <div class="form-group">
            <label>Site web</label>
            <input type="text" name="user_name" placeholder="Nom de l'entreprise"
                   class="form-control p-lg-4">
          </div>
          <div class="form-group">
            <label>Nom de la personne à contacter</label>
            <input type="text" name="user_name" placeholder="Nom de l'entreprise"
                   class="form-control p-lg-4">
          </div>
          <div class="form-group">
            <label>Email de la personne à contacter</label>
            <input type="text" name="user_name" placeholder="Nom de l'entreprise"
                   class="form-control p-lg-4">
          </div>
          <div class="form-group">
            <label>Description de la société</label>
            <textarea class="form-control" id="champdetexte"></textarea>
          </div>

        </div>
        <div class="mt-lg-5">
          <button type="submit" class="btn text-white pl-lg-5 pr-lg-5 pt-lg-3 pb-lg-3 mt-lg-3">Enregistrer
          </button>
        </div>
      </form>
    </div>

  </div>
</div>
</template>

<script>
export default {
name: "Ajoutoffre"
}
</script>

<style scoped>


.offredestage .btn {
  background-color: #1D3557;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 0.8rem;

}

.offredestage {
  font-family: Poppins, sans-serif;
}

.card-title {
  color: #1D3557;
  font-size: 25px;
}



</style>
