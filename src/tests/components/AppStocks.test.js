import { mount } from '@vue/test-utils';
import AppStocks from '../../Components/AppStocks.vue';

describe('App Stocks', () => {
  it('renders correctly', () => {
    const wrapper = mount(AppStocks);
    expect(wrapper.element).toMatchSnapshot();
  });
});
