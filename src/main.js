import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';
import routes from './routes';
import store from './Store';


Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  routes,
});

new Vue({ //eslint-disable-line
  el: '#app',
  render: h => h(App),
  router,
  store,
});
