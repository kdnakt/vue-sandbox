const state = {
  apikey: ''
}

const getters = {}

const actions = {}

const mutations = {
  setApiKey(state, key) {
    state.apikey = key
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
