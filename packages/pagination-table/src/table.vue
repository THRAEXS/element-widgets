<template>
  <div class="thx-widget">
    <el-table
      style="width: 100%;"
      stripe
      border
      fit
      highlight-current-row
      :data="data"
      :height="height"
      :max-height="maxHeight"
      @select="handleSelect"
      @select-all="handleSelectAll"
      @selection-change="handleSelectionChange"
      @row-click="handleRowClick"
      @row-dblclick="handleRowDblclick">
      <slot>
        <el-table-column label="Columns" align="center"></el-table-column>
      </slot>

      <template v-slot:append>
        <slot name="append"></slot>
      </template>
    </el-table>
  </div>
</template>
<script>
import TableMixin from './mixins/table'

export default {
  name: 'ThxTable',
  mixins: [TableMixin]
}
</script>
