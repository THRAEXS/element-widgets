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
    path: '/list/selector',
    component: Layout,
    meta: { title: 'List Selector', icon: 'el-icon-finished' },
    redirect: '/list/selector/radio',
    children: [
      {
        path: 'radio',
        name: 'ListSelectorRadio',
        component: () => import('@/views/list-selector/radio'),
        meta: { title: 'Radio', icon: 'el-icon-s-help' }
      },
      {
        path: 'multi',
        name: 'ListSelectorMulti',
        component: () => import('@/views/list-selector/multi'),
        meta: { title: 'Multi', icon: 'el-icon-document-checked' }
      },
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
