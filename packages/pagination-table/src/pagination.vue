<template>
  <el-row type="flex" align="middle">
    <el-col align="left" :span="leftSpan">
      <el-pagination
        background
        layout="total, sizes, prev, pager, next, jumper"
        :small="small"
        :total="total"
        :current-page="page"
        :page-size="size"
        :page-sizes="sizes"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        @prev-click="handlePrevClick"
        @next-click="handleNextClick" />
    </el-col>
    <el-col align="right" :span="6" v-if="this.$slots.default">
      <slot></slot>
    </el-col>
  </el-row>
</template>
<script>
import PaginationMixin from '../../../src/mixins/pagination'

export default {
  name: 'ThxPagination',
  mixins: [PaginationMixin]
}
</script>
<style scoped>
::v-deep .el-pagination {
  padding: 2px;
}
::v-deep .el-pagination--small .el-input--mini .el-input__inner {
  height: 22px;
  line-height: 22px;
}
</style>
