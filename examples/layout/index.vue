<template>
  <el-container>
    <layout-aside />

    <layout-main />
  </el-container>
</template>
<script>
import { LayoutAside, LayoutMain } from './components'

export default {
  name: 'Layout',
  components: {
    LayoutAside,
    LayoutMain
  }
}
</script>
<style scoped>
.el-main {
  padding: 10px;
}
</style>
