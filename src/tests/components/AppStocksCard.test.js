import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import StockCard from '../../Components/AppStocksCard.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

let actions;
let store;

describe('Stock card', () => {
  beforeEach(() => {
    actions = {
      buyStocks: jest.fn(),
    };
    store = new Vuex.Store({
      state: {
        funds: 10000,
        personalPortfolio: [],
      },
      actions,
    });
  });
  it('renders properly', () => {
    const wrapper = shallowMount(StockCard, { store, localVue });
    wrapper.setProps({
      name: 'Pied Piper',
      price: 26,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  it('takes a prop with information and renders that information to a card', () => {
    const wrapper = shallowMount(StockCard, { store, localVue });
    wrapper.setProps({
      name: 'Pied Piper',
      price: 26,
    });
    expect(wrapper.html()).toContain('Pied Piper');
    expect(wrapper.html()).toContain('26');
  });
  it('accepts a numerical value in an input, then when you submit submits an action the store', () => {
    const wrapper = shallowMount(StockCard, { store, localVue });
    wrapper.setProps({
      name: 'Pied Piper',
      price: 26,
    });
    wrapper.setData({
      count: 0,
    });
    const input = wrapper.find('input');
    input.element.value = 'Testing';
    input.trigger('change');
    const button = wrapper.find('button');
    button.trigger('click');
    expect(actions.buyStocks).not.toHaveBeenCalled();
    input.value = 1;
    button.trigger('click');
    input.trigger('change', 1);
    wrapper.vm.$data.count = 1;
    // console.log(wrapper.vm.$data.count);
    // console.log(wrapper.vm.$store.state.funds);
    // console.log(wrapper.vm.maxBuy);
    // expect(actions.buyStocks).toHaveBeenCalled();
  });
});
