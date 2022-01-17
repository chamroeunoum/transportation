import { createStore, createLogger } from 'vuex'
import product from './modules/product'
import auth from './modules/authentication'
import user from './modules/user'
import client from './modules/client'
import staff from './modules/staff'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state: {
    // apiServer: 'http://sctservice.kabit.asia/api'
    // apiServer: 'http://127.0.0.1:8000/api'
    apiServer: 'http://192.168.1.40:8000/api' ,
    branch: ''
  },
  modules: {
    product ,
    auth,
    user,
    client,
    staff
  },
  strict: debug,
  plugins: debug ? 
    [
      createLogger()
    ] : 
    [
      
    ]
})