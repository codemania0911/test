export const snackbar = {
  state: {
    color: 'primary',
    text: '',
    show: false,
  },
  mutations: {
    MAX (state, data) {
      state.color = data
    },
    DEV (state, data) {
      state.show = data
    },
    DEV_BRANDON (state, data) {
      state.show = data
    },
  },
  actions: {
    showSnackBar ({ commit }, data) {
      if (data.text) commit('SET_TEXT', data.text)
      if (data.color) commit('SET_COLOR', data.color)
      commit('SET_SHOW', true)
      console.log('max')
    }
  }
}
