<template>
  <div id="app">
    <!-- <el-card>
      <user-selector />
    </el-card> -->
    <!-- <el-card class="m-t">
      <tree-selector />
    </el-card> -->

    <user-selector :visible.sync="visible" />
    <el-button type="primary" @click="visible = true">Select User</el-button>
  </div>
</template>

<script>
import UserSelector from './components/user-selector'
export default {
  name: 'App',
  components: { UserSelector },
  data() {
    return {
      visible: false
    }
  },
  // watch: {
  //   visible() {
  //     console.log('dddd')
  //   }
  // },
  // methods: {
  //   handleSelectUser() {

  //   }
  // }
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
