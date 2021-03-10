<template>
  <div>
    <el-tree
      ref="tree"
      :node-key="nodeKey"
      :highlight-current="highlightCurrent"
      :expand-on-click-node="selfExpandOnClickNode"
      :props="props"
      v-bind="$attrs"
      v-on="$listeners">
      <template v-slot="{ node, data }">
        <template v-if="props.checkStrictly">
          <el-radio
            v-model="selected"
            :label="data[nodeKey]"
          >
            {{ node.label }}
          </el-radio>
        </template>
        <template v-else>
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
      </template>
    </el-tree>
  </div>
</template>
<script>
import merge from 'element-ui/src/utils/merge'

const DefaultProps = {
  checkStrictly: false,
  emitPath: true
}

export default {
  name: 'ThxTreeCascaderPanel',
  props: {
    nodeKey: {
      type: String,
      default: 'id'
    },
    highlightCurrent: {
      type: Boolean,
      default: true
    },
    expandOnClickNode: {
      type: Boolean,
      default: true
    },
    props: Object
  },
  data() {
    return {
      selected: null
    }
  },
  computed: {
    tree() {
      return this.$refs.tree
    },
    config() {
      return merge({ ...DefaultProps }, this.props || {})
    },
    selfExpandOnClickNode() {
      return this.config.checkStrictly ? false : this.expandOnClickNode
    }
  },
  watch: {
    selected(val) {
      const result = this.getSelectedValue(val)
      this.$emit('input', result)
      this.$emit('update:value', result)
    }
  },
  methods: {
    getSelectedValue(val) {
      return this.config.emitPath
        ? this.getLevelData(this.tree.getNode(val)).map(it => it[this.nodeKey])
        : val
    },
    getLevelData(node) {
      if (node.level === 0) return []

      const parent = this.getLevelData(node.parent)
      const { label } = this.config
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
