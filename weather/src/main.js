import Vue from 'vue'
import VueRouter from 'vue-router'

import CityList from './components/CityList.vue'
import Weather from './components/Weather.vue'
import Main from './components/Main.vue'
import Login from './components/Login.vue'
import store from './store/store.js'

Vue.config.productionTip = false
Vue.use(VueRouter)

const API_URL = "https://api.openweathermap.org/data/2.5/";
async function getCurrentWeather(apikey, name) {
  const endpoint = `${API_URL}weather?q=${name}&appid=${apikey}&lang=ja`
  console.log(endpoint)
  const res = await fetch(endpoint)
  const json = await res.json()
  console.log(json)
  return json
}

const router = new VueRouter({
  routes: [
    { path: '/', component: Login, props: false },
    { path: '/weather/:name',
      component: Weather,
      props: true,
      beforeEnter: (to, from, next) => {
        const apikey = store.state.apikey.apikey
        if (!apikey) {
          alert("No API key found")
          next("/")
          return
        }
        getCurrentWeather(apikey, to.params.name).then(data => {
          if (data.cod === 200) {
            store.commit('weather/setCurrent', data)
            next()
          } else {
            alert("Something went wrong! " + data.message)
            next("/")
          }
        })
      }
    },
    { path: '/city', component: CityList, props: false },
  ]
})

new Vue({
  router,
  store,
  render: h => h(Main)
}).$mount('#app')
