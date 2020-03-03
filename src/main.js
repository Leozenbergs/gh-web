import Vue from 'vue'
import Application from '@/components/layouts/Application'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import routes from '@/routes/router.js'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  vuetify,
  router,
  render: h => h(Application)
}).$mount('#app')
