<template>
  <thx-card-box title="Case - Tree Selector">
    <thx-tree-selector
      v-model="selected"
      :props="props"
      :data="data"
    />

    {{ selected }}
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
        multiple: true,
        checkStrictly: false,
        emitPath: false
      },
      data: [],
      // selected: null
      selected: ['58160', '58161', '58162']
    }
  },
  created() {
    getOrgTree().then(([{ children: data }]) => (this.data = data))
  }
}
</script>
