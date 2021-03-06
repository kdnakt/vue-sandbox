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
  try {
    const res = await fetch(endpoint)
    const json = await res.json()
    return json
  } catch(e) {
    return e
  }
}

async function getWeatherForecast(apikey, name) {
  const endpoint = `${API_URL}forecast?q=${name}&appid=${apikey}&lang=ja`
  try {
    const res = await fetch(endpoint)
    const json = await res.json()
    const forecasts = []
    json.list.forEach(fc => {
      forecasts.push(fc)
    })
    return { cod: json.cod, forecasts: forecasts }
  } catch (e) {
    return e
  }
}

async function getWeather(apikey, name) {
  const current = await getCurrentWeather(apikey, name)
  if (current.cod == 200) {
    store.commit('weather/setCurrent', current)
  } else {
    return current
  }
  const forecasts = await getWeatherForecast(apikey, name)
  if (forecasts.cod == 200) {
    store.commit('weather/setForecasts', forecasts.forecasts)
  } else {
    return forecasts
  }
  return { cod: 200 }
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
        getWeather(apikey, to.params.name).then(data => {
          if (data.cod === 200) {
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
