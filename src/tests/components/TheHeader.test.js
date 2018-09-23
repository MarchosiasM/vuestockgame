import { mount } from '@vue/test-utils';
import TheHeader from '../../Components/TheHeader.vue';

describe('Component', () => {
  const wrapper = mount(TheHeader);
  it('renders properly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('initializes with funds equal to 10,000', () => {
    expect(wrapper.vm.funds).toEqual(10000);
  })
});
