import React from "react";
import { shallow } from "enzyme";
import { Wallet } from "./Wallet";
import { findByTextAttr } from "../test/testUtils";

describe("Wallet", () => {
  const mockDeposit = jest.fn();
  const mockSubtract = jest.fn();
  const balance = 20;
  const props = {
    balance,
    addBalance: mockDeposit,
    subtractBalance: mockSubtract
  };
  const wallet = shallow(<Wallet {...props} />);

  it("renders without error", () => {
    const wrapper = findByTextAttr(wallet, "wallet-component");
    expect(wrapper.exists()).toBe(true);
  });

  it("displays balance from props ", () => {
    const balanceElement = findByTextAttr(wallet, "balance-element");
    expect(balanceElement.text()).toEqual(balance.toString());
  });

  it("creates an input to add or subtract from a balance ", () => {
    const inputElement = findByTextAttr(wallet, "input-element");
    expect(inputElement.exists()).toBe(true);
  });

  describe("when user types into the wallet input", () => {
    const userBalance = "30";

    beforeEach(() => {
      const inputElement = findByTextAttr(wallet, "input-element");
      inputElement.simulate("change", { target: { value: userBalance } });
    });

    it("updates the local wallet balance in 'state' and converts into number", () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });

    describe("and the user want to add to a balance", () => {
      beforeEach(() => {
        const addButtonElement = findByTextAttr(wallet, "add-button");
        addButtonElement.simulate("click");
      });
      it("dispatches 'addBalance()' received from props with local balance", () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });

    describe("and the user want to subtract from a balance", () => {
      beforeEach(() => {
        const subtractButtonElement = findByTextAttr(wallet, "subtract-button");
        subtractButtonElement.simulate("click");
      });
      it("dispatches 'subtractBalance()' received from props with local balance", () => {
        expect(mockSubtract).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
  });
});
