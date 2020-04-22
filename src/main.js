
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
import { createProvider } from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import store from "./store.js";

import VueApollo, { ApolloProvider } from 'vue-apollo';

Vue.config.productionTip = false;

const httpLink = new HttpLink({
  uri: 'https://graphql-harry-potter-api.herokuapp.com/v1alpha1/graphql'
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

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
  store,
  apolloProvider,
  components: { App },
  template: '<App/>'
});
Vue.config.devtools = true;
