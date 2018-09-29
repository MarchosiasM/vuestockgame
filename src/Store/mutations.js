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
      const dayState = diceRoll(60);
      switch (dayState) {
        case (0):
          newPrices[key] /= 6;
          break;
        case (1): case (2): case (3):
          newPrices[key] /= 2;
          break;
        case (4): case (5): // Big good
          newPrices[key] *= 2;
          break;
        case (7): case (8): case (9): case (10): case (11):
        case (12): case (13): case (14): case (15): // Solid bump
          newPrices[key] += diceRoll(30);
          break;
        case (16): case (17): case (18): case (19): case (20): case (21):
          newPrices[key] -= diceRoll(20);
          break;
        default:
          newPrices[key] += diceRoll(30) - diceRoll(25);
      }
    });
    state.prices = Object.assign({}, newPrices);
  },
};
