<template>
  <div class="th-component">
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
  name: 'ThDialogBox',
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
.th-component >>> .el-dialog__header {
  padding: 0;
}
.th-component >>> .el-dialog__body {
  padding: 10px;
  min-height: 300px;
}
</style>
