<template>
<button type="submit" class="btn btn-primary" v-on:click="$emit('fire-event', 'hello teman2', $event, 'risano')">{{title}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: String
  },
  methods: {
    pindahHalaman () {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
