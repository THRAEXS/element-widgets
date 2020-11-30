<template>
  <el-aside width="240px">
    <el-menu
      :default-openeds="['1', '3']"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <template v-for="item in routes">
        <el-menu-item
          :index="item.path + item.children[0].path"
          :key="item.path + item.children[0].path"
          v-if="item.children.length === 1">
          <router-link :to="item.path + item.children[0].path">
            <i :class="item.children[0].meta.icon"></i> {{ item.children[0].meta.title }}
          </router-link>
        </el-menu-item>

        <el-submenu :index="item.path" :key="item.path" v-else>
          <template v-slot:title v-if="item.meta">
            <i :class="item.meta.icon"></i> {{ item.meta.title }}
          </template>
          <el-menu-item v-for="sub in item.children" :key="`${item.path}/${sub.path}`" :index="`${item.path}/${sub.path}`">
            <router-link :to="`${item.path}/${sub.path}`">
              <i :class="sub.meta.icon"></i> {{ sub.meta.title }}
            </router-link>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  name: 'LayoutAside',
  computed: {
    routes() {
      const routes = this.$router.options.routes.filter(it => !it.hidden)
      console.log(routes)
      return routes
    }
  }
}
</script>
<style scoped>
a,
a:focus,
a:hover {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}
</style>
