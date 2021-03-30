<template>
  <div class="card col-3" style="width: 18rem;">
    <img src="https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/05/06/node_749505/46982263/public/2020/05/06/B9723396273Z.1_20200506170704_000%2BG02FVMCAG.1-0.jpg?itok=qntyo5h_1588777631" class="card-img-top" alt="image_article">
    <div class="card-body">
      <h5 class="card-title">{{article.titre}}</h5>
      <p class="card-text">{{article.contenue}}</p>
      <button type="button" class="btn btn-primary" @click="voirArticle">Voir l'article</button>
    </div>
    <div v-if="auteurConnecter == article.auteur" class="btn-group" role="group" aria-label="Basic mixed styles example">
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
    auteurConnecter: String,
    article: []

  },
  methods: {
    deleteArticle () {
      const json = JSON.stringify({ _id: this.article._id })
      axios.post('http://localhost:3000/delete', json, {headers: {'Content-Type': 'application/json'}})
      this.$router.push('/')
    },
    voirArticle () {
      this.$router.push({ name: 'article', params: { titre: this.article.titre, contenue: this.article.contenue, auteur: this.article.auteur } })
    },
    updateArticle () {
      this.$router.push({ name: 'updateArticle', params: { _id: this.article._id, titre: this.article.titre, contenue: this.article.contenue, auteur: this.article.auteur } })
    }
  }
}
</script>

<style scoped>
  .card {
    margin: 5px !important;
    padding: 5px !important;
  }
</style>
