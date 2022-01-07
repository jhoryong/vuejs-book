import Vue from 'vue'
import App from './App.vue'
// import App from './AppAxiosText.vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
