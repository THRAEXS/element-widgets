import ThxWidget from './src/main'

ThxWidget.install = function(Vue) {
  Vue.component(this.name, this)
}

export default ThxWidget
