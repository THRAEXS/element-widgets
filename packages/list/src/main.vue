<template>
  <div>
    <el-table
      style="width: 100%;margin-bottom: 10px;"
      stripe
      border
      fit
      highlight-current-row
      :data="data">
      <el-table-column type="selection" align="center" width="40" v-if="multiSelect"></el-table-column>
      <el-table-column align="center" width="40" v-else>
        <template v-slot:default="scope">
          <el-radio v-model="selected" :label="scope.row.id" />
        </template>
      </el-table-column>
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
          :page-sizes="pageSizes">
        </el-pagination>
      </el-col>
      <el-col class="text-right" :span="6">
        <el-button size="mini" @click="handleCancel">取 消</el-button>
        <el-button type="primary" size="mini" @click="handleOk">确 定</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'ListSelector',
  props: {
    value: [String, Array],
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
    },
    multiSelect: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selected: null
    }
  },
  beforeUpdate() {
    // console.log('beforeUpdate...', this.value, this.selected)
    this.selected = this.value
  },
  methods: {
    handleIndex(index) {
      const { page, size } = this.pagination
      return (page - 1) * size + (index + 1)
    },
    handleCancel() {
      this.$emit('handle-cancel')
    },
    handleOk() {
      this.$emit('update:value', this.selected)
      this.$emit('handle-ok', this.selected)
    }
  }
}
</script>
<style>
.text-right { text-align: right; }
.el-radio .el-radio__label { display: none; }
</style>
