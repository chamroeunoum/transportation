import product from '../../api/crud'

// initial state
const state = () => ({
  records: [] ,
  record: null ,

})

// getters
const getters = {
  getRecords (state, getters, rootState) {
    return state.records
  },
  getRecord (state, getters, rootState) {
    return state.record
  }
}

// actions
const actions = {
  async list ({ state, commit, rootState }) {
    return await product.list(rootState.apiServer+"/package")
  },
  async read ({ state, commit, rootState },params) {
    return await product.read(rootState.apiServer+"/package/"+params.id)
  },
  async create ({ state, commit, rootState },params) {
    return await product.create(rootState.apiServer+"/package/create",params)
  },
  async update ({ state, commit, rootState },params) {
    return await product.update(rootState.apiServer+"/package/update",params)
  },
  async delete ({ state, commit, rootState },params) {
    return await product.delete(rootState.apiServer+"/package/"+params.id)
  }
}

// mutations
const mutations = {
  // increment (state) {
  //   // `state` is the local module state
  //   state.count++
  // }
  setRecords (state, records) {
    state.records = records
  },
  setRecord (state, record) {
    state.record = record
  },

  // decrementProductInventory (state, { id }) {
  //   const product = state.all.find(product => product.id === id)
  //   product.inventory--
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}