<template>

  <div>
  <h1>Product list</h1>
    <p v-if="loading">loading...</p>
    <ul>
      <li v-for="product in products">{{ product.title }} - {{ product.price }} - {{ product.inventory }}$
<button :disabled="!productIsInStock(product) > 0" @click="addToCart(product)">Add to cart</button>
      </li>

    </ul>
  </div>

  </template>
  <script>
  // ADD FILTER AND READ BAOUT FILTERS
  // ROUTER
  import { mapState, mapGetters } from 'vuex'
  // import store from '@/store/index'
  export default {
    data (){
      return {
        loading: false
      }
    },
    computed: {
      ...mapState({
        products: state => state.products,
      }),
      ...mapGetters({
        productIsInStock: "productIsInStock"
      })
    },
    methods: {
      addToCart (product) {
        this.$store.dispatch('addToCart', product)
      }
    },
    created (){
      this.loading = true
      this.$store.dispatch('fetchProducts')
        .then( () => this.loading = false)
    }
  }
  </script>
