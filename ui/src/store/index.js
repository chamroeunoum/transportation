import { createStore, createLogger } from 'vuex'
import product from './modules/product'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state: {
    apiServer: 'http://sctservice.kabit.asia/api'
  },
  modules: {
    product
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})