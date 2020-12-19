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
      v-loading="loading"
      :element-loading-text="loadingText"
      :element-loading-background="loadingBackground"
      :data="data"
      :height="height"
      :max-height="maxHeight"
      :small="small"
      :total="total"
      :page="page"
      :size="size"
      :sizes="sizes"
      :index="index"
      :multiple="multiple"
      :value.sync="selected"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange">
      <slot></slot>

      <template v-slot:reserved>
        <div :class="{ 'thx-pagination-selector--small': small }">
          <el-button size="mini" @click="handleCancel">取 消</el-button>
          <el-button type="primary" size="mini" @click="handleOk">确 定</el-button>
        </div>
      </template>
    </thx-pagination-selection>
  </thx-dialog-box>
</template>
<script>
import DialogBoxMixin from '../../../src/mixins/dialog-box'
import MainMixin from '../../../src/mixins/pagination-table'
import TableMixin from '../../../src/mixins/table'
import PaginationMixin from '../../../src/mixins/pagination'

import ThxPaginationSelection from '../../pagination-selection'

export default {
  name: 'ThxPaginationSelector',
  components: { ThxPaginationSelection },
  mixins: [DialogBoxMixin, MainMixin, TableMixin, PaginationMixin],
  props: {
    value: [String, Array],
    multiple: Boolean,
    loading: Boolean,
    loadingText: String,
    loadingBackground: {
      type: String,
      default: 'rgba(0, 0, 0, 0.7)'
    }
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
      this.updateVisible()
      this.$emit('update:value', this.selected)
      this.$emit('ok', this.selected)
    },
    handleClosed() {
      this.selected = this.value
      this.$emit('closed')
    }
  }
}
</script>
<style scoped>
.thx-pagination-selector--small .el-button--mini {
  padding-top: 0;
  padding-bottom: 0;
  height: 24px;
} 
</style>
