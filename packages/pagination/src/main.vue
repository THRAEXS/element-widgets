<template>
  <div class="thx-widget">
    <el-row type="flex" align="middle">
      <el-col :span="leftSpan">
        <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          :small="small"
          :total="total"
          :current-page="page"
          :page-size="size"
          :page-sizes="sizes"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          @prev-click="handlePrevClick"
          @next-click="handleNextClick" />
      </el-col>
      <el-col align="right" :span="6" v-if="this.$slots.default">
        <slot></slot>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'ThxPagination',
  props: {
    total: {
      type: Number,
      required: true
    },
    page: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    },
    sizes: Array,
    small: Boolean
  },
  computed: {
    leftSpan() {
      return this.$slots.default ? 18 : 24
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('update:size', val)
      this.$emit('size-change', val)
    },
    handleCurrentChange(val) {
      this.$emit('update:page', val)
      this.$emit('current-change', val)
    },
    handlePrevClick(val) {
      this.$emit('prev-click', val)
    },
    handleNextClick(val) {
      this.$emit('next-click', val)
    }
  }
}
</script>
