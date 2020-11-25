<template>
  <div>
    <h2>halaman Login {{username}}</h2>
          <p>Lorem ipsum, dotatibus ducimus optio.</p>
          <h4 v-if="isLoading">loadingggggg........</h4>
          <ul>
            <li v-for=" user in dataUser" :key="user.id">{{user.name}}</li>
          </ul>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >Check me out</label
              >
            </div>
            <Button v-on:fire-event="pindahHalaman" title="Register"/>
          </form>
  </div>
</template>

<script>
import axios from 'axios'
import Button from '../../components/base/Button'
export default {
  name: 'Login2',
  components: {
    Button
  },
  data: function () {
    return {
      username: '',
      dataUser: [],
      isLoading: false
    }
  },
  beforeCreate () {
    console.log('beforeCreate di panggil')
  },
  created () {
    console.log('created di panggil')
  },
  beforeMount () {
    console.log('beforeMount di panggil')
  },
  mounted () {
    this.isLoading = true
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res)
        this.isLoading = false
        this.dataUser = res.data
      })
      .catch((err) => {
        console.log(err)
      })

    // console.log('mounted di panggil')
    // this.username = 'risano'
    // fetch
  },
  beforeUpdate () {
    console.log('beforeUpdate di panggil')
  },
  updated () {
    console.log('update di panggil')
  },
  beforeDestroy () {
    console.log('beforeDEstroy di panggil')
  },
  destroyed () {
    console.log('destroyed di panggil')
  },
  methods: {
    pindahHalaman () {
      this.$router.push({ name: 'SignUp' })
    }
  }
}
</script>

<style scoped>

</style>
