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
      :show-index="showIndex"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
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
  props: {
    value: Array
  },
  computed: {
    ids() {
      return this.data.map(it => it.id)
    },
    notPage() {
      console.log('computed notPage...')
      return this.selected.filter(it => !this.ids.includes(it))
    }
  },
  watch: {
    value() {
      console.log('watch value...', this.selected, this.value)
      this.selected = [...new Set(this.value)]
    },
    data() {
      console.log('watch data...', this.data)
      this.handleBackfill()
    },
    selected() {
      console.log('watch selected....', this.selected)
      this.handleBackfill()
    }
  },
  created() {
    this.selected = [...new Set(this.value)]
    console.log('created value...2', this.selected, this.value)
  },
  methods: {
    handleBackfill() {
      if (this.data.length > 0) {
        const pageChecked = this.selected.filter(it => this.ids.includes(it))
        console.log('pageChecked:', pageChecked, this.data)
        this.$refs.thxTable.rowSelection(pageChecked)
      }
    },
    handleSelectionChange(selection) {
      const checked = selection.map(it => it.id)
      const unChecked = this.ids.filter(it => !checked.includes(it))
      console.log('checked:', checked)
      console.log('unChecked:', unChecked)
      console.log('notPage:', this.notPage)
      
      const val = [...new Set([...this.notPage, ...checked])].sort()
      console.log('final value:', val)
      this.handleDeliver(val)
    }
  }
}
</script>
