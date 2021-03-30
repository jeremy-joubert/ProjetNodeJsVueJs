<template>
  <div>
    <ListArticle
    v-bind:auteur-connecter="auteurConnecter"/>
  </div>

</template>

<script>
import ListArticle from '../components/ListArticle'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    ListArticle
  },
  data () {
    return {
      auteurConnecter: ''
    }
  },
  async created () {
    this.auteurConnecter = (await axios.get('http://localhost:3000/user', {headers: { 'token': localStorage.getItem('jwt') }})).data.mail
  }
}
</script>

<style scoped>

</style>
