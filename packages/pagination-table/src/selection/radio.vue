<template>
  <div class="thx-widget">
    <pagination-table
      :data="data"
      :height="height"
      :max-height="maxHeight"
      :small="small"
      :total="total"
      :page="page"
      :size="size"
      :sizes="sizes"
      :index="index"
      :show-index="showIndex"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange">
      <template v-slot:pre-column>
        <el-table-column align="center" width="40">
          <template v-slot:default="scope">
            <el-radio
              v-model="selected"
              :label="scope.row.id"
              @change="handleDeliver" />
          </template>
        </el-table-column>
      </template>

      <slot></slot>
    </pagination-table>
  </div>
</template>
<script>
import MainMixin from '../mixins/main'
import TableMixin from '../mixins/table'
import PaginationMixin from '../mixins/pagination'
import SelectionMixin from '../mixins/selection'

import PaginationTable from '../main'

export default {
  name: 'ThxPaginationSelectionRadio',
  mixins: [MainMixin, TableMixin, PaginationMixin, SelectionMixin],
  components: { PaginationTable },
  props: {
    value: String
  },
  data() {
    return {
      selected: null
    }
  }
}
</script>
<style scoped>
.thx-widget >>> .el-radio .el-radio__label { display: none; }
</style>
