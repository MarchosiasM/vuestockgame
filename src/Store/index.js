import Vuex from 'vuex';
import Vue from 'vue';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    day: 0,
    saveStates: {

    },
    funds: 10000,
    personalPortfolio: {},
    prices: {
      google: 130,
      amd: 130,
      tesla: 130,
      yahoo: 130,
    },
    companies: {
      google: {
        index: 1,
        name: 'google',
      },
      amd: {
        index: 2,
        name: 'amd',
      },
      tesla: {
        index: 3,
        name: 'tesla',
      },
      yahoo: {
        index: 4,
        name: 'yahoo',
      },
    },
  },
  getters,
  mutations,
  actions,
});

export default store;
