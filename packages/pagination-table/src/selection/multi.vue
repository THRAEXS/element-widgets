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
      @current-change="handleCurrentChange"
      @prev-click="handlePrevClick"
      @next-click="handleNextClick"
      @selection-change="handleSelectionChange">
      <template v-slot:pre-column>
        <el-table-column type="selection" align="center" width="40"></el-table-column>
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
  name: 'ThxPaginationSelectionMulti',
  mixins: [MainMixin, TableMixin, PaginationMixin, SelectionMixin],
  components: { PaginationTable },
  created() {
    this.selected = new Set()
  },
  methods: {
    handleSelectionChange(selection) {
      const ids = selection.map(it => it.id)
      ids.forEach(i => this.selected.add(i))

      this.handleDeliver(Array.from(this.selected))
    }
  }
}
</script>
