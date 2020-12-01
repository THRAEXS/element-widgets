<template>
  <div class="thx-widget">
    <el-table
      style="width: 100%;margin-bottom: 10px;"
      stripe
      border
      fit
      highlight-current-row
      :height="height"
      :max-height="maxHeight"
      :data="data">
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
  }
}
</script>
