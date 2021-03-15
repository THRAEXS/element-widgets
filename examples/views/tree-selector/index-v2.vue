<template>
  <thx-card-box title="Case - Tree Selector">
    <thx-tree-selector
      v-model="selected"
      :props="props"
      :data="data"
    />
  </thx-card-box>
</template>
<script>
import { getOrgTree } from '@/api'

export default {
  name: 'CaseTreeSelector',
  data() {
    return {
      props: {
        value: 'id',
        label: 'name',
        multiple: false,
        checkStrictly: false,
        emitPath: false
      },
      data: [],
      selected: null
    }
  },
  created() {
    getOrgTree().then(([{ children: data }]) => (this.data = data))
  }
}
</script>
