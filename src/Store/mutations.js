import Vue from 'vue';

const diceRoll = multiplier => Math.floor(Math.random() * multiplier);

export default {
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
      Vue.set(personalPortfolio, name, payload);
    } else {
      const extract = personalPortfolio[name];
      extract.count += count;
      Vue.set(personalPortfolio, name, extract);
    }
  },
  nextDay(state) {
    state.day += 1;
    const newPrices = JSON.parse(JSON.stringify(state.prices));
    Object.keys(newPrices).forEach((key) => {
      if (diceRoll(20) === 1 && newPrices[key] > 90) {
        newPrices[key] += diceRoll(30) - diceRoll(100);
      } else {
        newPrices[key] += diceRoll(30) - diceRoll(25);
      }
    });
    state.prices = Object.assign({}, newPrices);
  },
};
