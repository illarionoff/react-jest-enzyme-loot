import React from "react";
import { shallow } from "enzyme";
import { Loot } from "./Loot";
import { findByTextAttr } from "../test/testUtils";

describe("Loot", () => {
  const mockFetch = jest.fn();
  const bitcoin = 10;
  const props = { fetchBitcoin: mockFetch, bitcoin };
  const loot = shallow(<Loot {...props} />);

  it("redners without error", () => {
    const lootElement = findByTextAttr(loot, "loot-component");
    expect(lootElement.length).toEqual(1);
  });
  it("fetches data on mount", () => {
    expect(mockFetch).toHaveBeenCalled();
  });

  it("displays balance from props ", () => {
    const bitcoinElement = findByTextAttr(loot, "bitcoin-element");
    expect(bitcoinElement.text()).toEqual(bitcoin.toString());
  });
});
