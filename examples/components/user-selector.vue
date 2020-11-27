<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :width="width"
    :top="top"
    :show-close="false"
    @closed="handleClosed">
    <list-selector
      :data="data"
      :pagination="pagination"
      :value.sync="selected"
      @handle-ok="handleOk"
      @handle-cancel="dialogVisible = false">
      <el-table-column prop="id" label="ID" align="center" width="100"></el-table-column>
      <el-table-column prop="account" label="Account" align="center" width="100"></el-table-column>
      <el-table-column prop="name" label="Name" align="center"></el-table-column>
      <el-table-column prop="department" label="Department" align="center"></el-table-column>
      <el-table-column prop="office" label="Office" align="center" width="100"></el-table-column>
    </list-selector>
  </el-dialog>
</template>
<script>
import { getUserPage, getUser, getUsers } from '@/api'

export default {
  name: 'UserSelector',
  props: {
    value: [String, Array],
    visible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '75%'
    },
    top: {
      type: String,
      default: '3vh'
    }
  },
  data() {
    return {
      dialogVisible: false,
      data: [],
      pagination: {
        page: 1,
        size: 10,
        total: 0
      },
      selected: null
    }
  },
  watch: {
    value() {
      console.log('********')
    },
    visible() {
      this.dialogVisible = this.visible
      this.dialogVisible && this.search()
    },
    'pagination.page'() {
      this.search()
    },
    'pagination.size'() {
      this.search()
    }
  },
  methods: {
    search() {
      const { page, size } = this.pagination
      getUserPage({
        page,
        size,
        params: {
          name: 'gui',
          other: 'oo' 
        } 
      }).then(({ data, total }) => {
        this.data = data
        this.pagination.total = total
      })
    },
    async one(id) {
      return await getUser(id)
    },
    async gets(ids) {
      return await getUsers(ids)
    },
    handleClosed() {
      this.$emit('update:visible', false)
    },
    handleOk() {
      this.$emit('update:value', this.selected)
      this.dialogVisible = false

      this.one(this.selected).then(data => {
        this.$emit('update:data-set', data)
        this.$emit('handle-ok', data)
      })
    }
  }
}
</script>
<style>
.el-dialog__header {
  padding: 0!important;
}
.el-dialog__body {
  padding: 10px!important;
}
</style>
