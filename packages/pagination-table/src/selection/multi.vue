<template>
  <div class="thx-widget">
    <pagination-table
      ref="thxTable"
      :data="data"
      :height="height"
      :max-height="maxHeight"
      :small="small"
      :total="total"
      :page="page"
      :size="size"
      :sizes="sizes"
      :index="index"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      @select="handleSelect"
      @select-all="handleSelectAll">
      <template v-slot:pre-column>
        <el-table-column type="selection" align="center" width="40" />
      </template>

      <slot></slot>
      
      <template v-slot:reserved>
        <slot name="reserved"></slot>
      </template>
    </pagination-table>
  </div>
</template>
<script>
import MainMixin from '@@/mixins/pagination-table'
import TableMixin from '@@/mixins/table'
import PaginationMixin from '@@/mixins/pagination'
import SelectionMixin from '@@/mixins/selection'

import PaginationTable from '../main'

export default {
  name: 'ThxPaginationSelectionMulti',
  mixins: [MainMixin, TableMixin, PaginationMixin, SelectionMixin],
  components: { PaginationTable },
  props: {
    value: Array
  },
  computed: {
    ids() {
      return this.data.map(it => it.id)
    },
    selected() {
      return [...new Set(this.value)]
    },
    notOnPage() {
      return this.selected.filter(it => !this.ids.includes(it))
    }
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        // console.debug('watch value:', this.value)
        this.$nextTick(() => this.handleBackfill())
      }
    },
    data() {
      // console.debug('watch data:', this.data)
      this.handleBackfill()
    }
  },
  methods: {
    handleSelect(selection) {
      this.handleMerge(selection)
    },
    handleSelectAll(selection) {
      this.handleMerge(selection)
    },
    handleMerge(selection) {
      const checked = selection.map(it => it.id)
      const merged = [...new Set([...this.notOnPage, ...checked])]
      // const unChecked = this.ids.filter(it => !checked.includes(it))
      // console.debug(
      //   'notOnPage:', this.notOnPage,
      //   'checked:', checked,
      //   'merged:', merged,
      //   'unChecked:', unChecked)

      this.handleDeliver(merged)
    },
    handleBackfill() {
      const pageChecked = this.selected.filter(it => this.ids.includes(it))
      // console.debug('pageChecked:', pageChecked)
      this.$refs.thxTable.rowSelection(pageChecked)
    }
  }
}
</script>
