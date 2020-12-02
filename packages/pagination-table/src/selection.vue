<template>
  <div class="thx-widget">
    <pagination-table
      :data="data"
      :height="height"
      :max-height="maxHeight"
      @select="handleSelect"
      @select-all="handleSelectAll"
      @selection-change="handleSelectionChange"
      @row-click="handleRowClick"
      @row-dblclick="handleRowDblclick"
      :small="small"
      :total="total"
      :current-page="page"
      :page-size="size"
      :page-sizes="sizes"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      @prev-click="handlePrevClick"
      @next-click="handleNextClick"
      :index="index"
      :show-index="showIndex">
      <template v-slot:pre-column>
        <el-table-column align="center" width="40">
          <template v-slot:default="scope">
            <el-radio
              v-model="selected"
              :label="scope.row.id"
              @change="handleRadioChange" />
          </template>
        </el-table-column>
      </template>

      <slot></slot>
    </pagination-table>
  </div>
</template>
<script>
import MainMixin from './mixins/main'
import TableMixin from './mixins/table'
import PaginationMixin from './mixins/pagination'

import PaginationTable from './main'

export default {
  name: 'ThxPaginationSelection',
  mixins: [MainMixin, TableMixin, PaginationMixin],
  components: { PaginationTable },
  data() {
    return {
      selected: null
    }
  },
  methods: {
    handleRadioChange(val) {
      this.$emit('update:value', val)
      this.$emit('handle-checked', val)
    }
  }
}
</script>
<style scoped>
.thx-widget >>> .el-radio .el-radio__label { display: none; }
</style>
