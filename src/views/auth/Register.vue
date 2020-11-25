<template>
  <div>
    <h3>ini parameternya : {{$route.params.iduser}}</h3>
     <!-- <h3>ini parameternya2 : {{$route.params.testes}}</h3> -->
    <h1>halaman Register</h1>
    <button v-on:click="handleBack">back</button>
  </div>
</template>

<script>
export default {
  name: 'Register',
  methods: {
    handleBack () {
      this.$router.go(-2)
      // this.$route
    }
  }
}
</script>

<style scoped>

</style>
