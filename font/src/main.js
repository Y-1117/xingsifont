import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import '@/assets/css/global.css'
import '@/assets/css/reset.css'
import '@/assets/font-awesome-4.7.0/css/font-awesome.min.css'

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import axios from 'axios'
import NProgress from 'nprogress'

import '@/assets/css/global.css'
import 'nprogress/nprogress.css'
import '@/assets/css/reset.css'

axios.defaults.baseURL = 'http://101.201.125.229:8081'

axios.interceptors.request.use(config => {
  NProgress.start()
  return config
})

axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
