<template>
  <div class="thx-widget">
    <thx-card-box :title="title">
      <template v-slot:toolbar>
        <el-button
          type="success"
          icon="el-icon-check"
          size="mini"
          circle
          @click="visible = true">
        </el-button>
        <el-button
          type="info"
          icon="el-icon-edit"
          size="mini"
          circle
          @click="visible = true">
        </el-button>
      </template>

      <thx-tree-selector />
    </thx-card-box>

    <thx-dialog-box :visible.sync="visible" />

    <!-- <div v-for="i in 100" :key="i" style="margin-bottom: 5px;">
      <el-tooltip :content="`Link${i}`" placement="right" :open-delay="300">
        <el-button>Link - {{ i }}</el-button>
      </el-tooltip>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'CaseOther',
  data() {
    return {
      visible: false,
      title: 'Case - Others'
    }
  }
}
</script>
