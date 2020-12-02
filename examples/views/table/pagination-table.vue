<template>
  <thx-card-box title="Case - Pagination Table">
    <thx-pagination-table
      :index="{ label: 'No.', width: '60', fixed: true }"
      :data="paging.data"
      :total="paging.total"
      :page.sync="pagination.page"
      :size.sync="pagination.size" >
      <el-table-column prop="account" label="Account" align="center" width="100" fixed></el-table-column>
      <el-table-column prop="name" label="Name" align="center" width="200" fixed></el-table-column>
      <el-table-column prop="department" label="Department" align="center" width="300"></el-table-column>
      <el-table-column prop="office" label="Office" align="center" width="100"></el-table-column>
      <el-table-column prop="remark" label="Remark" align="center" width="800" show-overflow-tooltip></el-table-column>
    </thx-pagination-table>
  </thx-card-box>
</template>
<script>
import { getUserPage } from '@/api'

export default {
  name: 'CasePaginationTable',
  data() {
    return {
      paging: {
        data: [],
        total: 0
      },
      pagination: {
        page: 1,
        size: 10
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
      getUserPage({ page, size }).then(({ data, total }) => (this.paging = { data, total }))
    }
  }
}
</script>
