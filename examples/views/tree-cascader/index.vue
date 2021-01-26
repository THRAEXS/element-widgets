<template>
  <div>
    Tree Cascader
    <!-- <div>{{ data }}</div> -->

    <thx-tree-cascader
      size="mini"
      placeholder="123"
      clearable
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </div>
</template>
<script>
import { getOrgTree } from '@/api'

export default {
  name: 'CaseTreeCascader',
  data() {
    return {
      data: null
    }
  },
  created() {
    getOrgTree().then(data => (this.data = data))
  },
  methods: {
    handleFocus() {
      console.debug('focus:', arguments)
    },
    handleBlur() {
      console.debug('blur:', arguments)
    }
  }
}
</script>
