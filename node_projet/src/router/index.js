import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import NewArticle from '../pages/NewArticle'
import Connexion from '../pages/Connexion'
import Inscription from '../pages/Inscription'
import DeConnexion from '../pages/DeConnexion'
import PageArticle from '../pages/PageArticle'
import UpdateArticle from '../pages/UpdateArticle'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/new', name: 'newArticle', component: NewArticle },
  { path: '/connexion', name: 'seConnecter', component: Connexion },
  { path: '/inscription', name: 'Inscription', component: Inscription },
  { path: '/deconnexion', name: 'deConnexion', component: DeConnexion },
  { path: '/pageArticle', name: 'article', component: PageArticle },
  { path: '/updateArticle', name: 'updateArticle', component: UpdateArticle }
]

const router = new VueRouter({
  routes
})

export default router
