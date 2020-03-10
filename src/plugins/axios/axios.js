import Vue from 'vue';
import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config()

const config = {
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 120000,
  headers: {
    Accept: 'application/json',
  },
};

// /* eslint-disable */
console.log(config)
const _axios = axios.create(config);

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};

/* eslint-enable */
Vue.use(Plugin);
export default Plugin;
