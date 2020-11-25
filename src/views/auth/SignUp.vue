<template>
  <div>
<h2>halaman Sign up</h2>
<h1>namanya adalah : {{name}}</h1>
<h1>usernamenya adalah : {{username}}</h1>
          <p>Lorem ipsum, dotatibus ducimus optio.</p>
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
              <br><br>
              <Button title="Login" @fire-event="pindahHalaman"/>
            </div>
          </form>
  </div>
</template>

<script>
import Button from '../../components/base/Button'
export default {
  name: 'SignUp',
  components: {
    Button
  },
  data: function () {
    return {
      name: '',
      username: ''
    }
  },
  methods: {
    pindahHalaman (value, event, value2) {
      // alert(value)
      event.preventDefault()
      // this.name = value
      // this.username = value2
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
