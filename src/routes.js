import TheHeader from './Components/TheHeader.vue';
import AppHome from './Components/AppHome.vue';
import AppStocks from './Components/AppStocks.vue';
import MyPortfolioPage from './Components/MyPortfolioPage.vue';

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
    path: '/portfolio',
    name: 'portfolio',
    components: {
      default: MyPortfolioPage,
      'header-top': TheHeader,
    },
  },
  {
    path: '*',
    redirect: '/',
  },
];

export default routes;
