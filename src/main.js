import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';
import store from './Store';


Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

new Vue({ //eslint-disable-line
  el: '#app',
  render: h => h(App),
  router,
  store,
});
