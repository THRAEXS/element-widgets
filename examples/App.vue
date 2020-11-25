<template>
  <div id="app">
    <el-card>
      <user-selector />
    </el-card>
    <!-- <el-card class="m-t">
      <tree-selector />
    </el-card> -->
  </div>
</template>

<script>
import UserSelector from './components/user-selector'
export default {
  name: 'App',
  components: { UserSelector }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.m-t { margin-top: 10px; }
</style>
