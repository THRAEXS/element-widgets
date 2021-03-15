<template>
  <div class="thx-tree-cascader">
    <thx-input-carrier
      v-model="selected.label"
      readonly
      :size="size"
      @click="visible = true"
    />

    <thx-tree-cascader-dialog
      ref="cascader"
      :visible.sync="visible"
      v-model="selected.value"
      :data="data"
      v-bind="$attrs"
      v-on="$listeners"
      @ok="handleOk"
    />
  </div>
</template>
<script>
export default {
  name: 'ThxTreeCascader',
  props: {
    value: [String, Array],
    data: Array,
    size: {
      type: String,
      default: 'mini'
    },
    showAllLevels: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: ' / '
    },
    multiSeparator: {
      type: String,
      default: ' , '
    }
  },
  data() {
    return {
      selected: {
        value: null,
        label: null
      },
      visible: false
    }
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler(val) {
        this.selected.value = val
      }
    },
    data: {
      deep: true,
      handler() {
        const cur = this.$refs.cascader
        const dialog = cur.$refs.dialogBox.$refs.dialog
        this.$set(dialog, 'rendered', true)
        
        this.$nextTick(() => {
          const panel = cur.$refs.panel.$refs.panel
          panel.getCurrentChecked().then(val => {
            const label = cur.getNodeLabel(val)
            this.selected.label = this.handleLabel(label)
          })
        })
      }
    }
  },
  methods: {
    joinLabel(label) {
      return Array.isArray(label)
            ? this.showAllLevels ? label.join(this.separator) : [...label].pop()
            : label
    },
    handleLabel(label) {
      let text = null

      if (label !== undefined && label !== null) {
        const { multiple } = this.$attrs.props || {}
        text = multiple === true
          ? label.map(this.joinLabel).join(this.multiSeparator)
          : this.joinLabel(label)
      }

      return text
    },
    handleOk(value, label) {
      this.selected.label = this.handleLabel(label)
      this.$emit('ok', value, label)
    }
  }
}
</script>
