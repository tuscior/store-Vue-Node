<template>
  <div id="app">
    <ProductList />
    <Cart />
  </div>
</template>

<script>
import ProductList from './components/ProductList'
import Cart from './components/Cart'

export default {
  name: 'App',
  components: {
    ProductList,
    Cart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
