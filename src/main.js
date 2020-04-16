
import Vue from 'vue';
import App from './App';
import titleMixin from './util/title';
import descriptionMixin from './util/description' ;
import router from './router';
import VueAnalytics from 'vue-analytics';
import './assets/style/style.scss';
import './assets/style/util.scss';
import Vuetify from 'vuetify';
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;
Vue.mixin(titleMixin);
Vue.mixin(descriptionMixin);
Vue.use(VueAnalytics, {
  id: 'UA-XXX-X',
  router
});
Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
Vue.config.devtools = true;
