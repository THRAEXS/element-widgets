<template>
  <el-tree
    ref="tree"
    show-checkbox
    :node-key="nodeKey"
    :highlight-current="highlightCurrent"
    :check-strictly="checkStrictly"
    @check="handleCheck"
    v-bind="$attrs"
    v-on="$listeners"
  />
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
  name: 'ThxTreeCascaderPanelMulti',
  props: {
    value: Array,
    nodeKey: {
      type: String,
      default: 'id'
    },
    highlightCurrent: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    tree() {
      return this.$refs.tree
    },
    config() {
      return merge({ ...DefaultProps }, this.$attrs.props || {})
    },
    checkStrictly() {
      return this.config.checkStrictly
    }
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler(val) {
        this.$nextTick(() => val && this.tree.setCheckedKeys(
          this.config.emitPath ? val.map(it => [...it].pop()) : val))
      }
    }
  },
  methods: {
    handleCheck(current, { checkedKeys, checkedNodes }) {
      const { checkStrictly, emitPath } = this.config
      const keys = checkStrictly ? checkedKeys : checkedNodes
        .filter(node => !node[this.config.children])
        .map(node => node[this.nodeKey])
      const result = emitPath
        ? keys.map(key => this.getLevelData(this.tree.getNode(key)).map(it => it[this.nodeKey]))
        : keys
      this.$emit('input', result)
      this.$emit('update:value', result)
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
</style>
