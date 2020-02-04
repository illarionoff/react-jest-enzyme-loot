import balanceReducer from "./balance";
import * as constants from "../actions/constants";

describe("balance reducer", () => {
  it("sets a balance", () => {
    const expectedResult = {
      balance: 10
    };
    const initialState = {
      balance: 0
    };

    const action = {
      type: constants.SET_BALANCE,
      balance: 10
    };
    expect(balanceReducer(initialState, action)).toEqual(expectedResult);
  });

  it("adds to a balance", () => {
    const initialState = {
      balance: 10
    };

    const action = {
      type: constants.ADD_BALANCE,
      balance: 10
    };

    const expectedResult = {
      balance: initialState.balance + action.balance
    };

    expect(balanceReducer(initialState, action)).toEqual(expectedResult);
  });

  it("substract from a balance", () => {
    const initialState = {
      balance: 20
    };

    const action = {
      type: constants.SUBTRACT_BALANCE,
      balance: 10
    };

    const expectedResult = {
      balance: initialState.balance - action.balance
    };

    expect(balanceReducer(initialState, action)).toEqual(expectedResult);
  });
});
