import { mount } from '@vue/test-utils';
import AppStocks from '../../Components/AppStocks.vue';
import stateObj from './store/store';

const { store: impStore, localVue } = stateObj;

let store;

describe('App Stocks', () => {
  beforeEach(() => {
    store = Object.assign(impStore);
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
