<template>
  <div id="app" class="thx-component">
    <el-row>
      <el-col>
        <case-list-selector-multi />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <case-list-selector-radio />
      </el-col>
    </el-row>
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
import CaseListSelectorMulti from '@/views/case-list-selector-multi'
import CaseListSelectorRadio from '@/views/case-list-selector-radio'
import Other from '@/views/other'

export default {
  name: 'App',
  components: {
    UserRadio,
    CaseListSelectorMulti,
    CaseListSelectorRadio,
    Other
  }
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
