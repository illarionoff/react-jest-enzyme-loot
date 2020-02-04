import * as constants from "./constants";
import * as actions from "./balance";

it("creates an actions to set balance", () => {
  const balance = 0;
  const expectedActions = { type: constants.SET_BALANCE, balance };
  expect(actions.setBalance(balance)).toEqual(expectedActions);
});

it("creates an action to add to balance ", () => {
  const balance = 10;
  const expectedActions = { type: constants.ADD_BALANCE, balance };
  expect(actions.addBalance(balance)).toEqual(expectedActions);
});

it("creates an action to subtract to balance ", () => {
  const balance = 10;
  const expectedActions = { type: constants.SUBTRACT_BALANCE, balance };
  expect(actions.subtractBalance(balance)).toEqual(expectedActions);
});
