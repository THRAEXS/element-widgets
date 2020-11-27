<template>
  <div class="thx-component">
    <el-table
      style="width: 100%;margin-bottom: 10px;"
      stripe
      border
      fit
      highlight-current-row
      :max-height="maxHeight"
      :data="data"
      @selection-change="handleSelectionChange">
      <!-- @select="handleSelection"
      @select-all="handleSelectionAll"> -->
      <el-table-column type="selection" align="center" width="40" v-if="multiSelect"></el-table-column>
      <el-table-column align="center" width="40" v-else>
        <template v-slot:default="scope">
          <el-radio
            v-model="selected"
            :label="scope.row.id"
            @change="handleRadioChange" />
        </template>
      </el-table-column>
      <el-table-column type="index" label="No." width="60" align="center" :index="handleIndex"></el-table-column>
      
      <slot>
        <el-table-column label="Columns" align="center"></el-table-column>
      </slot>
    </el-table>

    <el-row type="flex" align="middle">
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
      <el-col align="right" :span="6">
        <slot name="reserved"></slot>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'ThxListSelector',
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
    },
    maxHeight: {
      type: [String, Number],
      default: 530
    }
  },
  data() {
    return {
      selected: null
    }
  },
  created() {
    this.multiSelect && (this.selected = new Set())
  },
  methods: {
    handleIndex(index) {
      const { page, size } = this.pagination
      return (page - 1) * size + (index + 1)
    },
    handleRadioChange(val) {
      this.deliverData(val)
    },
    // handleSelection() {
    //   console.log('handleSelection:', arguments)
    // },
    // handleSelectionAll() {
    //   console.log('handleSelectionAll:', arguments)
    // },
    handleSelectionChange(selection) {
      // console.log('handleSelectionChange:', this.selected, selection)
      // console.log('handleSelectionChange:', selection.map(it => it.id))

      // const identifiers = selection.map(it => it.id)
      // if (!this.selected) {
      //   this.selected = identifiers
      // } else {
      //   identifiers.forEach(i => this.selected.push(i))
      // }

      const ids = selection.map(it => it.id)
      ids.forEach(i => this.selected.add(i))

      this.deliverData(Array.from(this.selected))
    },
    deliverData(data) {
      this.$emit('update:value', data)
      this.$emit('handle-checked', data)
    }
  }
}
</script>
<style scoped>
.thx-component >>> .el-radio .el-radio__label { display: none; }
</style>
