import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Board from '@/components/Board'
import Offres from '@/components/Offres'
import Profil from '@/components/Profil'
import Stages from '@/components/Stages'
import Entreprises from '@/components/Entreprises'
import ModifProfil from '@/components/ModifProfil'
import ConnexionEtudiant from "@/components/ConnexionEtudiant";
import AddOffres from "../components/Offres/AddOffres";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/Board',
      name: 'Board',
      component: Board
    },
    {
      path: '/Offres',
      name: 'Offres',
      component: Offres
    },
    {
      path: '/Profil',
      name: 'Profil',
      component: Profil
    },
    {
      path: '/Stages',
      name: 'Stages',
      component: Stages
    },
    {
      path: '/Entreprises',
      name: 'Entreprises',
      component: Entreprises
    },
    {
      path: '/ModificationProfil',
      name: 'ModifProfil',
      component: ModifProfil
    },
    {
      path: '/Connexionetudiant',
      name: 'Connexionetudiant',
      component: ConnexionEtudiant
    },
    {
      path: '/AddOffres',      
      name: 'AddOffres',   
      component: AddOffres
    }
  ]
})
