import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AppStocks from '../../Components/AppStocks.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

let store;

describe('App Stocks', () => {
  beforeEach(() => {
    store = new Vuex.Store({
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
    });
  });
  it('renders correctly', () => {
    const wrapper = mount(AppStocks, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
  });
  it('renders one "AppStocksCard" component for every Company in the state', () => {
    const wrapper = mount(AppStocks, { store, localVue });
    const { companies } = store.state;
    const stocksCards = wrapper.findAll('.app-stocks-card');
    expect(stocksCards.wrappers).toHaveLength(companies.length);
  });
});
