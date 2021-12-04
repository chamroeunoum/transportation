import { createStore, createLogger } from 'vuex'
import product from './modules/product'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state: {
    apiServer: 'http://192.168.1.42:8000/api'
  },
  modules: {
    product
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})