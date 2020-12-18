<template>
  <thx-card-box title="Case - Tree Selection Radio">
    <el-row :gutter="10">
      <el-col :span="6">
        <thx-tree-selection
          v-model="selected"
          :props="props"
          :data="data"
          check-strictly
          @selected="handleSelected" />
      </el-col>
      <el-col :span="18">
        <el-input v-model="selected" />
        <div v-for="item in nodes" :key="item.id">
          {{ item }}
        </div>
      </el-col>
    </el-row>
  </thx-card-box>
</template>
<script>
export default {
  name: 'CaseTreeSelectionRadio',
  data() {
    return {
      selected: null,
      nodes: null,
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
    },
    handleSelected(nodes, val) {
      this.nodes = nodes
      this.selected = val
    }
  }
}
</script>
