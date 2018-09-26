const getters = {
  funds: state => state.funds,
  personalPortfolio: state => state.personalPortfolio,
  companies: state => state.companies,
  prices: state => state.prices,
  update: state => state.update,
  fullPortfolioData: (state) => {
    const { personalPortfolio, prices } = state;
    return Object.keys(personalPortfolio).map(key => ({
      name: key,
      index: personalPortfolio[key].index,
      count: personalPortfolio[key].count,
      price: prices[key],
    }));
  },
  fullCompanyData: (state) => {
    const { companies, prices } = state;
    return Object.keys(companies).map(key => ({
      name: key,
      index: companies[key].index,
      price: prices[key],
    }));
  },
};

export default getters;
