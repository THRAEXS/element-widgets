<template>
  <div>
    Tree Cascader
    <div>{{ data }}</div>
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
  }
}
</script>
