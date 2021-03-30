<template>
  <form>
    <div v-if="erreur!==''" class="alert alert-danger" role="alert">
      {{erreur}}
    </div>
    <div class="mb-3">
      <label for="titre_article" class="form-label">Titre de l'article</label>
      <input type="text" v-model="titre" class="form-control" id="titre_article" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="contenue_article" class="form-label">Contenu de l'article</label>
      <textarea v-model="contenue" class="form-control" id="contenue_article" rows="3"></textarea>
    </div>
    <button type="submit" class="btn btn-primary" @click="submit">Créer l'article</button>
  </form>
</template>

<script>

import axios from 'axios'

export default {
  name: 'FormArticle',
  data () {
    return {
      titre: '',
      contenue: '',
      auteur: '',
      erreur: ''
    }
  },
  methods: {
    async submit () {
      const json = JSON.stringify({titre: this.titre, contenue: this.contenue, auteur: this.auteur})
      axios.post('http://localhost:3000/new', json, {headers: {'Content-Type': 'application/json'}}).then(res => {
        if (res.status === 200) {
          this.$router.push('/')
        }
      })
    }
  },
  async created () {
    this.auteur = (await axios.get('http://localhost:3000/user', {headers: { 'token': localStorage.getItem('jwt') }})).data.mail
  }
}
</script>

<style scoped>

</style>
