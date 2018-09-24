import Vuex from 'vuex';

const store = new Vuex.Store({
  state: {
    funds: 10000,
  },
  mutations: {
    depositFunds(state) {
      state.funds += value;
    },
  },
});

export default store;
