import React from "react";
import { shallow } from "enzyme";
import App from "./App";

import { findByTextAttr } from "./test/testUtils";

describe("App component", () => {
  const app = shallow(<App />);
  test("renders without error", () => {
    const wrapper = findByTextAttr(app, "app-component");
    expect(wrapper.length).toEqual(1);
  });
  it("contains connected Wallet component", () => {
    expect(app.find("Connect(Wallet)").exists()).toBe(true);
  });
});
