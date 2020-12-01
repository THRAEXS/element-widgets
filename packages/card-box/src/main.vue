<template>
  <div class="thx-widget">
    <el-card>
      <template v-slot:header>
        <el-row type="flex" align="middle" v-if="showHeader">
          <el-col :span="leftSpan" v-if="title">
            <b>{{ title }}</b>
          </el-col>
          <el-col align="right" :span="rightSpan" v-if="$slots.toolbar">
            <slot name="toolbar"></slot>
          </el-col>
        </el-row>
      </template>
      
      <slot />
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'ThxCardBox',
  props: {
    title: String
  },
  computed: {
    showHeader() {
      return this.title || this.$slots.toolbar
    },
    leftSpan() {
      return this.span(this.$slots.toolbar)
    },
    rightSpan() {
      return this.span(this.title)
    }
  },
  methods: {
    span(obj) {
      return obj ? 12 : 24
    }
  }
}
</script>
<style scoped>
.thx-widget >>> .el-card__header,
.thx-widget >>> .el-card__body {
  padding: 10px;
}
</style>
