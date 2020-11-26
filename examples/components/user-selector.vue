<template>
  <list-selector :data="data" :pagination="pagination">
    <el-table-column prop="id" label="ID" align="center" width="100"></el-table-column>
    <el-table-column prop="name" label="姓名" align="center"></el-table-column>
    <el-table-column prop="deptName" label="所级单位" align="center"></el-table-column>
    <el-table-column prop="officeName" label="所在科室" align="center"></el-table-column>
  </list-selector>
</template>
<script>
import { getUserPage, getUser, getUsers } from '@/api'

export default {
  name: 'UserSelector',
  data() {
    return {
      data: [],
      pagination: {
        page: 1,
        size: 10,
        total: 0
      },
      querys: {
        page: 1,
        size: 10,
        params: {
          name: 'gui',
          other: 'oo'
        }
      }
    }
  },
  // watch: {
  //   pagination: {
  //     deep: true,
  //     handler: function(val) {
  //       console.log(JSON.stringify(val))
  //     }
  //   }
  // },
  created() {
    getUserPage(this.querys)
      .then(data => console.log('Response:', data))
      .catch(e => console.error('Response error:', e))

    getUser('user-10')
      .then(data => console.log('Response:', data))
      .catch(e => console.error('Response error:', e))

    getUsers(['user-2', 'user-7', 'user-10'])
      .then(data => console.log('Response:', data))
      .catch(e => console.error('Response error:', e))

    const total = 3003
    this.pagination.total = total
    for (let i = 0; i < 10; i++) {
      this.data.push({
        id: `user-${i}`,
        name: `HANZO-${i+1}`,
        deptName: 'Peking University Thrid Hospital',
        officeName: 'Dental'
      })
    }
  }
}
</script>
