<template>
  <form>
    <div v-if="erreur!==''" class="alert alert-danger" role="alert">
      {{erreur}}
    </div>
    <div class="mb-3">
      <label for="titre_article" class="form-label">Titre de l'article</label>
      <input type="text" v-model="article.titre" class="form-control" id="titre_article" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="contenue_article" class="form-label">Contenu de l'article</label>
      <textarea v-model="article.contenue" class="form-control" id="contenue_article" rows="3"></textarea>
    </div>
    <button type="submit" class="btn btn-primary" @click="modifier">Modifier l'article</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UpdateArticle',
  data () {
    return {
      titreOld: '',
      article: [],
      erreur: ''
    }
  },
  async created () {
    this.titreOld = this.$route.params.titre
    this.article = {titre: this.$route.params.titre, contenue: this.$route.params.contenue, auteur: this.$route.params.auteur}
  },
  methods: {
    modifier () {
      const json = JSON.stringify({titreOld: this.titreOld, titre: this.article.titre, contenue: this.article.contenue})
      axios.post('http://localhost:3000/update', json, {headers: {'Content-Type': 'application/json'}})
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
