<template>

  <div>
  <h1>Shoping cart</h1>
    <ul>
      <li v-for="product in cart" v-if="product.quantity > 0">{{ product.title }} - {{ product.price }} - {{ product.quantity }}$
        <button @click="addToCart(product)">Increase quantity</button>
        <button @click="descreseQuantity(product)">Descrese quantitiy</button>
        <button @click="removeFromCart(product)">Remove from cart</button>
      </li>

    </ul>
    <h2 v-if="total != 0">Sum: {{ total }}$</h2>
  </div>

  </template>
  <script>
  import { mapState, mapGetters } from 'vuex';
  export default {
    computed: {
      // cart () {
      //   return this.$store.getters.cartProducts
      // },
      // total () {
      //   return Math.round(this.$store.getters.totalPriceInCart)
      // }
      ...mapGetters({
        cart: 'cartProducts',
        total: 'totalPriceInCart'
      })
    },
    methods: {
      addToCart (product) {
        this.$store.dispatch('incrementCartQuantity', product)
      },
      descreseQuantity (product) {
        this.$store.dispatch('decrementCartQuantity', product)
      },
      removeFromCart (product) {
        this.$store.dispatch('removeFromCart', product)
      }
    }
  }

  </script>


// Vue filters -- currency
