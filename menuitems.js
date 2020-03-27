import axios from 'axios'

export const menuitems = {
  state: {
    companyItems: [],
    vesselTypeItems: [],
    sisterVesselItems: [],
    childVesselItems: [],
    fleetItems: [],
    networkItems: [],
    piItems: [],
    qiItems: [],
    societyItems: [],
    pocItems: [],
    roleItems: [],
    zoneItems: [],
    providerItems: [],
    insurerItems: [],
    statusItems: [
      { text: 'All', value: -1 },
      { text: 'Active', value: 1 },
      { text: 'Inactive', value: 0 },
    ],
    resourceProviderItems: [
      { text: 'All', value: -1 },
      { text: 'Provider', value: 1 },
      { text: 'Non-provider', value: 0 },
    ],
    vrpItems: [
      { text: 'All', value: -1 },
      { text: 'Authorized', value: 1 },
      { text: 'Not Authorized', value: 0 },
    ],
    countryItems: [],
  },
  mutations: {
    INIT_MENU_ITEMS (state) {
      axios.get('companies/short')
        .then(res => {
          state.companyItems = res.data.data
        })
      axios.get('vessels/types')
        .then(res => {
          state.vesselTypeItems = res.data.data
        })
      axios.get('vessels/sister/list')
        .then(res => {
          state.sisterVesselItems = res.data.data
        })
      axios.get('vessels/child/list')
        .then(res => {
          state.childVesselItems = res.data.data
        })
      axios.get('fleets')
        .then(res => {
          state.fleetItems = res.data.data
        })
      axios.get('networks/short')
        .then(res => {
          state.networkItems = res.data.data
        })
      axios.get('vendors/pi')
        .then(res => {
          state.piItems = res.data.data
        })
      axios.get('vendors/qi')
        .then(res => {
          state.qiItems = res.data.data
        })
      axios.get('vendors/societies')
        .then(res => {
          state.societyItems = res.data.data
        })
      axios.get('companies/user/poc')
        .then(res => {
          state.pocItems = res.data.data
        })
      axios.get('roles')
        .then(res => {
          state.roleItems = res.data.data
        })
      axios.get('zones/short')
        .then(res => {
          state.zoneItems = res.data.data
        })
      axios.get('vendors/providers')
        .then(res => {
          state.providerItems = res.data.data
        })
      axios.get('vendors/insurers')
        .then(res => {
          state.insurerItems = res.data.data
        })
      axios.get('address/countries')
        .then(res => {
          state.countryItems = res.data.data
        })
    },
  },
  actions: {
    initMenuItems ({ commit }) {
      commit('INIT_MENU_ITEMS')
    },
  },
}
