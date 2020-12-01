<template>
  <div class="thx-widget">
    <thx-table
      :data="data"
      :height="height"
      :max-height="maxHeight"
      @select="handleSelect"
      @select-all="handleSelectAll"
      @selection-change="handleSelectionChange"
      @row-click="handleRowClick"
      @row-dblclick="handleRowDblclick">
      <template>
        <slot name="pre-column"></slot>

        <el-table-column
          type="index"
          align="center"
          :label="index.label"
          :width="index.width"
          :fixed="index.fixed"
          :index="handleIndex"
          v-if="showIndex" />
        
        <slot></slot>
      </template>
    </thx-table>
    
    <thx-pagination
      style="margin-top: 5px;"
      :small="small"
      :total="total"
      :current-page="page"
      :page-size="size"
      :page-sizes="sizes"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      @prev-click="handlePrevClick"
      @next-click="handleNextClick" />
  </div>
</template>
<script>
import TableMixin from './mixins/table'
import PaginationMixin from './mixins/pagination'

import ThxTable from './table'
import ThxPagination from './pagination'

export default {
  name: 'ThxPaginationTable',
  mixins: [TableMixin, PaginationMixin],
  components: { ThxTable, ThxPagination },
  props: {
    index: {
      type: Object,
      default() {
        return {
          label: '',
          width: 60,
          fixed: false
        }
      }
    },
    showIndex: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleIndex(index) {
      const { page, size } = this.$props
      return (page - 1) * size + (index + 1)
    }
  }
}
</script>
