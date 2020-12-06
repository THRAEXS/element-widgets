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

    <!-- <thx-tree-selector-carrier /> -->
  </div>
</template>
<script>
// import ThxTreeSelectorCarrier from '~/tree-selector-carrier'

export default {
  name: 'CaseOther',
  // components: { ThxTreeSelectorCarrier },
  data() {
    return {
      visible: false,
      title: 'Case - Others'
    }
  },
  beforeCreate() {
    // console.log(this.$myInstanceProp)
    // console.log(this.$myInstanceMethod)
    // this.$myInstanceMethod()
  }
}
</script>
