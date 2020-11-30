<template>
  <thx-card-box title="Case - Paging Table">
    <thx-paging-table
      v-model="paging"
      :pagination="pagination">
      <el-table-column prop="id" label="ID" align="center" width="100"></el-table-column>
      <el-table-column prop="account" label="Account" align="center" width="100"></el-table-column>
      <el-table-column prop="name" label="Name" align="center"></el-table-column>
      <el-table-column prop="department" label="Department" align="center"></el-table-column>
      <el-table-column prop="office" label="Office" align="center" width="100"></el-table-column>
    </thx-paging-table>
  </thx-card-box>
</template>
<script>
import { getUserPage } from '@/api'

export default {
  name: 'CasePagingTable',
  data() {
    return {
      paging: { data: [], total: 0 },
      pagination: {
        page: 1,
        size: 10
        // sizes: [10, 20, 20, 30, 50, 100]
      }
    }
  },
  watch: {
    'pagination.page'() {
      this.search()
    },
    'pagination.size'() {
      this.search()
    }
  },
  created() {
    this.search()
  },
  methods: {
    search() {
      const { page, size } = this.pagination
      getUserPage({ page, size }).then(({ data, total }) => {
        this.paging = { data, total }
      })
    }
  }
}
</script>
