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

      <thx-tree-selection />
      <!-- Content -->

      <template #footer>
        <!-- <el-button type="primary" size="mini">Save</el-button> -->
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
    </thx-card-box>

    <thx-dialog-box :visible.sync="visible" />

    <!-- <div v-for="i in 100" :key="i" style="margin-bottom: 5px;">
      <el-tooltip :content="`Link${i}`" placement="right" :open-delay="300">
        <el-button>Link - {{ i }}</el-button>
      </el-tooltip>
    </div> -->

    <!-- <thx-tree-selector-carrier /> -->

    <!-- <el-row style="margin-top: 5px;">
      <el-col :span="24">
        <el-input class="input-with-select" style="width: 200px">
          <el-button slot="append" icon="el-icon-check"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-row style="margin-top: 5px;">
      <el-col :span="24">
        <thx-input-carrier style="width: 400px;" @click="handleClick" />
      </el-col>
    </el-row> -->
    
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
  },
  methods: {
    handleClick() {
      console.log('((((')
    }
  }
}
</script>
