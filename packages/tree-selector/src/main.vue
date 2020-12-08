<template>
  <thx-dialog-box
    :visible.sync="dialogVisible"
    :width="width"
    :top="top"
    @open="handleOpen"
    @opened="handleOpened"
    @close="handleClose"
    @closed="handleClosed">
    <el-tree
      ref="tree"
      highlight-current
      :style="{ height }"
      :data="data"
      :props="props"
      :node-key="nodeKey"
      :accordion="accordion"
      :show-checkbox="showCheckbox"
      :default-expand-all="defaultExpandAll">
      <template v-slot:default="scope">
        <el-radio
          v-model="selected"
          :label="scope.data.id"
          v-if="scope.node.isLeaf">
          {{ scope.node.label }}
        </el-radio>
        <span v-else>{{ scope.node.label }}</span>
      </template>
    </el-tree>
    
    <el-row style="margin-top: 5px;">
      <el-col align="right">
        <el-button size="mini" @click="handleCancel">取 消</el-button>
        <el-button type="primary" size="mini" @click="handleOk">确 定</el-button>
      </el-col>
    </el-row>
  </thx-dialog-box>
</template>
<script>
import DialogBoxMixin from '@@/mixins/dialog-box'

export default {
  name: 'ThxTreeSelector',
  mixins: [DialogBoxMixin],
  props: {
    width: {
      type: String,
      default: '25%'
    },
    height: {
      type: String,
      default: '500px'
    },
    value: [String, Array],
    data: Array,
    props: {
      type: Object,
      default() {
        return {
          label: 'name'
        }
      }
    },
    nodeKey: {
      type: String,
      default: 'id'
    },
    accordion: {
      type: Boolean,
      default: true
    },
    showCheckbox: Boolean,
    defaultExpandAll: Boolean
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
        console.debug('tree selector:', this.selected, this.value)
      }
    }
  },
  methods: {
    handleCancel() {
      this.updateVisible()
      this.$emit('cancel')
    },
    handleOk() {
      console.debug(this.selected)
      const node = this.$refs.tree.getNode(this.selected)
      console.debug(node)
      console.debug(node.label)
      console.debug(node.parent)
      console.debug(node.parent.label)
      console.debug(node.parent.parent)
      console.debug(node.parent.parent.laebl)
      // console.debug(this.$refs.tree.getCheckedNodes())
      // this.handleDeliver(this.selected)
      
      // this.updateVisible()
      // this.$emit('ok')
    }
  }
}
</script>
<style scoped>
::v-deep .el-tree {
  overflow: scroll;
  border: 1px solid #EBEEF5;
}
::v-deep .el-radio .el-radio__label {
  padding-left: 0;
  font-weight: 400;
}
</style>
