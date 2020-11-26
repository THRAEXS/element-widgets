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
import { getUserPage } from '@/api'

export default {
  name: 'UserSelector',
  props: {
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
  // created() {
  //   this.selected = 'user-4'
  //   // this.$set(this, 'selected', 'user-8')
  // },
  /* created() {
    this.search()

    // getUser('user-10')
    //   .then(data => console.log('Response:', data))

    // getUsers(['user-2', 'user-7', 'user-10'])
    //   .then(data => console.log('Response:', data))
  }, */
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
    handleClosed() {
      this.$emit('update:visible', false)
      console.log(this.selected)
    },
    handleOk() {
    // handleOk(val) {
      // const tips = `
      // (v-model || :value) && (this.selected = val)
      // or
      // :value.sync
      // `
      // console.log(tips, val)
      // this.selected = val

      this.dialogVisible = false
    }
  }
}
</script>
<style>
.el-dialog__header {
  padding: 0!important;
}
.el-dialog__body {
  padding: 10px 10px 10px 10px!important;
}
</style>
