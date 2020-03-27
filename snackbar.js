export const snackbar = {
  state: {
    color: 'primary',
    text: '',
    show: false,
  },
  mutations: {
    DEV (state, data) {
      state.show = data
    },
    
  }
}
