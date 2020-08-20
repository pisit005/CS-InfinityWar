import Vue from 'vue'
//import App from './App.vue'
import thanos from './components/thanos.vue'

Vue.config.productionTip = false

//new Vue({
//  render: h => h(App),
//}).$mount('#app')

new Vue()({
  render: h => h(thanos),
}).$mount('#Thanos')