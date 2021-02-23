<template>
<!--
  1.单选
  2.多选
  3.仅选择叶子节点
  4.仅选择指定层级的节点
  5.父子节点不相关选择
  6.样式功能尽量一致
-->
  <thx-card-box title="Case - Tree Cascader Panel">
    <el-collapse>
      <el-collapse-item>
        <template #title>
          Basic <el-tag>{{ selected }}</el-tag>
        </template>
        <el-row :gutter="5">
          <el-col :span="12">
            <el-cascader-panel
              v-model="selected"
              :props="props"
              :options="data"
            />
          </el-col>
          <el-col :span="12">
            <div style="border: 1px solid red;">12</div>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
    
    <!-- <el-row :gutter="5">
      <el-col :span="12">
        <el-cascader-panel
          v-model="selected"
          :props="props"
          :options="data"
        />
      </el-col>
      <el-col :span="12">
        <div style="border: 1px solid red;">12</div>
      </el-col>
    </el-row> -->
  </thx-card-box>
</template>
<script>
import { getOrgTree } from '@/api'

export default {
  name: 'CaseTreeCascaderPanel',
  data() {
    return {
      props: {
        value: 'id',
        label: 'name'
      },
      data: [],
      selected: null
    }
  },
  watch: {
    selected() {
      console.debug('selected:', this.selected)
    }
  },
  created() {
    getOrgTree().then(([{ children: data }]) => (this.data = data))
  }
}
</script>
