<template>
  <div class="thx-widget">
    <el-dialog
      ref="dialog"
      :visible.sync="dialogVisible"
      :width="width"
      :top="top"
      :show-close="false"
      @open="handleOpen"
      @opened="handleOpened"
      @close="handleClose"
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
import MainMixin from '../../../src/mixins/dialog-box'

export default {
  name: 'ThxDialogBox',
  mixins: [MainMixin]
}
</script>
<style scoped>
.thx-widget >>> .el-dialog__header {
  padding: 0;
}
.thx-widget >>> .el-dialog__body {
  padding: 10px;
  /* min-height: 300px; */
}
</style>
