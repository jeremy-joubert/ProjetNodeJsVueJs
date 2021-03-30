<template>
  <div class="container">
    <h1>{{titre}}</h1>
    <div><img class="image_article" src="https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/05/06/node_749505/46982263/public/2020/05/06/B9723396273Z.1_20200506170704_000%2BG02FVMCAG.1-0.jpg?itok=qntyo5h_1588777631"></div>
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
  .image_article {
    width: 50%;
  }
</style>
