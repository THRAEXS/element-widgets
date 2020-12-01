<template>
  <div class="thx-widget">
    <el-table
      style="width: 100%;"
      stripe
      border
      fit
      highlight-current-row
      :height="height"
      :max-height="maxHeight"
      :data="data"
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
export default {
  name: 'ThxTable',
  props: {
    data: {
      type: Array,
      required: true
    },
    height: [String, Number],
    maxHeight: {
      type: [String, Number],
      default: 530
    }
  },
  methods: {
    handleSelect() {
      this.$emit('select', ...arguments)
    },
    handleSelectAll() {
      this.$emit('select-all', ...arguments)
    },
    handleSelectionChange() {
      this.$emit('selection-change', ...arguments)
    },
    handleRowClick() {
      this.$emit('row-click', ...arguments)
    },
    handleRowDblclick() {
      this.$emit('row-dblclick', ...arguments)
    }
  }
}
</script>
