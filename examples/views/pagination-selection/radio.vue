<template>
  <thx-card-box title="Case - Pagination Selection Radio">
    <template v-slot:toolbar>
      <b>
        <el-tag type="danger" size="mini">{{ checked }}</el-tag>
      </b>
      <el-button
        type="danger"
        icon="el-icon-delete"
        size="mini"
        circle
        style="padding: 3px;"
        @click="selected = null">
      </el-button>
    </template>

    <thx-pagination-selection
      :data="data"
      :total="total"
      :page.sync="page"
      :size.sync="size"
      :index="{ label: 'No.' }"
      :value.sync="selected">
      <el-table-column prop="id" label="ID" align="center" width="100"></el-table-column>
      <el-table-column prop="account" label="Account" align="center" width="100"></el-table-column>
      <el-table-column prop="name" label="Name" align="center"></el-table-column>
      <el-table-column prop="department" label="Department" align="center"></el-table-column>
      <el-table-column prop="office" label="Office" align="center" width="100"></el-table-column>
    </thx-pagination-selection>
  </thx-card-box>
</template>
<script>
import { getUserPage } from '@/api'

export default {
  name: 'CasePaginationSelectionRadio',
  data() {
    return {
      data: [],
      total: 0,
      page: 1,
      size: 10,
      selected: null
    }
  },
  computed: {
    checked() {
      // Find data
      /* const { id, account, name } = this.data.find(it => it.id === this.selected) || {}
      return { id, account, name } */
      
      return this.selected || 'Unchecked'
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
