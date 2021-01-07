<template>
  <div>Tree Cascader</div>
</template>
<script>
import { getOrgTree } from '@/api'

export default {
  name: 'CaseTreeCascader',
  created() {
    getOrgTree().then(data => console.debug(data))
  }
}
</script>
