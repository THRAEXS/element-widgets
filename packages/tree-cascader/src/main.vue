<template>
  <el-cascader v-bind="$attrs" v-on="$listeners" />
</template>
<script>
export default {
  name: 'ThxTreeCascader',
  props1: {
    value: [String, Array],
    options: {
      type: Array,
      default() {
        return []
      }
    },
    props: {
      type: Object,
      default() {
        return {}
      }
    },
    /* size: {
      type: String,
      validator(value) {
        return ['medium', 'small', 'mini'].indexOf(value) !== -1
      }
    }, */
    size: String,
    placeholder: String,
    disabled: Boolean,
    clearable: Boolean,
    showAllLevels: {
      type: Boolean,
      default: true
    },
    collapseTags: Boolean,
    separator: String,
    filterable: Boolean,
    filterMethod: Function,
    debounce: Number,
    beforeFilter: Function
  },
  mounted() {
    console.debug('$attrs:', this.$attrs)
    console.debug('$props:', this.$props)
    console.debug('$listeners:', this.$listeners)
  }
}
</script>
