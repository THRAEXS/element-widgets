<template>
  <thx-card-box title="Case - Pagination Selector Radio">
    <thx-input-carrier
      :value.sync="selected"
      clearable
      @click="visible = true" />
    
    <thx-pagination-selector
      :data="data"
      :total="total"
      :page.sync="page"
      :size.sync="size"
      :index="{ label: 'No.' }"
      :value.sync="selected"
      :visible.sync="visible">
      <el-table-column prop="id" label="ID" align="center" width="100"></el-table-column>
      <el-table-column prop="account" label="Account" align="center" width="100"></el-table-column>
      <el-table-column prop="name" label="Name" align="center"></el-table-column>
      <el-table-column prop="department" label="Department" align="center"></el-table-column>
      <el-table-column prop="office" label="Office" align="center" width="100"></el-table-column>
    </thx-pagination-selector>
  </thx-card-box>
</template>
<script>
import { getUserPage } from '@/api'

export default {
  name: 'CasePaginationSelectorRadio',
  data() {
    return {
      visible: false,
      data: [],
      total: 0,
      page: 1,
      size: 10,
      selected: null
      // selected: 'user-12'
    }
  },
  watch: {
    page() {
      this.search()
    },
    size() {
      this.search()
    }
  },
  created() {
    this.search()
  },
  methods: {
    search() {
      getUserPage({
        page: this.page,
        size: this.size
      }).then(({ data, total }) => {
        this.data = data
        this.total = total
      })
    }
  }
}
</script>
