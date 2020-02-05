import * as constants from "../actions/constants";

const bitcoinReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.FETCH_BITCOIN:
      return action.bitcoin;
    default:
      return state;
  }
};

export default bitcoinReducer;
