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
        component: () => import('@/views/case-table'),
        meta: { title: 'Simple Table', icon: 'el-icon-tickets' }
      },
      {
        path: 'pagination',
        component: () => import('@/views/case-pagination-table'),
        meta: { title: 'Pagination Table', icon: 'el-icon-film' }
      },
      {
        path: 'pagination/selection',
        component: () => import('@/views/case-table-selection'),
        meta: { title: 'Pagination Table Selection', icon: 'el-icon-document-checked' }
      }
    ]
  },

  {
    path: '/pagination',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/case-pagination'),
        meta: { title: 'Pagination', icon: 'el-icon-eleme' }
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
        component: () => import('@/views/case-list-selector-radio'),
        meta: { title: 'Radio', icon: 'el-icon-s-help' }
      },
      {
        path: 'multi',
        name: 'ListSelectorMulti',
        component: () => import('@/views/case-list-selector-multi'),
        meta: { title: 'Multi', icon: 'el-icon-document-checked' }
      },
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
