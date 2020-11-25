<template>
  <div>
    <h1>halaman Addpin</h1>
    <ul>
      <li><router-link to="/login" class="cobasaja">login</router-link></li>
      <li><router-link :to="{name: 'Register', params: {iduser: 'budi'}}">register</router-link></li>
      <button v-on:click="navigationHandle" >login</button>
      <button v-on:click="navigationHandle2">register</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Addpin',
  methods: {
    navigationHandle () {
      this.$router.push({ name: 'Login', query: { username: 'budi', password: 'helo kity' } })
    },
    navigationHandle2 () {
      this.$router.push({ name: 'Register', params: { iduser: 'risano' } })
    }
  }
}
</script>

<style scoped>
  a.cobasaja{
    color: red;
    background-color: blue;
  }
</style>
