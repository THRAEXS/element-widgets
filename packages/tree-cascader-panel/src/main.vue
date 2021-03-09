<template>
  <div>
    <el-tree
      ref="tree"
      :highlight-current="highlightCurrent"
      :node-key="nodeKey"
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
  computed: {
    tree() {
      return this.$refs.tree
    },
    props() {
      return this.tree.props
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
      return this.props.emitPath === false ? val
        : this.getLevelData(this.tree.getNode(val)).map(it => it[this.nodeKey])
    },
    getLevelData(node) {
      if (node.level === 0) return []

      const parent = this.getLevelData(node.parent)
      const { label } = this.props
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
