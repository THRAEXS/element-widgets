/**
 * Uncaught Error: Cannot find module 'core-js/library/fn/object/assign'
 * https://github.com/vuejs/vuepress/issues/2275
 * yarn add async-validator@1.11.5
 */
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Widgets from '../../src'

export default ({ Vue }) => {
  Vue.use(Element)
  Vue.use(Widgets)
}
