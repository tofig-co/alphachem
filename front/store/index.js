export const state = () => ({
  token: null,
})

export const mutations = {
  setToken(state, token) {
    state.token = token
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
}
