import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import ElementWidgets from '../src'

import './mock'

Vue.use(ElementUI, { locale })
Vue.use(ElementWidgets)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
