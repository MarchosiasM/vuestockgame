import mutations from '../../../Store/mutations';
import storeObj from './store';

describe('Mutations', () => {
  let originalFunds;
  let state;
  let value;
  beforeEach(() => {
    originalFunds = 10000;
    state = storeObj.createNewState();
    value = Math.floor(Math.random() * 100);
  });
  afterEach(() => {
    originalFunds = undefined;
    state = undefined;
    value = undefined;
  });
  describe('Deposit funds', () => {
    it('Adds the appropriate amount of funds to the state', () => {
      mutations.depositFunds(state, value);
      expect(state.funds).toEqual(originalFunds + value);
    });
  });
  describe('Withdraw funds', () => {
    it('Subtracts the appropriate amount of funds to the state', () => {
      mutations.withdrawFunds(state, value);
      expect(state.funds).toEqual(originalFunds - value);
    });
  });
  let testPayload;
  let payload;
  let personalPortfolio;
  describe('changeStocks', () => {
    beforeEach(() => {
      testPayload = {
        index: 4,
        name: 'testy',
        count: 3,
      };
      payload = {
        index: 1,
        name: 'google',
        count: 3,
      };
      state = storeObj.createNewState();
      personalPortfolio = state.personalPortfolio; //eslint-disable-line
    });
    it('adds a new entry to personal portfolio if there isn\'t one there', () => {
      expect(personalPortfolio.testy).toBeUndefined();
      mutations.changeStocks(state, testPayload);
      expect(personalPortfolio.google).not.toBeUndefined();
    });
    it('adds the appropriate amount of stocks to the portfolio when the entry is there', () => {
      expect(personalPortfolio.google.count).toEqual(30);
      mutations.changeStocks(state, payload);
      expect(personalPortfolio.google.count).toEqual(33);
    });
    it('subtracts the appropriate amount of stocks to the portfolio when the entry is there and the payload is negative', () => {
      expect(personalPortfolio.google.count).toEqual(30);
      payload.count *= -1;
      mutations.changeStocks(state, payload);
      expect(personalPortfolio.google.count).toEqual(27);
    });
  });

  describe('nextDay()', () => {
    it('Should change the prices in the price object', () => {
      const { prices } = state;
      const priceSnapshot = JSON.parse(JSON.stringify(prices));
      expect(priceSnapshot).not.toBe(state.prices);
      expect(priceSnapshot).toEqual(state.prices);
      mutations.nextDay(state);
      expect(state.prices).not.toEqual(priceSnapshot);
    });
  });
});
