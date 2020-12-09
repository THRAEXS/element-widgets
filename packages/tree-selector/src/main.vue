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
      :default-expand-all="defaultExpandAll"
      :expand-on-click-node="false"
      :default-expanded-keys="expandedKeys">
      <template v-slot="{ node, data }">
        <span>
          <el-radio
            v-model="selected"
            :label="data.id"
            v-if="checkAllLevels || (!checkAllLevels && node.isLeaf)" />
          {{ node.label }}
        </span>
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
    defaultExpandAll: Boolean,
    defaultExpandedKeys: Array,
    defaultExpandFirstNode: {
      type: Boolean,
      default: true
    },
    checkAllLevels: Boolean
  },
  data() {
    return {
      selected: null
    }
  },
  computed: {
    expandedKeys() {
      const expanded = this.defaultExpandedKeys ? this.defaultExpandedKeys : []

      if (this.defaultExpandFirstNode && this.data && this.data.length > 0) {
        expanded.push(this.data[0].id)
      }

      return expanded
    }
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        console.debug('tree selector:', this.selected, this.value)
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
      console.debug('selected:', this.selected)

      let result
      if (this.selected) {
        const node = this.$refs.tree.getNode(this.selected)
        result = node ? this.getResult(node, result) : []
      }
      
      // this.handleDeliver(this.selected)

      console.debug('result:', result)
      
      this.$emit('update:value', this.selected)
      this.updateVisible()
      this.$emit('ok', this.selected, result)
    },
    handleClosed() {
      this.selected = this.value
      this.$emit('closed')
    },
    getResult(node) {
      if (node.level === 0) return []

      const parent = this.getResult(node.parent)
      
      const [data, key, label] = [node.data, this.nodeKey, this.props.label]

      return [...parent, { [key]: data[key], [label]: data[label] }]
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
  /* padding-left: 0;
  font-weight: 400; */
  display: none;
}
</style>
