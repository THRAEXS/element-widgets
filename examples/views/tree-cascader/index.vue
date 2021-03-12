<template>
  <thx-card-box title="Case - Tree Cascader">
    <el-row :gutter="5">
      <el-col :span="20">
        <thx-tree-cascader
          v-model="selected"
          :props="props"
          :data="data"
          :show-all-levels="showAllLevels"
        />

        <div style="margin-top: 5px;">
          {{ selected }}
        </div>
      </el-col>
      <el-col :span="4">
        <div>
          multiple:
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
        <div>
          showAllLevels:
          <el-switch
            v-model="showAllLevels"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </div>
      </el-col>
    </el-row>
  </thx-card-box>
</template>
<script>
import { getOrgTree } from '@/api'

export default {
  name: 'CaseTreeCascader',
  data() {
    return {
      showAllLevels: true,
      props: {
        value: 'id',
        label: 'name',
        multiple: false,
        checkStrictly: false,
        emitPath: true
      },
      data: [],
      selected: null
      // selected: ['3302', '58160']
    }
  },
  created() {
    getOrgTree(3).then(([{ children: data }]) => (this.data = data))
  }
}
</script>
