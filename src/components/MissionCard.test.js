import React from "react";
import { shallow, mount, render } from "enzyme";
import MissionCard from "./MissionCard";
import "../setupTest.js";

describe("MissionCard", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MissionCard />);

    expect(component).toMatchSnapshot();
  });
});
