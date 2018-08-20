
import Vue from 'vue'
import App from './App'
import titleMixin from './util/title' 
import descriptionMixin from './util/description' 
import router from './router'
import VueAnalytics from 'vue-analytics'
import './assets/style/style.scss'
import './assets/style/buble.scss'
import ElementUI  from 'element-ui'
import locale     from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, {locale});


Vue.config.productionTip = false
Vue.mixin(titleMixin)
Vue.mixin(descriptionMixin)
Vue.use(VueAnalytics, {
  id: 'UA-XXX-X',
  router
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
