export const state = () => ({
  token: null,
  slider: [],
  products: [],
  about: [],
  contacts: null,
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },

  clearToken(state) {
    state.token = null;
  },
  setSlider(state, slider) {
    state.slider = slider;
  },
  setProducts(state, products) {
    state.products = products;
  },
  setAbout(state, about) {
    state.about = about;
  },
  setContacts(state, contacts) {
    state.contacts = contacts;
  },
};
export const actions = {
  authenticateUser(vuexContext, authData) {
    return this.$axios
      .$post(
        '/api/auth/signin',
        {
          username: authData.username,
          password: authData.password,
        },
        {
          header: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        vuexContext.commit('setToken', res.accessToken);
        localStorage.setItem('token', res.accessToken);
        return res;
      })
      .catch((e) => console.log(e));
  },
  getSlider(vuexContext) {
    return this.$axios
      .$get('/api/slider')
      .then((res) => {
        vuexContext.commit('setSlider', res);
      })
      .catch((e) => console.log(e));
  },
  addSlide(vuexContext, { slide }) {
    return this.$axios
      .$post('/api/slider', slide, {
        header: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        vuexContext.dispatch('getSlider');
        return res;
      })
      .catch((e) => e);
  },

  editSlide(vuexContext, { slide, id }) {
    return this.$axios
      .$patch('/api/slider/' + id, slide, {
        header: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        vuexContext.dispatch('getSlider');
        return res;
      })
      .catch((e) => e);
  },

  deleteSlide(vuexContext, id) {
    return this.$axios
      .$delete('/api/slider/' + id)
      .then((res) => {
        vuexContext.dispatch('getSlider');
        return res;
      })
      .catch((e) => e);
  },
  getProducts(vuexContext) {
    return this.$axios
      .$get('/api/products')
      .then((res) => {
        vuexContext.commit('setProducts', res);
      })
      .catch((e) => console.log(e));
  },
  addProduct(vuexContext, { product }) {
    return this.$axios
      .$post('/api/products', product, {
        header: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        vuexContext.dispatch('getProducts');
        return res;
      })
      .catch((e) => e);
  },

  editProduct(vuexContext, { product, id }) {
    return this.$axios
      .$patch('/api/products/' + id, product, {
        header: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        vuexContext.dispatch('getProducts');
        return res;
      })
      .catch((e) => e);
  },

  deleteProduct(vuexContext, id) {
    return this.$axios
      .$delete('/api/products/' + id)
      .then((res) => {
        vuexContext.dispatch('getProducts');
        return res;
      })
      .catch((e) => e);
  },
  getAbout(vuexContext) {
    return this.$axios
      .$get('/api/about')
      .then((res) => {
        vuexContext.commit('setAbout', res);
      })
      .catch((e) => console.log(e));
  },
  editAbout(vuexContext, { about, id }) {
    return this.$axios
      .$patch('/api/about/' + id, about)
      .then((res) => {
        vuexContext.dispatch('getAbout');
        return res;
      })
      .catch((e) => e);
  },
  getContacts(vuexContext) {
    return this.$axios
      .$get('/api/contacts')
      .then((res) => {
        vuexContext.commit('setContacts', res);
      })
      .catch((e) => console.log(e));
  },
  editContacts(vuexContext, contacts) {
    return this.$axios
      .$patch('/api/contacts', contacts)
      .then((res) => {
        vuexContext.dispatch('getContacts');
        return res;
      })
      .catch((e) => e);
  },
  initAuth(vuexContext) {
    let token = localStorage.getItem('token');
    if (!token) {
      vuexContext.dispatch('logout');
      vuexContext.commit('clearToken');
      return;
    }
    vuexContext.commit('setToken', token);
  },
  logout(vuexContext) {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
    vuexContext.commit('clearToken');
  },
};
