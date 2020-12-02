<template>
  <thx-card-box title="Case - Pagination">
    <thx-pagination
      :total="123"
      :page="2"
      :size="30"
      :sizes="[10, 20, 30, 40, 50, 100, 200]" />

    <el-tag>.sync</el-tag>
    <thx-pagination
      :total="total"
      :page.sync="page"
      :size.sync="size">
      <template>
        <i class="el-icon-edit"></i>
        Custom content
        <el-button type="success" size="mini" >Query</el-button>
      </template>
    </thx-pagination>

    <el-tag>Callback</el-tag>
    <thx-pagination
      :total="case2.total"
      :page="case2.page"
      :size="case2.size"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      @prev-click="handlePrevClick"
      @next-click="handleNextClick" />
  </thx-card-box>
</template>
<script>
export default {
  name: 'CasePagination',
  data() {
    return {
      page: 1,
      size: 10,
      total: 177,
      case2: {
        page: 1,
        size: 10,
        total: 3177
      }
    }
  },
  watch: {
    page() {
      console.log('watch page:', arguments)
    },
    size() {
      console.log('watch size:', arguments)
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log('handleSizeChange', val)
      this.case2.size = val
    },
    handleCurrentChange(val) {
      console.log('handleCurrentChange', val)
      this.case2.page = val
    },
    handlePrevClick(val) {
      console.log('handlePrevClick', val)
    },
    handleNextClick(val) {
      console.log('handleNextClick', val)
    }
  }
}
</script>
