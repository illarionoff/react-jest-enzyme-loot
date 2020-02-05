import * as constants from "../actions/constants";
import { read_cookie, bake_cookie } from "sfcookies";

const initialState = {
  balance: 0
};

const BALANCE_COOKIE = "BALANCE_COOKIE";

const balanceReducer = (state = initialState, action) => {
  let balanceState;
  switch (action.type) {
    case constants.SET_BALANCE:
      balanceState = {
        ...state,
        balance: action.balance
      };
      break;
    case constants.ADD_BALANCE:
      balanceState = {
        ...state,
        balance: state.balance + action.balance
      };
      break;
    case constants.SUBTRACT_BALANCE:
      balanceState = {
        ...state,
        balance: state.balance - action.balance
      };
      break;
    default:
      balanceState = read_cookie(BALANCE_COOKIE) || state;
  }
  bake_cookie(BALANCE_COOKIE, balanceState);
  return balanceState;
};

export default balanceReducer;
