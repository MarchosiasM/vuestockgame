import { mount } from '@vue/test-utils';
import TheHeader from '../../Components/TheHeader.vue';
import storeObj from './store/store';

const { store: impStore, localVue } = storeObj;

let store;
let stubs;

describe('Component', () => {
  beforeEach(() => {
    store = Object.assign(impStore);
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
    expect(wrapper.html()).toContain(10000);
  });
});
