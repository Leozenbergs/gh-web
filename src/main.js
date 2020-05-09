import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router.js'
import store from './router'
import Vuex from 'vuex';

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  Vuex,
  render: h => h(App)
}).$mount('#app')
