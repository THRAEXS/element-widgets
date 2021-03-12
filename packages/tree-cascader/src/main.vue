<template>
  <div class="thx-tree-cascader">
    <thx-input-carrier
      v-model="selected.label"
      readonly
      @click="visible = true"
    />

    <thx-tree-cascader-dialog
      :visible.sync="visible"
      v-model="selected.value"
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
  methods: {
    handleLabel(label) {
      return Array.isArray(label)
            ? this.showAllLevels ? label.join(this.separator) : [...label].pop()
            : label
    },
    handleOk(value, label) {
      let text = null

      if (label !== undefined && label !== null) {
        const { multiple } = this.$attrs.props || {}
        text = multiple === true
          ? label.map(this.handleLabel).join(this.multiSeparator)
          : this.handleLabel(label)
      }
      
      this.selected.label = text

      this.$emit('ok', value, label)
    }
  }
}
</script>
