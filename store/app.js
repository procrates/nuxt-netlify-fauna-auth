export const state = () => ({
  isDevEnvironment: false,
  siteURL: null,
})
export const getters = {
  isDevEnvironment: (state) => state.isDevEnvironment,
  siteURL: (state) => state.siteURL,
}
export const mutations = {
  SET_DEV_ENV(state, value) {
    state.isDevEnvironment = value
  },
  SET_SITE_URL(state, value) {
    state.siteURL = value
  },
}
