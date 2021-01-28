<template>
  <thx-card-box title="Case - Tree Cascader">
    <thx-tree-cascader
      v-model="selected"
      :props="props"
      :options="data"
      size="mini"
      placeholder="Please select"
      clearable
      :filter-method="handleFilterMethod"
      style="width: 400px;"
      @focus="handleFocus"
      @blur="handleBlur"
    >
      <template #default="{ node }">
        <span>{{ node.label }}</span>
        <el-tag size="mini" type="danger" v-if="!node.isLeaf">({{ node.children.length }})</el-tag>
      </template>
      <template #empty>
        No node
      </template>
    </thx-tree-cascader>
  </thx-card-box>
</template>
<script>
import { getOrgTree } from '@/api'

export default {
  name: 'CaseTreeCascader',
  data() {
    return {
      props: {
        value: 'id',
        label: 'name'
      },
      data: [],
      selected: null
    }
  },
  created() {
    getOrgTree().then(([{ children: data }]) => (this.data = data))
  },
  methods: {
    handleFocus() {
      console.debug('focus:', arguments)
    },
    handleBlur() {
      console.debug('blur:', arguments)
    },
    handleFilterMethod(node, keyword) {
      return node.label.includes(keyword) || node.data.code.includes(keyword)
    }
  }
}
</script>
