import { createStore, createLogger } from 'vuex'
import product from './modules/product'
import auth from './modules/auth'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state: {
    apiServer: 'http://sctservice.kabit.asia/api'
    // apiServer: 'http://127.0.0.1:8000/api'
  },
  modules: {
    product ,
    auth
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})