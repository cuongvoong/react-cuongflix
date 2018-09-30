import React from "react";
import { shallow } from "enzyme";
import ViewDetailsButton from "./ViewDetailsButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

describe("<ViewDetailsButton />", () => {
  it("should render <a>", () => {
    const wrapper = shallow(<ViewDetailsButton />);
    expect(wrapper.find("a")).toHaveLength(1);
  });

  it("should render <a> with .details-link", () => {
    const wrapper = shallow(<ViewDetailsButton />);
    expect(wrapper.find("a").hasClass("details-link")).toEqual(true);
  });

  it("should render <span> with 'View Details'", () => {
    const wrapper = shallow(<ViewDetailsButton />);
    expect(wrapper.find("span.flat-button-text").text()).toEqual(
      "View Details"
    );
  });
});
