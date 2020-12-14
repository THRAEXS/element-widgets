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
    :selection="selection"
    v-model="value"
    @selected="handleDeliver"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    v-if="multiple">
    <slot></slot>

    <template v-slot:reserved>
      <slot name="reserved"></slot>
    </template>
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
    :selection="selection"
    v-model="value"
    @selected="handleDeliver"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    v-else>
    <slot></slot>
    
    <template v-slot:reserved>
      <slot name="reserved"></slot>
    </template>
  </thx-pagination-selection-radio>
</template>
<script>
import MainMixin from '@@/mixins/pagination-table'
import TableMixin from '@@/mixins/table'
import PaginationMixin from '@@/mixins/pagination'
import SelectionMixin from '@@/mixins/selection'

import ThxPaginationSelectionRadio from './radio'
import ThxPaginationSelectionMulti from './multi'

export default {
  name: 'ThxPaginationSelection',
  mixins: [MainMixin, TableMixin, PaginationMixin, SelectionMixin],
  components: { ThxPaginationSelectionRadio, ThxPaginationSelectionMulti },
  props: {
    value: [String, Array],
    multiple: Boolean
  }
}
</script>
