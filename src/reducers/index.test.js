import rootReducer from ".";

describe("rootReducer", () => {
  it("initializes the default state", () => {
    expect(rootReducer({ balance: 0, bitcoin: {} }, {})).toEqual({
      balance: [], //Weird
      bitcoin: {}
    });
  });
});
