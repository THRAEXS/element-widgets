<template>
  <div id="app">
    <el-card>
      <list-selector />
    </el-card>
    <el-card class="m-t">
      <tree-selector />
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.m-t { margin-top: 10px; }
</style>
