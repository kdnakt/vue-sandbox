import Vue from 'vue'
import VueRouter from 'vue-router'
import CityList from './components/CityList.vue'
import Weather from './components/Weather.vue'
import Main from './components/Main.vue'
import Login from './components/Login.vue'
import store from './store/store.js'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Login, props: false },
    { path: '/weather/:name', component: Weather, props: true },
    { path: '/city', component: CityList, props: false },
  ]
})

new Vue({
  router,
  store,
  render: h => h(Main)
}).$mount('#app')
