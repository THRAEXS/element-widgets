<template>
  <el-tree
    ref="tree"
    :node-key="nodeKey"
    :highlight-current="highlightCurrent"
    :expand-on-click-node="selfExpandOnClickNode"
    v-bind="$attrs"
    v-on="$listeners">
    <template v-slot="{ node, data }">
      <template v-if="config.checkStrictly">
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
</template>
<script>
import merge from 'element-ui/src/utils/merge'

const DefaultProps = {
  checkStrictly: false,
  emitPath: true,
  value: 'value',
  label: 'label',
  children: 'children'
}

export default {
  name: 'ThxTreeCascaderPanelRadio',
  props: {
    value: {},
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
    }
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
      return merge({ ...DefaultProps }, this.$attrs.props || {})
    },
    selfExpandOnClickNode() {
      return this.config.checkStrictly ? false : this.expandOnClickNode
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.selected = val && val.constructor === Array ? [...val].pop() : val
      }
    },
    selected(val) {
      const result = val ? this.getSelectedValue(val) : null
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
  /* border: 1px solid #EBEEF5; */
}
.el-tree span {
  font-size: 14px;
}
::v-deep .el-radio .el-radio__label {
  padding-left: 0;
  font-weight: 400;
}
</style>
