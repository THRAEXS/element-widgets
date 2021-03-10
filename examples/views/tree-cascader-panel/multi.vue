<template>
  <thx-card-box title="Case - Tree Cascader Panel Multi">
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
    <el-row :gutter="5" style="margin-top: 5px;">
      <el-col :span="12">
        <el-table
          :data="selected.el"
          stripe
          border
          fit
          highlight-current-row
          size="mini"
          :max-height="500">
          <el-table-column type="index" align="center" />
          <el-table-column label="Value" align="center">
            <template v-slot:default="scope">
              {{ scope.row }}
            </template>
          </el-table-column>
          <el-table-column label="Operation" align="center" width="100px">
            <template v-slot:default="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, 'el')"
              >
                Delete
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="12">
        <el-table
          :data="selected.thx"
          stripe
          border
          fit
          highlight-current-row
          size="mini"
          :max-height="500">
          <el-table-column type="index" align="center" />
          <el-table-column label="Value" align="center">
            <template v-slot:default="scope">
              {{ scope.row }}
            </template>
          </el-table-column>
          <el-table-column label="Operation" align="center" width="100px">
            <template v-slot:default="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, 'thx')"
              >
                Delete
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </thx-card-box>
</template>
<script>
import { getOrgTree } from '@/api'

export default {
  name: 'CaseTreeCascaderPanelMulti',
  data() {
    return {
      props: {
        value: 'id',
        label: 'name',
        multiple: true,
        // checkStrictly: true,
        emitPath: false
      },
      data: [],
      selected: {
        el: null,
        thx: null
        // el: [[ "3306", "58166" ], [ "3306", "58167" ], [ "3306", "58169" ]],
        // thx: [[ "3306", "58166" ], [ "3306", "58167" ], [ "3306", "58169" ]]
        // el: [["3302"], [ "3306", "58166" ], [ "3306", "58167" ], [ "3306", "58169" ]],
        // thx: [["3302"], [ "3306", "58166" ], [ "3306", "58167" ], [ "3306", "58169" ]]
        // el: ["58166", "58167", "58169"],
        // thx: ["58166", "58167", "58169"]
        // el: ["3302", "58166", "58167", "58169"],
        // thx: ["3302", "58166", "58167", "58169"]
      }
    }
  },
  created() {
    getOrgTree().then(([{ children: data }]) => (this.data = data))
  },
  methods: {
    handleDelete(index, key) {
      const temp = [...this.selected[key]]
      temp.splice(index, 1)
      this.selected[key] = temp
    }
  }
}
</script>
