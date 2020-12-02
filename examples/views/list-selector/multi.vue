<template>
  <thx-card-box title="Case - List Selector[Multi]">
    <el-row :gutter="10">
      <el-col :span="18">
        <thx-list-selector
          :data="data"
          :pagination="pagination"
          :value.sync="selected"
          multi-select>
          <el-table-column prop="id" label="ID" align="center" width="100"></el-table-column>
          <el-table-column prop="account" label="Account" align="center" width="100"></el-table-column>
          <el-table-column prop="name" label="Name" align="center"></el-table-column>
          <el-table-column prop="department" label="Department" align="center"></el-table-column>
          <el-table-column prop="office" label="Office" align="center" width="100"></el-table-column>
        </thx-list-selector>
      </el-col>
      <el-col :span="6">
        <el-table
          style="width: 100%;margin-bottom: 10px;"
          stripe
          border
          fit
          highlight-current-row
          max-height="530"
          :data="selected">
          <el-table-column label="Ids" align="center">
            <template v-slot:default="scope">
              {{ scope.row }}
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </thx-card-box>
</template>
<script>
import { getUserPage } from '@/api'

export default {
  name: 'CaseListSelectorMulti',
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
