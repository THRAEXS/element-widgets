import ListSelector from './list'
import TreeSelector from './tree'

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
const installComponent = (Vue, c) => Vue.component(c.name, c)

ListSelector.install = Vue => installComponent(Vue, ListSelector)
TreeSelector.install = Vue => installComponent(Vue, TreeSelector)

const install = function(Vue) {
  ListSelector.install(Vue)
  TreeSelector.install(Vue)
}

// v3.0
/* const components = [ ListSelector, TreeSelector ]

const install = Vue =>  components.forEach(c => Vue.component(c.name, c)) */

export { install, ListSelector, TreeSelector }
export default { install }
