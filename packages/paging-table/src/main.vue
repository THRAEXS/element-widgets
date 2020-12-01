<template>
  <div class="thx-widget">
    <el-table
      style="width: 100%;margin-bottom: 10px;"
      stripe
      border
      fit
      highlight-current-row
      :max-height="maxHeight"
      :data="value.data">
      <slot>
        <el-table-column label="Columns" align="center"></el-table-column>
      </slot>
    </el-table>

    <el-row type="flex" align="middle">
      <el-col :span="18">
        <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="value.total"
          :current-page.sync="pagination.page"
          :page-size.sync="pagination.size"
          :page-sizes="pagination.sizes">
        </el-pagination>
      </el-col>
      <el-col align="right" :span="6">
        <slot name="reserved"></slot>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'ThxPagingTable',
  props: {
    value: {
      type: Object,
      required: true,
      default() {
        return { data: [], total: 0 }
      }
    },
    pagination: {
      type: Object,
      required: true,
      default() {
        return {
          page: 1,
          size: 10,
          sizes: [10, 20, 30, 50, 100]
        }
      }
    },
    maxHeight: {
      type: [String, Number],
      default: 530
    }
  }
}
</script>
