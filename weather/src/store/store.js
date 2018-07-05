import Vue from 'vue'
import Vuex from 'vuex'
import apikey from './modules/apikey'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    apikey
  }
})
