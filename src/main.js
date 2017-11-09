// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
import App from './App'
import router from './router'

Raven
  .config('https://60f9e820eb7b4a8f9beb62a314b1f80d@sentry.io/242345')
  .addPlugin(RavenVue, Vue)
  .install()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
