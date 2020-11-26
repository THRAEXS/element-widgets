<template>
  <div>
    <el-table
      style="width: 100%;"
      stripe
      border
      fit
      highlight-current-row
      :data="data">
      <el-table-column type="selection" align="center" width="50"></el-table-column>
      <el-table-column type="index" label="No." width="60" align="center" :index="handleIndex"></el-table-column>
      
      <slot></slot>
    </el-table>

    <el-pagination
      class="m-t0"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :current-page.sync="pagination.page"
      :page-size.sync="pagination.size"
      :total="pagination.total"
      :page-sizes="pageSizes"
      ></el-pagination>
  </div>
</template>
<script>
export default {
  name: 'ListSelector',
  props: {
    data: {
      type: Array,
      required: true
    },
    pagination: {
      type: Object,
      required: true
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50, 100]
      }
    }
  },
  methods: {
    handleIndex(index) {
      const { page, size } = this.pagination
      return (page - 1) * size + (index + 1)
    }
  }
}
</script>
<style>
.m-t0 { margin-top: 10px; }
</style>
