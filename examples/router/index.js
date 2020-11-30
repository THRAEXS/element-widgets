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
        meta: { title: 'Dashboard', icon: 'el-icon-edit' }
      }
    ]
  },

  {
    path: '/card/box',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/other'),
        meta: { title: 'Card Box', icon: 'el-icon-s-help' }
      }
    ]
  },

  {
    path: '/dialog/box',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/other'),
        meta: { title: 'Dialog Box', icon: 'el-icon-s-help' }
      }
    ]
  },

  {
    path: '/paging/table',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/case-paging-table'),
        meta: { title: 'Paging Table', icon: 'el-icon-s-help' }
      }
    ]
  },

  {
    path: '/list/selector',
    component: Layout,
    meta: { title: 'List Selector', icon: 'el-icon-s-help' },
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
        meta: { title: 'Multi', icon: 'el-icon-s-help' }
      },
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
