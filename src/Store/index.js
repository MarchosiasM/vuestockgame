import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    funds: 10000,
    personalPortfolio: [],
    companies: [
      {
        index: 1,
        name: 'google',
        price: 130,
      },
      {
        index: 2,
        name: 'amd',
        price: 130,
      },
      {
        index: 3,
        name: 'tesla',
        price: 130,
      },
      {
        index: 4,
        name: 'yahoo',
        price: 130,
      },
    ],
  },
  mutations: {
    depositFunds(state, value) {
      state.funds += value;
    },
    withdrawFunds(state, value) {
      state.funds -= value;
    },
    addStocks(state, payload) {
      if (state.personalPortfolio[payload.name] === undefined) {
        state.personalPortfolio.push(payload);
      } else {
        state.personalPortfolio[payload.name].count += payload.count;
      }
    },
  },
  actions: {
    depositFunds(context, payload) {
      context.commit('depositFunds', payload.value);
    },
    buyStocks(context, payload) {
      if (payload.count < 0) {
        return;
      }
      const price = payload.count * payload.price;
      context.commit('withdrawFunds', price);
      context.commit('addStocks', {
        name: payload.name,
        amount: payload.count,
      });
    },
  },
});

export default store;
