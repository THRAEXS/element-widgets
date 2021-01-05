<template>
  <div class="thx-widget">
    <thx-tree-selection-multi v-if="multiple" />

    <thx-tree-selection-radio
      v-model="value"
      :style="{ height }"
      :data="data"
      :props="props"
      :node-key="nodeKey"
      :accordion="accordion"
      :default-expand-all="defaultExpandAll"
      :default-expanded-keys="expandedKeys"
      :default-expand-first-node="defaultExpandFirstNode"
      :check-strictly="checkStrictly"
      @selected="handleDeliver"
      v-else />
  </div>
</template>
<script>
import MainMixinx from './mixins/main'

import ThxTreeSelectionRadio from './radio'
import ThxTreeSelectionMulti from './multi'

export default {
  name: 'ThxTreeSelection',
  mixins: [MainMixinx],
  components: { ThxTreeSelectionRadio, ThxTreeSelectionMulti },
  props: {
    value: [String, Array],
    multiple: Boolean
  },
  computed: {
    expandedKeys() {
      const expanded = this.defaultExpandedKeys || []

      if (this.defaultExpandFirstNode && this.data && this.data.length > 0) {
        expanded.push(this.data[0][this.nodeKey])
      }

      return expanded
    }
  }
}
</script>
<style scoped>
.thx-widget ::v-deep .el-tree {
  overflow: auto;
  border: 1px solid #EBEEF5;
  border-radius: 4px;
}
.thx-widget ::v-deep .el-radio .el-radio__label {
  /* padding-left: 0;
  font-weight: 400; */
  display: none;
}
</style>
