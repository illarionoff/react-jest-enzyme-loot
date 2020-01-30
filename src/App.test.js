import React from "react";
import { shallow } from "enzyme";
import App from "./App";

import { findByTextAttr } from "./test/testUtils";

test("renders without error", () => {
  const app = shallow(<App />);
  const wrapper = findByTextAttr(app, "app-component");
  expect(wrapper.length).toEqual(1);
});
