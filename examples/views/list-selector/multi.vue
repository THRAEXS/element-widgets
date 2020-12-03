<template>
  <thx-card-box title="Case - List Selector Multi">
    <template v-slot:toolbar>
      <el-button
        type="success"
        icon="el-icon-check"
        size="mini"
        circle
        style="padding: 3px;"
        @click="visible = true">
      </el-button>
    </template>

    <thx-table :data="selected">
      <el-table-column type="index" label="No." align="center" width="50"></el-table-column>
      <el-table-column label="ID" align="center">
        <template v-slot:default="scope">
          {{ scope.row }}
        </template>
      </el-table-column>
      <el-table-column align="center" width="60">
        <template v-slot:default="scope">
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            circle
            style="padding: 3px;"
            @click="handleDelete(scope.$index)">
          </el-button>
        </template>
      </el-table-column>
    </thx-table>

    <thx-list-selector
      multiple
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
    </thx-list-selector>
  </thx-card-box>
</template>
<script>
import { getUserPage } from '@/api'

export default {
  name: 'CaseListSelectorMulti',
  data() {
    return {
      visible: false,
      data: [],
      total: 0,
      page: 1,
      size: 10,
      selected: []
      // selected: ['user-2', 'user-5', 'user-12', 'user-32']
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
    },
    handleDelete(ind) {
      this.selected.splice(ind, 1);
    }
  }
}
</script>
