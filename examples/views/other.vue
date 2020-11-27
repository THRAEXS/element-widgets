<template>
  <div class="thx-component">
    <thx-card-box show-header>
      <template v-slot:title>
        Others
      </template>

      <template v-slot:toolbar>
        <el-button
          type="success"
          icon="el-icon-check"
          size="mini"
          circle
          @click="visible = true"
        ></el-button>
        <el-button
          type="info"
          icon="el-icon-edit"
          size="mini"
          circle
          @click="visible = true"
        ></el-button>
      </template>

      <thx-tree-selector />
    </thx-card-box>

    <thx-dialog-box :visible.sync="visible" />
  </div>
</template>
<script>
export default {
  name: 'Other',
  data() {
    return {
      visible: false
    }
  }
}
</script>
