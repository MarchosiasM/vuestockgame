const actions = {
  depositFunds(context, payload) {
    context.commit('depositFunds', payload.value);
  },
  buyStocks(context, payload) {
    const {
      name, count, price, index,
    } = payload;
    if (count < 0) {
      console.log('Unable to complete sale');
      return;
    }
    context.commit('withdrawFunds', count * price);
    context.commit('changeStocks', {
      index,
      name,
      count: parseInt((count), 10),
    });
  },
  sellStocks(context, payload) {
    const { personalPortfolio } = context.state;
    const {
      name, count, price, index,
    } = payload;
    if (count < 0 || count > personalPortfolio[name].count) {
      console.log('Unable to complete sale');
      return;
    }
    context.commit('depositFunds', count * price);
    context.commit('changeStocks', {
      index,
      name,
      count: (-1) * parseInt((count), 10),
    });
  },
  nextDay({ commit }) {
    commit('nextDay');
  },
};

export default actions;
