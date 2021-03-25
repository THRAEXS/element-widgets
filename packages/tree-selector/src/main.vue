<template>
  <el-cascader
    ref="selector"
    :options="$attrs['data']"
    :size="size"
    :filterable="filterable"
    v-bind="Object.assign({}, $attrs, filterInput || {})"
    v-on="$listeners"
    v-if="cascader"
  />

  <thx-tree-cascader
    ref="selector"
    :size="size"
    :filterable="filterable"
    v-bind="$attrs"
    :filter-input="filterInput"
    v-on="$listeners"
    v-else
  />
</template>
<script>
export default {
  name: 'ThxTreeSelector',
  props: {
    cascader: Boolean,
    size: {
      type: String,
      default: 'mini'
    },
    filterable: {
      type: Boolean,
      default: true
    },
    filterInput: Object
  }
}
</script>
<style scoped>
.el-cascader {
  width: 100%;
}
</style>
