<template>
  <thx-card-box title="Case - Tree Cascader">
    <thx-tree-cascader
      v-model="selected"
      :props="props"
      :options="data"
      size="mini"
      placeholder="Please select"
      clearable
      style="width: 400px;"
      @focus="handleFocus"
      @blur="handleBlur"
    />
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
    }
  }
}
</script>
