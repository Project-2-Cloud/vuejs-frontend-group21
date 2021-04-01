import { createStore } from 'vuex'
import axios from 'axios'

//const url = 'http://localhost:8000/products'
const url = 'http://subscriptionservice-ucllteam21.ocp-ucll-40cb0df2b03969eabb3fac6e80373775-0000.eu-de.containers.appdomain.cloud/subscriptions'
//const url = 'http://subscriptions-springboot-backend-ucllteam21.ocp-ucll-40cb0df2b03969eabb3fac6e80373775-0000.eu-de.containers.appdomain.cloud/products'
const headers = { Accept: 'application/json' }

export default createStore({
  state: {

    user: {
      isAuthenticated: false,
      name: "",
      email: "",
      idToken: "",
      accessToken: "",
    },
    endpoints: {
      login: "http://authenticationservice-ucllteam21.ocp-ucll-40cb0df2b03969eabb3fac6e80373775-0000.eu-de.containers.appdomain.cloud/login",
      products: url,
      partnercheck: "http://subscriptionservice-ucllteam21.ocp-ucll-40cb0df2b03969eabb3fac6e80373775-0000.eu-de.containers.appdomain.cloud/check",
    },
    products: [],
    inCart: []
  },
  getters: {
    products: state => state.products,
    inCart: state => state.inCart,
  },
  mutations: {
    logout(state) {
      state.user.isAuthenticated = false;
      state.user.name = "";
      state.user.email = "";
      state.user.idToken = "";
      state.user.accessToken = "";
      state.user.partner = "";
    },
    login(state, payload) {
      state.user.isAuthenticated = true;
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.user.idToken = payload.idToken;
      state.user.accessToken = payload.accessToken;
    },
    SET_PARTNER(state, partner) {
      state.user.partner = partner;
    },
    setProducts(state, payload) {
      state.products = payload;
    },
    addToCart(state, payload) {
      console.log(payload);
      state.inCart.push(payload);
    },
    removeFromCart(state, item) {
      state.inCart.splice(item, 1);
    },
  },
  actions: {
    async getProducts(state) {
      const products = await fetch(url, { headers })
      const prods = await products.json()
      state.commit('setProducts', prods)
      console.log(prods)
    },
    async checkPartner({ state, commit }) {
      let accessToken = state.user.accessToken;
      console.log("checking partner access", state.endpoints.partnercheck);
      const AuthStr = 'Bearer '.concat(accessToken);
      const AuthHeader = { 'Authorization': AuthStr};
      console.log("AuthToken=",AuthHeader);
      let response = await fetch(state.endpoints.partnercheck, { 
        method: 'GET',
        headers: {
          'Authorization': AuthStr }
        });
      console.log("partneraccess",response);
      if (response.ok) {
        commit('SET_PARTNER', true);
        console.log("TRUE");
      } else {
        commit('SET_PARTNER', false);
        console.log("FALSE");
      }
    },
    registerProduct({ state }, obj) {
      let productsurl = state.endpoints.products;
      console.log(productsurl);
      let accessToken = state.user.accessToken;
      const AuthStr = 'Bearer '.concat(accessToken);
      console.log(AuthStr);
      console.log(obj);
      axios(productsurl, { 
          method: 'POST',
          headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': AuthStr
          },
          credentials: 'include',
          data: obj
      })
      .then(response => {
        console.log('Response:', response);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    },
  },
  modules: {
  }
})

