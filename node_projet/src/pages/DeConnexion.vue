<template>
<div></div>
</template>

<script>
export default {
  name: 'DeConnexion',
  created () {
    localStorage.clear()
    this.$router.push('/')
  }
}
</script>

<style scoped>

</style>
