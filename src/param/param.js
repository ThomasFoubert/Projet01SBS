const host = '.../api';

export default{

    addEntreprise : host + '/entreprise/add...',
    siretEntreprise : host + '/entreprise/:siret...',
    allEntreprise : host + '/all/entreprise...',

    idEtudiant : host + '/etudiant/{id}...',
    allEtudiant : host + '/all/etudiant...',
    modifEtudiant : host + '/etudiant/{id}/modification...',

    idFormation : host + '/formation/:id...',
    allFormation : host + '/all/formation...',
    depidDepFormations : host + '/all/formations/departement/:depid...',

    idDepartement : host + '/departement/:id...',
    allDepartement : host + '/all/departement...',

    allMotsCles : host + '/all/motscles...',
    depMotsCles : host + '/motscles/departements...',
    formidFormationMotsCles : host + '/all/motscles/formation/:formid...',

    addOffres : host + '/annonce/add...',
<<<<<<< HEAD
    Offres : host + '/all/annonce...',
=======
    allOffres : host + '/all/annonce...',
>>>>>>> main
}