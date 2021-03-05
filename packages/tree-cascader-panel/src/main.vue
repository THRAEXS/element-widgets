<template>
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
    selected() {
      this.$emit('input', this.selected)
      this.$emit('update:value', this.selected)
    }
  }
}
</script>
<style scoped>
.el-tree {
  overflow: scroll;
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
