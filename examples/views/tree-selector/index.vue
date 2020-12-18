<template>
  <div class="case">
    <thx-card-box title="Case - Tree Selector">
      <el-tree
        :data="data"
        :props="props"
        node-key="id"
        accordion
        show-checkbox></el-tree>
    </thx-card-box>
    <thx-card-box>
      <el-cascader
        style="width: 500px;"
        v-model="value"
        :options="data"
        :show-all-levels="true"
        clearable
        :props="props" />
    </thx-card-box>
    <thx-card-box>
      <el-select v-model="sel" placeholder="Select">
        <template v-slot:empty>
          <el-tree
            :data="data"
            :props="props"
            node-key="id"
            accordion
            show-checkbox></el-tree>
        </template>
      </el-select>
    </thx-card-box>
    <thx-card-box>
      <!-- <el-popover
        placement="bottom-start"
        title="标题"
        width="200"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <el-button slot="reference">click 激活</el-button>
      </el-popover> -->

      <el-input
        style="width: 200px;cursor: pointer;"
        v-model="sel"
        readonly
        :suffix-icon="close ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"
        placeholder="Select"
        @focus="handleFocus"
        @blur="handleBlur"></el-input>
    </thx-card-box>
  </div>
</template>
<script>
export default {
  name: 'CaseTreeSelector',
  data() {
    return {
      data: [],
      props: {
        label: 'name',
        value: 'id',
        expandTrigger: 'hover'
      },
      value: [],
      sel: null,
      close: true
    }
  },
  watch: {
    value() {
      console.debug(this.value)
    }
  },
  created() {
    this.orgTree()
  },
  methods: {
    orgTree() {
      import('@/api').then(({ getOrgTree: ot }) => ot(3).then(data => (this.data = data)))
    },
    handleFocus() {
      console.debug('handleFocus')
      this.close = false
    },
    handleBlur() {
      console.debug('handleBlur')
      this.close = true
    }
  }
}
</script>
<style scoped>
.case >>> .el-input__inner {
  cursor: pointer!important;
}
</style>
