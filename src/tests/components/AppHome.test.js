import { mount } from '@vue/test-utils';
import AppHome from '../../Components/AppHome.vue';
import storeObj from './store/store';

const { store: impStore, localVue } = storeObj;

let store;

describe('Home element', () => {
  beforeEach(() => {
    store = Object.assign(impStore);
  });
  it('renders correctly', () => {
    const wrapper = mount(AppHome, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
  });
});
