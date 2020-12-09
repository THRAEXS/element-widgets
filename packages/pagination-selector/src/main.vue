<template>
  <thx-dialog-box
    :visible.sync="dialogVisible"
    :width="width"
    :top="top"
    @open="handleOpen"
    @opened="handleOpened"
    @close="handleClose"
    @closed="handleClosed">
    <slot name="prepend"></slot>
    
    <thx-pagination-selection
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
      :multiple="multiple"
      :value.sync="selected"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange">
      <slot></slot>

      <template v-slot:reserved>
        <el-button size="mini" @click="handleCancel">取 消</el-button>
        <el-button type="primary" size="mini" @click="handleOk">确 定</el-button>
      </template>
    </thx-pagination-selection>
  </thx-dialog-box>
</template>
<script>
import DialogBoxMixin from '@@/mixins/dialog-box'
import MainMixin from '@@/mixins/pagination-table'
import TableMixin from '@@/mixins/table'
import PaginationMixin from '@@/mixins/pagination'
import SelectionMixin from '@@/mixins/selection'

import ThxPaginationSelection from '../../pagination-selection'

export default {
  name: 'ThxPaginationSelector',
  components: { ThxPaginationSelection },
  mixins: [DialogBoxMixin, MainMixin, TableMixin, PaginationMixin, SelectionMixin],
  props: {
    value: [String, Array],
    multiple: Boolean
  },
  data() {
    return {
      selected: null
    }
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
    handleCancel() {
      this.updateVisible()
      this.$emit('cancel')
    },
    handleOk() {
      this.handleDeliver(this.selected)
      
      this.updateVisible()
      this.$emit('ok')
    },
    handleClosed() {
      this.selected = this.value
      this.$emit('closed')
    }
  }
}
</script>
