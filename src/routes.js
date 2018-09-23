import TheHeader from './Components/TheHeader.vue';
import AppHome from './Components/AppHome,vue';

const routes = [
  {
    path: '',
    name: 'home',
    components: {
      default: Home,
      'header-top': TheHeader,
    },
  },
];

export default routes;
