<template>
  <div>
    <el-tree
      ref="tree"
      :highlight-current="highlightCurrent"
      :node-key="nodeKey"
      v-bind="$attrs"
      v-on="$listeners">
      <template v-slot="{ node, data }">
        <el-radio
          v-model="selected"
          :label="data[nodeKey]"
          v-if="node.isLeaf"
        >
          {{ node.label }}
        </el-radio>
        <span v-else>
          {{ node.label }}
        </span>
      </template>
    </el-tree>
  </div>
</template>
<script>
export default {
  name: 'ThxTreeCascaderPanel',
  props: {
    highlightCurrent: {
      type: Boolean,
      default: true
    },
    nodeKey: {
      type: String,
      default: 'id'
    }
  },
  data() {
    return {
      selected: null
    }
  },
  watch: {
    selected(val) {
      const node = this.$refs.tree.getNode(val)
      const vals = this.getLevelNode(node).map(it => it[this.nodeKey])

      this.$emit('input', vals)
      this.$emit('update:value', vals)
    }
  },
  methods: {
    getLevelNode(node) {
      if (node.level === 0) return []

      const parent = this.getLevelNode(node.parent)
      const { label } = Object.assign({}, this.$refs.tree.props, this.props)
      const [data, key] = [node.data, this.nodeKey]

      return [...parent, { [key]: data[key], [label]: data[label] }]
    }
  }
}
</script>
<style scoped>
.el-tree {
  border: 1px solid #EBEEF5;
}
.el-tree span {
  font-size: 14px;
}
::v-deep .el-radio .el-radio__label {
  padding-left: 0;
  font-weight: 400;
}
</style>
