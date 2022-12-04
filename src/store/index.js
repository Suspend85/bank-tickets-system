import { createStore, createLogger } from 'vuex'
import auth from './modules/auth.module';

const plugins = []
// if (process.env.NODE_ENV === 'development') {
//   plugins.push(createLogger())
// }

export default createStore({
  plugins,
  state() {
    return {
      message: null,
      sidebar: false
    }
  },
  mutations: {
    openSidebar(state) {
      state.sidebar = true
    },
    closeSidebar(state) {
      state.sidebar = false
    }
  },
  actions: {
  },
  modules: {
    auth
  }
})
