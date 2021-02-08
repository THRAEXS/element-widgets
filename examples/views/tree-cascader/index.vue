<template>
  <thx-card-box title="Case - Tree Cascader">
    <div>{{ selected }}</div>

    <thx-tree-cascader
      v-model="selected"
      :props="props"
      :options="data"
      size="mini"
      placeholder="Please select"
      clearable
      :filter-method="handleFilterMethod"
      style="width: 100%;"
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
        label: 'name',
        // checkStrictly: true,
        // emitPath: false,
        // multiple: true
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
    handleFilterMethod({ label, data }, keyword) {
      const [lab, code, kw] = [label, data.code, keyword].map(it => it.toLowerCase())
      return lab.includes(kw) || code.includes(kw)
    }
  }
}
</script>
