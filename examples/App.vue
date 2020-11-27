<template>
  <div id="app">
    <user-radio />
  </div>
</template>

<script>
import UserRadio from '@/views/user-radio'

export default {
  name: 'App',
  components: { UserRadio }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
