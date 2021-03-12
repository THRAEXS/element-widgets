<template>
  <thx-card-box title="Case - Tree Cascader Dialog">
    <el-row :gutter="5">
      <el-col :span="20">
        <div class="input-box">
          {{ value }}
        </div>
        <div class="input-box">
          {{ label }}
        </div>

        <el-button type="primary" @click="visible = true">Select</el-button>
        <el-button type="danger" @click="value = null; label = null">Clear</el-button>
      </el-col>
      <el-col :span="4">
        <div>
          Multiple:
          <el-switch
            v-model="props.multiple"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </div>

        <div>
          checkStrictly:
          <el-switch
            v-model="props.checkStrictly"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </div>

        <div>
          emitPath:
          <el-switch
            v-model="props.emitPath"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </div>
      </el-col>
    </el-row>

    <thx-tree-cascader-dialog
      :visible.sync="visible"
      v-model="value"
      :props="props"
      :data="data"
      :filter-node-method="handleFilterNode"
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
        multiple: false,
        checkStrictly: false,
        emitPath: true
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
    handleFilterNode(value, data) {
      if (!value) return true

      return data.name.indexOf(value) !== -1
        || data.code.toLowerCase().indexOf(value.toLowerCase()) > -1
    },
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
