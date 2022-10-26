import Vue from 'vue'
import VueSkeletonLoader from 'skeleton-loader-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles.scss'

Vue.config.productionTip = false

Vue.component('v-skeleton', VueSkeletonLoader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
