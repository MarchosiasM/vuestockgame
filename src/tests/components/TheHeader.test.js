import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import TheHeader from '../../Components/TheHeader.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

let store;
let stubs;

describe('Component', () => {
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        funds: 10000,
        personalPortfolio: [],
      },
    });
    stubs = ['router-link'];
  });
  it('renders properly', () => {
    const wrapper = mount(TheHeader, {
      stubs, store, localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('initializes with funds equal to 10,000', () => {
    const wrapper = mount(TheHeader, {
      stubs, store, localVue,
    });
    expect(wrapper.vm.funds).toEqual(10000);
  });
});
