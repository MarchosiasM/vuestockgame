import { shallowMount } from '@vue/test-utils';
import MyPortfolioCard from '../../Components/MyPortfolioCard.vue';
import storeObj from './store/store';

const { store: impStore, localVue } = storeObj;

let store;

describe('MyPortfolioCard', () => {
  beforeEach(() => {
    store = Object.assign(impStore);
  });
  it('renders correctly', () => {
    const wrapper = shallowMount(MyPortfolioCard, { localVue, store });
    wrapper.setProps({
      name: 'Pied Piper',
      price: 26,
      count: 30,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  it('displays correct information passed down as props', () => {
    const wrapper = shallowMount(MyPortfolioCard, { localVue, store });
    wrapper.setProps({
      name: 'Pied Piper',
      price: 26,
      count: 30,
    });
    expect(wrapper.html()).toContain('Pied Piper');
    expect(wrapper.html()).toContain(26);
  });
});
