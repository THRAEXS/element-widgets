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
      :data="data" />
      <!-- :default-expanded-keys="data.length > 0 ? [data[0].id] : []" /> -->
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
        label: 'name',
        children: 'childOrgList'
      },
      data: []
    }
  },
  created() {
    this.orgTree()
  },
  methods: {
    orgTree() {
      import('@/api').then(({ getOrgTree: ot }) => ot().then(data => (this.data = data)))
    }
  }
}
</script>
