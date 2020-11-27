<template>
  <div id="app" class="thx-component">
    <el-row>
      <el-col>
        <user-radio />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <other />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserRadio from '@/views/user-radio'
import Other from '@/views/other'

export default {
  name: 'App',
  components: { UserRadio, Other }
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
<style scoped>
.thx-component .el-row {
  margin-bottom: 10px;
}
</style>
