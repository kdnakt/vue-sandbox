const state = {
  current: '',
  forecasts: []
}

const getters = {}

const actions = {}

const mutations = {
  setCurrent(state, current) {
    state.current = current
  },
  setForecasts(state, forecasts) {
    state.forecasts = forecasts
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
