import { mount } from '@vue/test-utils';
import AppHome from '../../Components/AppHome.vue';

describe('Home element', () => {
  it('renders correctly', () => {
    const wrapper = mount(AppHome);
    expect(wrapper.element).toMatchSnapshot();
  });
});
