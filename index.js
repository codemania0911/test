import Vue from 'vue'
import Vuex from 'vuex'

import { sidebar } from './sidebar'
import { authentication } from './authentication'
import { menuitems } from './menuitems'
import { snackbar } from './snackbar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sidebar,
    authentication,
    menuitems,
    snackbar,
  },
})
