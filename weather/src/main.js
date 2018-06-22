import Vue from 'vue'
import CityList from './components/CityList.vue'

Vue.config.productionTip = false

new Vue({
  data: function() {return {
    cities: [{
      id: 1,
      name: "Tokyo"
    }, {
      id: 2,
      name: "London"
    }]
  }},
  render: h => h(CityList)
}).$mount('#app')
