<template>
  <div>
    <FormArticle/>
  </div>

</template>

<script>
import FormArticle from '../components/FormArticle'

export default {
  name: 'NewArticle',
  components: {
    FormArticle
  },
  created () {
    if (localStorage.getItem('jwt') === null) {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
