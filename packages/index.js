import CardBox from './card-box'
import DialogBox from './dialog-box'
import ListSelector from './list-selector'
import Pagination from './pagination'
import PaginationSelection from './pagination-selection'
import PaginationTable from './pagination-table'
import Table from './table'
import TreeSelector from './tree-selector'

// v1.0
/* ListSelector.install = function(Vue) {
  Vue.component(ListSelector.name, ListSelector)
}

TreeSelector.install = function(Vue) {
  Vue.component(TreeSelector.name, TreeSelector)
}

const install = function(Vue) {
  ListSelector.install(Vue)
  TreeSelector.install(Vue)
} */

// v2.0
/* const installComponent = (Vue, c) => Vue.component(c.name, c)

DialogBox.install = Vue => installComponent(Vue, DialogBox)
ListSelector.install = Vue => installComponent(Vue, ListSelector)
TreeSelector.install = Vue => installComponent(Vue, TreeSelector)

const install = function(Vue) {
  DialogBox.install(Vue)
  ListSelector.install(Vue)
  TreeSelector.install(Vue)
} */

// v3.0
const components = [
  CardBox,
  DialogBox,
  ListSelector,
  Pagination,
  PaginationSelection,
  PaginationTable,
  Table,
  TreeSelector
]

// const install = Vue =>  components.forEach(c => Vue.component(c.name, c))

components.forEach(c => c.install = v => v.component(c.name, c))
const install = (v, o) => {
  console.log(o)
  v.myGlobalProp = 'myGlobalProp'
  v.myGlobalMethod = function () {
    console.log('myGlobalMethod')
  }

  v.prototype.$myInstanceProp = 'myInstanceProp'
  v.prototype.$myInstanceMethod = function () {
    console.log('myInstanceMethod')
  }

  // v.mixin({
  //   created() {
  //     console.log('Global mixin created', this.name)
  //   }
  // })
  
  components.forEach(c => c.install(v))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  CardBox,
  DialogBox,
  ListSelector,
  Pagination,
  PaginationSelection,
  PaginationTable,
  Table,
  TreeSelector
}

export default { install }
