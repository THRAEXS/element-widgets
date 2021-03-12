<template>
  <thx-dialog-box
    :width="width"
    v-bind="$attrs"
    v-on="$listeners"
    @closed="handleClosed"
  >
    <div class="thx-filter" v-if="showFilter">
      <el-input
        v-model="filterText"
        v-bind="filterInputConfig"
      />
    </div>
    
    <thx-tree-cascader-panel
      class="thx-tree-cascader-panel"
      ref="panel"
      v-model="selected"
      :style="panelStyle"
      :filter-node-method="filterNodeMethod || handleFilterNode"
      v-bind="$attrs"
      v-on="panelListeners"
    />

    <div class="thx-button-group">
      <el-button size="mini" @click="handleCancel">取 消</el-button>
      <el-button type="primary" size="mini" @click="handleOk">确 定</el-button>
    </div>
  </thx-dialog-box>
</template>
<script>
const DefaultFilterInput = {
  size: 'mini',
  placeholder: '输入关键字进行过滤',
  clearable: true
}

export default {
  name: 'ThxTreeCascaderDialog',
  props: {
    value: [String, Array],
    width: {
      type: String,
      default: '30%'
    },
    panelStyle: Object,
    showFilter: {
      type: Boolean,
      default: true
    },
    filterInput: Object,
    filterNodeMethod: Function
  },
  data() {
    return {
      filterText: '',
      selected: null
    }
  },
  computed: {
    panelListeners() {
      const baned = ['input', 'update:value', 'update:visible', 'ok']
      const events = {}
      Object.keys(this.$listeners)
        .filter(e => !baned.includes(e))
        .forEach(e => (events[e] = this.$listeners[e]))
        
      return events
    },
    filterInputConfig() {
      return Object.assign({}, DefaultFilterInput, this.filterInput || {})
    }
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler(val) {
        this.selected = val
      }
    },
    filterText(val) {
      this.getTree().filter(val)
    }
  },
  methods: {
    handleFilterNode(value, data, node) {
      return !value ? true : node.label.indexOf(value) !== -1
    },
    getTree() {
      return this.$refs.panel.$refs.panel.tree
    },
    getNodeLabel(val) {
      if (!val) return null
      
      const getLabel = key => this.getTree().getNode(key).label
      const toLabel = values => Array.isArray(values)
        ? values.map(toLabel)
        : getLabel(values)

      return toLabel(val)
    },
    handleOk() {
      const val = this.selected
      this.$emit('input', val)
      this.$emit('update:value', val)
      this.$emit('ok', val, this.getNodeLabel(val))
      this.$emit('update:visible', false)
    },
    handleCancel() {
      this.$emit('cancel')
      this.$emit('update:visible', false)
    },
    handleClosed() {
      this.selected = this.value
      this.$emit('closed')
    }
  }
}
</script>
<style scoped>
.thx-filter {
  margin-bottom: 5px;
}
.thx-tree-cascader-panel {
  border: 1px solid #EBEEF5;
  height: 600px;
  overflow: auto;
}
.thx-button-group {
  margin-top: 5px;
  text-align: right;
}
</style>
