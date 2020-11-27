<template>
  <thx-card-box title="Case - List Selector[Radio]">
    <template v-slot:toolbar>
      <b>{{ checked }}</b>
    </template>

    <thx-list-selector
      :data="data"
      :pagination="pagination"
      :value.sync="selected">
      <el-table-column prop="id" label="ID" align="center" width="100"></el-table-column>
      <el-table-column prop="account" label="Account" align="center" width="100"></el-table-column>
      <el-table-column prop="name" label="Name" align="center"></el-table-column>
      <el-table-column prop="department" label="Department" align="center"></el-table-column>
      <el-table-column prop="office" label="Office" align="center" width="100"></el-table-column>
    </thx-list-selector>
  </thx-card-box>
</template>
<script>
import { getUserPage } from '@/api'

export default {
  name: 'CaseListSelector',
  data() {
    return {
      data: [],
      pagination: {
        page: 1,
        size: 10,
        total: 0
      },
      selected: null
    }
  },
  computed: {
    checked() {
      const { id, account, name } = this.data.find(it => it.id === this.selected) || {}
      return { id, account, name }
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
        this.data = data
        this.pagination.total = total
      })
    }
  }
}
</script>
