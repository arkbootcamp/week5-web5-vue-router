<template>
  <div>
    <h2>ini username : {{$route.query.username}}</h2>
    <h2>ini password : {{$route.query.password}}</h2>
    <h1>halaman Login</h1>
    <button v-on:click="handleBack">back</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    handleBack () {
      this.$router.go(-1)
    }
  },
  mounted () {
    alert(this.$route.query.username)
  }
}
</script>

<style scoped>

</style>
