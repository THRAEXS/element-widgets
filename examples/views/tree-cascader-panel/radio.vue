<template>
  <thx-card-box title="Case - Tree Cascader Panel Radio">
    <el-row :gutter="5" style="margin-bottom: 5px;">
      <el-col :span="12">
        <el-tag type="success" closable @close="selected.el = null">
          Value: {{ selected.el }}
        </el-tag>
      </el-col>
      <el-col :span="12">
        <el-tag type="success" closable @close="selected.thx = null">
          Value: {{ selected.thx }}
        </el-tag>
      </el-col>
    </el-row>
    <el-row :gutter="5">
      <el-col :span="12">
        <el-cascader-panel
          ref="elPanel"
          v-model="selected.el"
          :props="props"
          :options="data"
        />
      </el-col>
      <el-col :span="12">
        <thx-tree-cascader-panel
          ref="thxPanel"
          v-model="selected.thx"
          :props="props"
          :data="data"
        />
      </el-col>
    </el-row>
  </thx-card-box>
</template>
<script>
import { getOrgTree } from '@/api'

export default {
  name: 'CaseTreeCascaderPanelRadio',
  data() {
    return {
      props: {
        value: 'id',
        label: 'name',
        checkStrictly: true,
        emitPath: false
      },
      data: [],
      selected: {
        el: null,
        thx: null
      }
    }
  },
  created() {
    getOrgTree(3).then(([{ children: data }]) => (this.data = data))
  }
}
</script>
