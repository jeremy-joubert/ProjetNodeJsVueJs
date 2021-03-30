<template>
  <div class="card col-4" style="width: 18rem;">
    <img :src="img" class="card-img-top" alt="image_article">
    <div class="card-body">
      <h5 class="card-title">{{titre}}</h5>
      <p class="card-text">{{contenu}}</p>
      <button type="button" class="btn btn-primary" @click="voirArticle">Voir l'article</button>
    </div>
    <div v-if="auteurConnecter == auteur" class="btn-group" role="group" aria-label="Basic mixed styles example">
      <button type="button" class="btn btn-danger" @click="deleteArticle">Supprimer</button>
      <button type="button" class="btn btn-warning" @click="updateArticle">Modifier</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CardArticle',
  props: {
    titre: String,
    contenu: String,
    img: String,
    auteur: String,
    auteurConnecter: String

  },
  methods: {
    deleteArticle () {
      const json = JSON.stringify({titre: this.titre, contenue: this.contenu})
      axios.post('http://localhost:3000/delete', json, {headers: {'Content-Type': 'application/json'}})
      this.$router.push('/')
    },
    voirArticle () {
      this.$router.push({ name: 'article', params: { titre: this.titre, contenue: this.contenu, auteur: this.auteur } })
    },
    updateArticle () {
      this.$router.push({ name: 'updateArticle', params: { titre: this.titre, contenue: this.contenu, auteur: this.auteur } })
    }
  }
}
</script>

<style scoped>

</style>
