<template>
  <thx-pagination-selection-multi
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
    :value.sync="selected"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    @prev-click="handlePrevClick"
    @next-click="handleNextClick"
    v-if="multiple">
    <slot></slot>
  </thx-pagination-selection-multi>
  
  <thx-pagination-selection-radio
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
    :value.sync="selected"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    @prev-click="handlePrevClick"
    @next-click="handleNextClick"
    v-else>
    <slot></slot>
  </thx-pagination-selection-radio>
</template>
<script>
import MainMixin from '../mixins/main'
import TableMixin from '../mixins/table'
import PaginationMixin from '../mixins/pagination'
import SelectionMixin from '../mixins/selection'

import ThxPaginationSelectionRadio from './radio'
import ThxPaginationSelectionMulti from './multi'

export default {
  name: 'ThxPaginationSelection',
  mixins: [MainMixin, TableMixin, PaginationMixin, SelectionMixin],
  components: { ThxPaginationSelectionRadio, ThxPaginationSelectionMulti },
  props: {
    multiple: Boolean
  },
  watch: {
    selected() {
      this.handleDeliver(this.selected)
    }
  }
}
</script>
