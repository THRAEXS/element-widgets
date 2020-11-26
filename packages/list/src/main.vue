<template>
  <div>
    <el-table
      style="width: 100%;margin-bottom: 10px;"
      stripe
      border
      fit
      highlight-current-row
      :data="data">
      <el-table-column type="selection" align="center" width="50"></el-table-column>
      <el-table-column type="index" label="No." width="60" align="center" :index="handleIndex"></el-table-column>
      
      <slot>
        <el-table-column label="Columns" align="center"></el-table-column>
      </slot>
    </el-table>

    <el-row>
      <el-col :span="18">
        <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          :current-page.sync="pagination.page"
          :page-size.sync="pagination.size"
          :total="pagination.total"
          :page-sizes="pageSizes"
          ></el-pagination>
      </el-col>
      <!-- <el-col class="text-right" :span="6">
        <slot name="operation"></slot>
      </el-col> -->
      <el-col class="text-right" :span="6">
        <el-button size="mini" @click="$emit('handle-cancel')">取 消</el-button>
        <el-button type="primary" size="mini" @click="$emit('handle-ok')">确 定</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'ListSelector',
  props: {
    data: {
      type: Array,
      required: true
    },
    pagination: {
      type: Object,
      required: true
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50, 100]
      }
    }
  },
  methods: {
    handleIndex(index) {
      const { page, size } = this.pagination
      return (page - 1) * size + (index + 1)
    }
  }
}
</script>
<style>
.text-right { text-align: right; }
</style>
