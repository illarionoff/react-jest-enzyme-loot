import * as constants from "../actions/constants";

const initialState = {
  balance: 0
};

const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_BALANCE:
      return {
        ...state,
        balance: action.balance
      };
    case constants.ADD_BALANCE:
      return {
        ...state,
        balance: state.balance + action.balance
      };
    case constants.SUBTRACT_BALANCE:
      return {
        ...state,
        balance: state.balance - action.balance
      };
    default:
      return state;
  }
};

export default balanceReducer;
