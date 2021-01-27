<template>
  <el-cascader
    :filterable="filterable"
    v-bind="$attrs"
    v-on="$listeners">
    <template #default="{ node, data }">
      <slot v-bind="{ node, data }" />
    </template>
    <template #empty>
      <slot name="empty" />
    </template>
  </el-cascader>
</template>
<script>
export default {
  name: 'ThxTreeCascader',
  props: {
    filterable: {
      type: Boolean,
      default: true
    }
  },
  created() {
    console.debug('$attrs:', this.$attrs)
    console.debug('$props:', this.$props)
    // console.debug('$listeners:', this.$listeners)
  }
}
</script>
