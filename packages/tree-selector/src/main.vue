<template>
  <el-cascader
    ref="selector"
    :options="$attrs['data']"
    :size="size"
    v-bind="$attrs"
    v-on="$listeners"
    v-if="cascader"
  />

  <thx-tree-cascader
    ref="selector"
    :size="size"
    v-bind="$attrs"
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
    }
  }
}
</script>
<style scoped>
.el-cascader {
  width: 100%;
}
</style>
