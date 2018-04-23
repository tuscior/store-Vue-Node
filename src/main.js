// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index'
Vue.config.productionTip = false
import Product from './components/Product'
/* eslint-disable no-new */
const routes = [
  {path: '/products', component: Product}
]
// const router = new VueRouter({
//    routes
// })
new Vue({
  el: '#app',
  store,
  // router,
  components: { App },
  template: '<App/>'
})
