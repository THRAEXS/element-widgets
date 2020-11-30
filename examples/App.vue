<template>
  <div id="app" class="thx-component">
    <router-view />
    <!-- <el-row>
      <el-col>
        <case-paging-table />
      </el-col>
    </el-row>
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
    </el-row> -->
  </div>
</template>

<script>
// import UserRadio from '@/views/user-radio'
// import CasePagingTable from './views/case-paging-table'
// import CaseListSelectorMulti from '@/views/case-list-selector-multi'
// import CaseListSelectorRadio from '@/views/case-list-selector-radio'
// import Other from '@/views/other'

export default {
  name: 'App',
    // components: {
    //   UserRadio,
    //   CasePagingTable,
    //   CaseListSelectorMulti,
    //   CaseListSelectorRadio,
    //   Other
    // }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
<style scoped>
/* .thx-component .el-row {
  margin-bottom: 10px;
} */
</style>
