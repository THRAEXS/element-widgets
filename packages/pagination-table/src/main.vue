<template>
  <div class="thx-widget">
    <thx-table
      ref="thxTable"
      :data="data"
      :height="height"
      :max-height="maxHeight"
      @select="handleSelect"
      @select-all="handleSelectAll"
      @selection-change="handleSelectionChange"
      @row-click="handleRowClick"
      @row-dblclick="handleRowDblclick">
      <slot name="pre-column"></slot>

      <el-table-column
        type="index"
        align="center"
        :label="index.label"
        :width="index.width || 60"
        :fixed="index.fixed"
        :index="handleIndex"
        v-if="showIndex" />

      <slot>
        <el-table-column label="Columns" align="center"></el-table-column>
      </slot>

      <template v-slot:append>
        <slot name="append"></slot>
      </template>
    </thx-table>
    
    <thx-pagination
      style="margin-top: 5px;"
      :small="small"
      :total="total"
      :page="page"
      :size="size"
      :sizes="sizes"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      @prev-click="handlePrevClick"
      @next-click="handleNextClick">
      <slot name="reserved"></slot>
    </thx-pagination>
  </div>
</template>
<script>
import MainMixin from '@@/mixins/pagination-table'
import TableMixin from '@@/mixins/table'
import PaginationMixin from '@@/mixins/pagination'

import ThxTable from './table'
import ThxPagination from './pagination'

export default {
  name: 'ThxPaginationTable',
  mixins: [MainMixin, TableMixin, PaginationMixin],
  components: { ThxTable, ThxPagination },
  methods: {
    rowSelection(ids) {
      this.$refs.thxTable.rowSelection(ids)
    } 
  }
}
</script>
