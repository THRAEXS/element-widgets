import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElementSelector from '~'

import './mock'

Vue.use(ElementUI)
Vue.use(ElementSelector)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
