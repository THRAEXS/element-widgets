import ListSelector from '../packages/list'
import TreeSelector from '../packages/tree'

const components = [ ListSelector, TreeSelector ]

// ListSelector.install = function(Vue) {
//   Vue.component(ListSelector.name, ListSelector)
// }

// TreeSelector.install = function(Vue) {
//   Vue.component(TreeSelector.name, TreeSelector)
// }

const install = function(Vue) {
  // ListSelector.install(Vue)
  // TreeSelector.install(Vue)
  components.forEach(c => Vue.component(c.name, c))
}

export { install, ListSelector, TreeSelector }
export default { install }
