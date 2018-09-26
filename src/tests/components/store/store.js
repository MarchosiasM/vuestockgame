import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import impActions from '../../../Store/actions';
import getters from '../../../Store/getters';
import mutations from '../../../Store/mutations';
import impStore from '../../../Store';


const localVue = createLocalVue();
localVue.use(Vuex);

const actions = Object.assign(impActions, {
  sellStocks: jest.fn(),
  buyStocks: jest.fn(),
});

const { state: impState } = impStore;
const newState = JSON.parse(JSON.stringify(impState));
const store = new Vuex.Store({
  state: {
    ...newState,
    personalPortfolio: {
      google: {
        index: 1,
        name: 'google',
        count: 30,
      },
      amd: {
        index: 2,
        name: 'amd',
        count: 350,
      },
      tesla: {
        index: 3,
        name: 'tesla',
        count: 50,
      },
    },
  },
  actions,
  getters,
  mutations,
});

const createNewState = () => {
  const { state } = store;
  const stateObj = JSON.parse(JSON.stringify(state));
  return stateObj;
};

const exports = {
  localVue, store, actions, createNewState,
};

export default exports;
