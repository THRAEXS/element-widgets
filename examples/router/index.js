import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout'

const constantRoutes = [
  {
    path: '/',
    component: Layout,
    meta: { title: 'Dashboard', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'dashboard',
        alias: '',
        name: 'Dashboard',
        component: () => import('@/views/dashboard'),
        meta: { title: 'Dashboard', icon: 'el-icon-platform-eleme' }
      }
    ]
  },

  {
    path: '/table',
    component: Layout,
    meta: { title: 'Table', icon: 'el-icon-s-grid' },
    children: [
      {
        path: '',
        name: 'Table',
        component: () => import('@/views/table'),
        meta: { title: 'Simple Table', icon: 'el-icon-tickets' }
      },
      {
        path: 'pagination',
        name: 'PaginationTable',
        component: () => import('@/views/table/pagination-table'),
        meta: { title: 'Pagination Table', icon: 'el-icon-film' }
      }
    ]
  },

  {
    path: '/pagination',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Pagination',
        component: () => import('@/views/pagination'),
        meta: { title: 'Pagination', icon: 'el-icon-eleme' }
      }
    ]
  },

  {
    path: '/pagination/selection',
    component: Layout,
    meta: { title: 'Pagination Selection', icon: 'el-icon-s-operation' },
    redirect: '/pagination/selection/radio',
    children: [
      {
        path: 'radio',
        name: 'PaginationSelectionRadio',
        component: () => import('@/views/pagination-selection/radio'),
        meta: { title: 'Radio', icon: 'el-icon-s-help' }
      },
      {
        path: 'multi',
        name: 'PaginationSelectionMulti',
        component: () => import('@/views/pagination-selection/multi'),
        meta: { title: 'Multi', icon: 'el-icon-document-checked' }
      }
    ]
  },

  {
    path: '/pagination/selector',
    component: Layout,
    meta: { title: 'Pagination Selector', icon: 'el-icon-finished' },
    redirect: '/pagination/selector/radio',
    children: [
      {
        path: 'radio',
        name: 'PaginationSelectorRadio',
        component: () => import('@/views/pagination-selector/radio'),
        meta: { title: 'Radio', icon: 'el-icon-s-help' }
      },
      {
        path: 'multi',
        name: 'PaginationSelectorMulti',
        component: () => import('@/views/pagination-selector/multi'),
        meta: { title: 'Multi', icon: 'el-icon-document-checked' }
      }
    ]
  },

  {
    path: '/tree/cascader',
    component: Layout,
    meta: { title: 'Tree Cascader', icon: 'el-icon-grape' },
    children: [
      {
        path: '',
        name: 'TreeCascader',
        component: () => import('@/views/tree-cascader'),
        meta: { title: 'Tree Cascader', icon: 'el-icon-s-help' }
      }
    ]
  },

  {
    path: '/tree/cascader/panel',
    component: Layout,
    meta: { title: 'Tree Cascader Panel', icon: 'el-icon-grape' },
    children: [
      {
        path: '',
        name: 'TreeCascaderPanel',
        component: () => import('@/views/tree-cascader-panel'),
        meta: { title: 'Index', icon: 'el-icon-s-help' }
      },
      {
        path: 'radio',
        name: 'TreeCascaderPanelRadio',
        component: () => import('@/views/tree-cascader-panel/radio'),
        meta: { title: 'Radio', icon: 'el-icon-s-help' }
      }
    ]
  },
  
  {
    path: '/tree/selection',
    component: Layout,
    meta: { title: 'Tree Selection', icon: 'el-icon-grape' },
    redirect: '/tree/selection/radio',
    children: [
      {
        path: 'radio',
        name: 'TreeSelectionRadio',
        component: () => import('@/views/tree-selection/radio'),
        meta: { title: 'Radio', icon: 'el-icon-s-help' }
      },
      {
        path: 'multi',
        name: 'TreeSelectionMulti',
        component: () => import('@/views/tree-selection/multi'),
        meta: { title: 'Multi', icon: 'el-icon-document-checked' }
      }
    ]
  },

  {
    path: '/tree/selector',
    component: Layout,
    meta: { title: 'Tree Selector', icon: 'el-icon-grape' },
    redirect: '/tree/selector/radio',
    children: [
      {
        path: 'index',
        component: () => import('@/views/tree-selector'),
        meta: { title: 'Tree Selector', icon: 'el-icon-grape' }
      },
      {
        path: 'radio',
        name: 'TreeSelectorRadio',
        component: () => import('@/views/tree-selector/radio'),
        meta: { title: 'Radio', icon: 'el-icon-s-help' }
      },
      {
        path: 'multi',
        name: 'TreeSelectorMulti',
        component: () => import('@/views/tree-selector/multi'),
        meta: { title: 'Multi', icon: 'el-icon-document-checked' }
      }
    ]
  },

  {
    path: '/input/carrier',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/input-carrier'),
        meta: { title: 'Input Carrier', icon: 'el-icon-chat-dot-square' }
      }
    ]
  },

  {
    path: '/other',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/other'),
        meta: { title: 'Other', icon: 'el-icon-question' }
      }
    ]
  },

  { path: '*', redirect: '/', hidden: true }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

export default router
