export const state = () => ({
  token: null,
  slider: [],
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },

  clearToken(state) {
    state.token = null
  },
  setSlider(state, slider) {
    state.slider = slider
  },
}
export const actions = {
  authenticateUser(vuexContext, authData) {
    return this.$axios
      .$post('/api/auth/signin', {
        username: authData.username,
        password: authData.password,
      })
      .then((res) => {
        vuexContext.commit('setToken', res.accessToken)
        localStorage.setItem('token', res.accessToken)
        return res
      })
      .catch((e) => console.log(e))
  },
  getSlider(vuexContext) {
    return this.$axios
      .$get('/api/slider')
      .then((res) => {
        vuexContext.commit('setSlider', res)
      })
      .catch((e) => console.log(e))
  },
  initAuth(vuexContext) {
    let token = localStorage.getItem('token')
    if (!token) {
      vuexContext.dispatch('logout')
      vuexContext.commit('clearToken')
      return
    }
    vuexContext.commit('setToken', token)
  },
  logout(vuexContext) {
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExpiration')
    vuexContext.commit('clearToken')
  },
}
