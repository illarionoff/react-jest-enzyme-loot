import * as constants from "./constants";

export const setBalance = balance => {
  return {
    type: constants.SET_BALANCE,
    balance
  };
};

export const addBalance = balance => {
  return {
    type: constants.ADD_BALANCE,
    balance
  };
};

export const subtractBalance = balance => {
  return {
    type: constants.SUBTRACT_BALANCE,
    balance
  };
};
