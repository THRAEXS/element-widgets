<template>
  <thx-table
    :data="data"
    @row-click="handleRowClick"
    @row-dblclick="handleRowDblclick">
    <el-table-column type="index" label="No." align="center" width="50" fixed></el-table-column>
    <el-table-column prop="account" label="Account" align="center" width="100" fixed></el-table-column>
    <el-table-column prop="name" label="Name" align="center" width="200" fixed></el-table-column>
    <el-table-column prop="department" label="Department" align="center" width="300"></el-table-column>
    <el-table-column prop="office" label="Office" align="center" width="100"></el-table-column>
    <el-table-column prop="remark" label="Department" align="center" width="800" show-overflow-tooltip></el-table-column>

    <template v-slot:append>
      <el-tag type="success" style="margin-top: 10px;">Append content...</el-tag>
    </template>
  </thx-table>
</template>
<script>
import { getUserPage } from '@/api'

export default {
  name: 'CaseTable',
  data() {
    return {
      data: []
    }
  },
  created() {
    this.search()
  },
  methods: {
    search() {
      getUserPage({ page: 1, size: 30 }).then(({ data }) => (this.data = data))
    },
    handleRowClick() {
      console.log('row-click', ...arguments)
    },
    handleRowDblclick() {
      console.log('row-dblclick', ...arguments)
    }
  }
}
</script>
