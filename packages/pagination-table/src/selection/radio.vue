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
      @current-change="handleCurrentChange">
      <template v-slot:pre-column>
        <el-table-column type="radio" align="center" width="40" :fixed="fixedRadio">
          <template v-slot:default="scope">
            <el-radio
              v-model="selected"
              :label="scope.row.id"
              @change="handleDeliver" />
          </template>
        </el-table-column>
      </template>

      <slot></slot>

      <template v-slot:reserved>
        <slot name="reserved"></slot>
      </template>
    </pagination-table>
  </div>
</template>
<script>
import MainMixin from '../../../../src/mixins/pagination-table'
import TableMixin from '../../../../src/mixins/table'
import PaginationMixin from '../../../../src/mixins/pagination'
import SelectionMixin from '../../../../src/mixins/selection'

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
      selected: null,
      fixedRadio: false
    }
  },
  mounted() {
    this.handleFixedRadio()
  },
  updated() {
    this.handleFixedRadio()
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        this.selected = this.value
      }
    }
  },
  methods: {
    handleFixedRadio() {
      // TODO: Optimize
      this.$nextTick(() => this.fixedRadio = this.$refs.thxTable.$refs.thxTable.$refs.table.columns
        .findIndex(it => it.type !== 'radio' && it.fixed) > -1)
    }
  }
}
</script>
<style scoped>
.thx-widget >>> .el-radio .el-radio__label { display: none; }
</style>
