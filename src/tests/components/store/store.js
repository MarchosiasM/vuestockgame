import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Vuex);

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
  actions: {
    sellStocks: jest.fn(),
    buyStocks: jest.fn(),
  },
});

const exports = { localVue, store };

export default exports;