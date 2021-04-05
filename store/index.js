import VuexPersist from 'vuex-persist'
import Vuex from 'vuex'
import authModule from './modules/auth'
import appModule from './modules/app'

const vuexLocalStorage = new VuexPersist({
  key: 'store', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  module: ['auth', 'app'],
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => ({}),
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      auth: authModule,
      app: appModule,
    },
    plugins: [vuexLocalStorage.plugin],
  })
}

export default createStore
