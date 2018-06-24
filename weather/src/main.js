import Vue from 'vue'
import VueRouter from 'vue-router'
import CityList from './components/CityList.vue'
import Weather from './components/Weather.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/weather/:name', component: Weather, props: true }
  ]
})

new Vue({
  router,
  render: h => h(CityList)
}).$mount('#app')
