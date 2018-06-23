import Vue from 'vue'
import CityList from './components/CityList.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(CityList)
}).$mount('#app')
