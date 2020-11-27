<template>
  <div class="thx-component">
    <el-card>
      <template v-slot:header>
        <el-row type="flex" align="middle" v-if="showHeader">
          <el-col :span="leftSpan" v-if="$slots.title">
            <b><slot name="title"></slot></b>
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
  computed: {
    showHeader() {
      return this.$slots.title || this.$slots.toolbar
    },
    leftSpan() {
      return this.span(this.$slots.toolbar)
    },
    rightSpan() {
      return this.span(this.$slots.title)
    }
  },
  methods: {
    span(slot) {
      return slot ? 12 : 24
    }
  }
}
</script>
<style scoped>
.thx-component >>> .el-card__header,
.thx-component >>> .el-card__body {
  padding: 10px;
}
</style>
