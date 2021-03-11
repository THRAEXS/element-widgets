<template>
  <thx-card-box title="Case - Tree Cascader Dialog">
    <div class="input-box">
      {{ value }}
    </div>
    <div class="input-box">
      {{ label }}
    </div>
    <el-button type="primary" @click="visible = true">Select</el-button>
    <el-button type="danger" @click="value = null; label = null">Clear</el-button>

    <thx-tree-cascader-dialog
      :visible.sync="visible"
      v-model="value"
      :props="props"
      :data="data"
      @ok="handleOk"
    />
  </thx-card-box>
</template>
<script>
import { getOrgTree } from '@/api'

export default {
  name: 'CaseTreeCascaderDialog',
  data() {
    return {
      props: {
        value: 'id',
        label: 'name',
        // multiple: true,
        // checkStrictly: true,
        // emitPath: false
      },
      data: [],
      value: null,
      // value: [ "3302", "58163" ],
      // value: [["58163"]],
      label: null,
      visible: false
    }
  },
  created() {
    getOrgTree().then(([{ children: data }]) => (this.data = data))
  },
  methods: {
    handleOk(values, labels) {
      this.label = labels
    }
  }
}
</script>
<style scoped>
.input-box {
  min-height: 25px;
  margin-bottom: 5px;
  border: 2px solid #EBEEF5;
  border-radius: 5px;
}
</style>
