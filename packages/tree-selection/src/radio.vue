<template>
  <el-tree
    ref="tree"
    highlight-current
    :data="data"
    :props="props"
    :node-key="nodeKey"
    :accordion="accordion"
    :default-expand-all="defaultExpandAll"
    :expand-on-click-node="false"
    :default-expanded-keys="defaultExpandedKeys">
    <template v-slot="{ node, data }">
      <span>
        <el-radio
          v-model="selected"
          :label="data.id"
          @change="handleChange"
          v-if="checkStrictly || (!checkStrictly && node.isLeaf)" />
        {{ node.label }}
      </span>
    </template>
  </el-tree>
</template>
<script>
import MainMixin from './mixins/main'

export default {
  name: 'ThxTreeSelectionRadio',
  mixins: [MainMixin],
  props: {
    value: String
  },
  methods: {
    handleChange(val) {
      const node = this.$refs.tree.getNode(val)
      this.handleDeliver(node ? this.getLevelNode(node) : [], val)
    }
  }
}
</script>

