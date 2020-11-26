<template>
  <el-dialog>
    <list-selector :data="data" :pagination="pagination">
      <el-table-column prop="id" label="ID" align="center" width="100"></el-table-column>
      <el-table-column prop="account" label="Account" align="center"></el-table-column>
      <el-table-column prop="name" label="Name" align="center"></el-table-column>
      <el-table-column prop="department" label="Department" align="center"></el-table-column>
      <el-table-column prop="office" label="Office" align="center"></el-table-column>
    </list-selector>
  </el-dialog>
</template>
<script>
import { getUserPage } from '@/api'

export default {
  name: 'UserSelector',
  data() {
    return {
      data: [],
      pagination: {
        page: 1,
        size: 10,
        total: 0 // Trigger watch twice
      }
    }
  },
  watch: {
    // Trigger watch twice
    /* pagination: {
      deep: true,
      handler: function() {
        this.search()
      }
    } */
    'pagination.page'() {
      this.search()
    },
    'pagination.size'() {
      this.search()
    }
  },
  created() {
    this.search()

    // getUser('user-10')
    //   .then(data => console.log('Response:', data))

    // getUsers(['user-2', 'user-7', 'user-10'])
    //   .then(data => console.log('Response:', data))
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
    }
  }
}
</script>
