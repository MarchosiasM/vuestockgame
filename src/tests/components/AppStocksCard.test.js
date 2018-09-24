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
      handleSubmit: jest.fn(),
    };
    store = new Vuex.Store({
      state: {},
      actions,
    });
  });
  it('renders properly', () => {
    const wrapper = shallowMount(StockCard, { store, localVue });
    wrapper.setProps({
      name: 'Pied Piper',
      value: 26,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  it('takes a prop with information and renders that information to a card', () => {
    const wrapper = shallowMount(StockCard, { store, localVue });
    wrapper.setProps({
      name: 'Pied Piper',
      value: 26,
    });
    expect(wrapper.html()).toContain('Pied Piper');
    expect(wrapper.html()).toContain('26');
  });
  it('accepts a numerical value in an input, then when you submit submits an action the store', () => {
    const wrapper = shallowMount(StockCard, { store, localVue });
    wrapper.setProps({
      name: 'Pied Piper',
      value: 26,
    });
    const input = wrapper.find('input');
    input.element.value = 'Testing';
    const button = wrapper.find('button');
    button.trigger('click');
    expect(actions.handleSubmit).toHaveBeenCalled();
  });
});
