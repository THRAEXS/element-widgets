import CardBox from '~/card-box'
import DialogBox from '~/dialog-box'
import ListSelector from '~/list-selector'
import Pagination from '~/pagination'
import PaginationSelection from '~/pagination-selection'
import PaginationTable from '~/pagination-table'
import Table from '~/table'
import TreeSelector from '~/tree-selector'

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

// components.forEach(c => {
//   // console.debug(c.install)
//   // !c.install && (c.install = v => v.component(c.name, c))
//   // c.install = v => i(v, c)
// })
const install = v => components.forEach(c => c.install(v))

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
