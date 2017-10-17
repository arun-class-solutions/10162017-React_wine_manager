import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import WineList from "../WineList";

configure({ adapter: new Adapter() });

describe("WINE LIST COMPONENT", () => {

  it("Should match snapshot", () => {
    expect(shallow(<WineList />)).toMatchSnapshot();
  });

});
