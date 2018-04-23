import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    products: [],
  },
  getters: { //compued properties
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 0)
    },
    productIsInStock () {

      return (product) => {
        return product.inventory > 0
      }
    }
  },
  actions: {
    // like methods
    fetchProducts({ commit }) {
      return new Promise ((resolve, reject) => {
          shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    },
    addToCart(context, product) {
      if(product.inventory > 0) {
        const cartItem = context.state.cart.find(item => item.id === product.id)
        if(!cartItem){
          context.commit('pushProductToCart', product.id)
        }else {
          context.commit('incerementCartQuantity', cartItem)
        }
        context.commit('decrementProductInventory', product)
      }
    },
    removeFromCart( context, product) {
      const cartItem = context.state.cart.find(item => item.id === product.id)
      const item = context.state.products.find(item => item.id === product.id)
      if(cartItem){
        let payload = {
          item,
          count: cartItem.quantity
        }
        context.commit('removeFromCart', cartItem)
        context.commit('incrementProductInventory', payload)
      }
    },
    decrementCartQuantity( context, product) {
      const cartItem = context.state.cart.find(item => item.id === product.id)
      const item = context.state.products.find(item => item.id === product.id)
      if(cartItem){
        let payload = {
          item,
          count: 1
        }
        context.commit('decrementCartQuantity', cartItem)
        context.commit('incrementProductInventory', payload)
      }
    },
    incrementCartQuantity( context, product) {
      const cartItem = context.state.cart.find(item => item.id === product.id)
      const item = context.state.products.find(item => item.id === product.id)
      if(cartItem && item.inventory > 0){
        let payload = {
          item,
          count: 1
        }
        context.commit('incerementCartQuantity', cartItem)
        context.commit('decrementProductInventory', item)
      }
    }
  },
  mutations: {
    setProducts (state, products){
      // update products
      state.products = products
    },
    pushProductToCart(state, id) {
      state.cart.push({
        id,
        quantity: 1
      })
    },
    decrementProductInventory (state, product) {
      product.inventory--
    },
    incrementProductInventory (state, payload) {
      payload.item.inventory += payload.count
    },

  }
})
