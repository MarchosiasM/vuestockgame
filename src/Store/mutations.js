const mutations = {
  depositFunds(state, value) {
    state.funds += value;
  },
  withdrawFunds(state, value) {
    state.funds -= value;
  },
  changeStocks(state, payload) {
    const { personalPortfolio } = state;
    const { name, count } = payload;
    if (personalPortfolio[name] === undefined) {
      personalPortfolio[name] = payload;
    } else {
      const extract = personalPortfolio[name];
      extract.count += count;
      personalPortfolio[name] = extract;
    }
  },
};

export default mutations;
