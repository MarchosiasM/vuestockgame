import TheHeader from './Components/TheHeader.vue';
import AppHome from './Components/AppHome.vue';
import AppStocks from './Components/AppStocks.vue';

const routes = [
  {
    path: '',
    name: 'home',
    components: {
      default: AppHome,
      'header-top': TheHeader,
    },
  },
  {
    path: '/stocks',
    name: 'stocks',
    components: {
      default: AppStocks,
      'header-top': TheHeader,
    },
  },
  {
    path: '*',
    redirect: '/',
  },
];

export default routes;
