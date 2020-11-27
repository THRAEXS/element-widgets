<template>
  <div class="thx-component">
    <el-dialog
      :visible.sync="dialogVisible"
      :width="width"
      :top="top"
      :show-close="false"
      @closed="handleClosed">
      <slot>
        <div style="text-align: center;">
          <b>Please add content</b>
        </div>
      </slot>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'ThxDialogBox',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '75%'
    },
    top: {
      type: String,
      default: '3vh'
    }
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  watch: {
    visible() {
      this.dialogVisible = this.visible
    }
  },
  methods: {
    handleClosed() {
      this.$emit('update:visible', false)
    }
  }
}
</script>
<style scoped>
.thx-component >>> .el-dialog__header {
  padding: 0;
}
.thx-component >>> .el-dialog__body {
  padding: 10px;
  min-height: 300px;
}
</style>
