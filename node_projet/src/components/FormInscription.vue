<template>
  <form>
    <div v-if="erreur!==''" class="alert alert-danger" role="alert">
      {{erreur}}
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Adresse email</label>
      <input v-model="mail" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">Nous ne partagerons jamais votre e-mail avec qui que ce soit..</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
      <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword2" class="form-label">Confirmer le mot de passe</label>
      <input v-model="confirmPassword" type="password" class="form-control" id="exampleInputPassword2">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary" @click="submit">S'inscrire</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FormInscription',
  data () {
    return {
      mail: '',
      password: '',
      confirmPassword: '',
      erreur: ''
    }
  },
  methods: {
    async submit () {
      if (this.password === this.confirmPassword) {
        const json = JSON.stringify({mail: this.mail, password: this.password})
        await axios.post('http://localhost:3000/compte/inscription', json, {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            'Content-Type': 'application/json'
          }
        })
        this.$router.push('/')
      } else {
        this.erreur = 'Vous devez saisir le même mot de passe!'
      }
    }
  }
}
</script>

<style scoped>

</style>
