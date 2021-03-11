<template>
  <thx-dialog-box
    :width="width"
    v-bind="$attrs"
    v-on="$listeners"
    @closed="handleClosed"
  >
    <thx-tree-cascader-panel
      class="thx-tree-cascader-panel"
      ref="panel"
      :style="panelStyle"
      v-model="selected"
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
export default {
  name: 'ThxTreeCascaderDialog',
  props: {
    value: [String, Array],
    width: {
      type: String,
      default: '30%'
    },
    panelStyle: Object
  },
  data() {
    return {
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
    }
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler(val) {
        this.selected = val
      }
    }
  },
  methods: {
    getTree() {
      return this.$refs.panel.$refs.panel.tree
    },
    getNodeLabel(val) {
      const getLabel = key => this.getTree().getNode(key).label
      const toLabel = values => Array.isArray(values)
        ? values.map(toLabel)
        : getLabel(values)

      return toLabel(val)
    },
    handleOk() {
      this.$emit('input', this.selected)
      this.$emit('update:value', this.selected)
      this.$emit('ok', this.selected, this.getNodeLabel(this.selected))
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
