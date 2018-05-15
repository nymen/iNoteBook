// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'
/*import VueHtml5Editor from 'vue-html5-editor'
import Options from '@/common/config/htmlEditorConf'*/

fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)

//1. font awesome component configuration
Vue.component('font-awesome-icon', FontAwesomeIcon)

//2. html5 editor plugin configuration
//Vue.use(VueHtml5Editor, Options)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
