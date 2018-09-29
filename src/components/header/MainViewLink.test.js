import React from "react";
import { shallow } from "enzyme";
import MainViewLink from "./MainViewLink";
import Link from "./Link";

const createTestProps = () => ({
  href: "",
  className: "",
  children: ""
});

describe("<MainViewLink />", () => {
  it("should render <Link />", () => {
    const wrapper = shallow(<MainViewLink {...createTestProps()} />);
    expect(wrapper.find(Link)).toHaveLength(1);
  });
});
