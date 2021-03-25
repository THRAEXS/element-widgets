<template>
  <thx-card-box title="Case - Tree Selector Radio">
    <thx-input-carrier
      :value.sync="value"
      clearable
      @click="visible = true" />

    <thx-tree-selector
      v-model="selected"
      :visible.sync="visible"
      :props="props"
      check-all-levels
      :data="data"
      @ok="handleOk" />
  </thx-card-box>
</template>
<script>
export default {
  name: 'CaseTreeSelectorRadio',
  data() {
    return {
      value: null,
      selected: null,
      visible: false,
      props: {
        label: 'name'
      },
      data: []
    }
  },
  created() {
    this.orgTree()
  },
  methods: {
    orgTree() {
      import('@/api').then(({ getOrgV1Tree: ot }) => ot().then(data => (this.data = data)))
    },
    handleOk(checked, nodes) {
      console.debug(this.selected, arguments)
      this.selected = checked
      console.debug()
      this.value = nodes.map(it => it.name).join(' / ')
    }
  }
}
</script>
