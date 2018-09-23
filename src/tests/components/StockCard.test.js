import { mount } from '@vue/test-utils';
import StockCard from '../../Components/StockCard.vue';

describe('Stock card', () => {
  const wrapper = mount(StockCard);
  it('renders properly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
