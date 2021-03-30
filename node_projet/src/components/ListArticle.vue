<template>
  <div class="container">
    <div class="row">
      <CardArticle
        v-for="article in articles"
        v-bind:key="article"
        v-bind:auteur-connecter="auteurConnecter"
        v-bind:article="article"/>
    </div>
  </div>
</template>

<script>
import CardArticle from './CardArticle'
import axios from 'axios'
export default {
  name: 'ListArticle',
  components: {
    CardArticle
  },
  data () {
    return {
      articles: []
    }
  },
  async created () {
    this.articles = (await axios.get('http://localhost:3000/')).data
  },
  props: {
    auteurConnecter: String
  }
}
</script>

<style scoped>

</style>
