<template>
  <thx-tree-cascader-panel-radio
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>
<script>
import ThxTreeCascaderPanelRadio from './radio'

export default {
  name: 'ThxTreeCascaderPanel',
  components: { ThxTreeCascaderPanelRadio }
}
</script>
