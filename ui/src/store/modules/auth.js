import auth from '../../api/auth'
import { Notify } from 'vant'

// initial state
const state = () => ({
  user: null ,
  token: {
    access_token: "" ,
    expires_at: "" ,
    token_type: ""
  }
})

// getters
const getters = {
  getAuthorization( state , getters, rootState ){
    return state.token.token_type + " " + state.token.access_token 
  },
  checkAuth(state, getters, rootState ){
    let now = new Date()
    return state.token.access_token !== "" && ( state.token.expires_at < now )
  }
}

// actions
const actions = {
  /**
   * Login
   */
   async login({state, commit, rootState }, params ){
    return await auth.login(rootState.apiServer+"/login", params) 
   },
  
  /**
   * Logout
   */
  async logout({state , commit, rootState},params){
    /**
     * Logout user
     */
    return await auth.logout(rootState.apiServer+"/logout",params)
  },
  /**
   * Get profile
   */
  /**
   * Update profile
   */
  /**
   * Update profile picture
   */
  
}

// mutations
const mutations = {
  // increment (state) {
  //   // `state` is the local module state
  //   state.count++
  // }
  COMMIT_USER_TOKEN (state, { user, token }) {
    state.user = user 
    state.token.access_token = token.access_token
    state.token.expires_at = token.expires_at
    state.token.token_type = token.token_type
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}