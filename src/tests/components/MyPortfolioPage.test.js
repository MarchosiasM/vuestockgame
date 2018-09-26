import { mount } from '@vue/test-utils';
import MyPortfolioPage from '../../Components/MyPortfolioPage.vue';
import storeObj from './store/store';

const { store: impStore, localVue } = storeObj;

let store;

describe('MyPortfolioPage', () => {
  beforeEach(() => {
    store = Object.assign(impStore);
  });
  it('renders correctly', () => {
    const wrapper = mount(MyPortfolioPage, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
  });
  it('renders a daughter element for each company the player has', () => {
    const wrapper = mount(MyPortfolioPage, { store, localVue });
    const { personalPortfolio } = store.state;
    const stocksCards = wrapper.findAll('.my-portfolio-card');
    expect(stocksCards.wrappers).toHaveLength(Object.keys(personalPortfolio).length);
  });
});
