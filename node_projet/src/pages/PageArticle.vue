<template>
  <div class="container">
    <h1>{{titre}}</h1>
    <div></div>
    <div>{{contenue}}</div>
    <div>L'article a été ecrit par : {{auteur}}</div>
  </div>
</template>

<script>

export default {
  name: 'PageArticle',
  data () {
    return {
      titre: '',
      contenue: '',
      auteur: ''
    }
  },
  async created () {
    this.titre = this.$route.params.titre
    this.contenue = this.$route.params.contenue
    this.auteur = this.$route.params.auteur
  }

}
</script>

<style scoped>

</style>
