export default {
  state: {
    cart: [],
  },
  getters: {
    cartProducts (state) {
      return state.cart.map(item => {
        const product = state.products.find(product => product.id === item.id)
        return {
          title: product.title,
          price: product.price,
          quantity: item.quantity,
          id: product.id,
          inventory: product.inventory
        }
      })
    },
    totalPriceInCart (state, getters) {
      let total = 0
      getters.cartProducts.forEach(product => {
        total += product.price * product.quantity
      })
      return total
    }
  },
  mutations: {
    decrementCartQuantity (state, product){
      product.quantity--
    },
    removeFromCart (state, product) {
      product.quantity = 0
    },
    incerementCartQuantity (state, product) {
      product.quantity++
    },
  }
}
