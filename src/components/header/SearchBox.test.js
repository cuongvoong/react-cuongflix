import React from "react";
import SearchBox from "./SearchBox";
import { shallow } from "enzyme";

describe("<SearchBox />", () => {
  it("renders button with '.searchTab'", () => {
    const wrapper = shallow(<SearchBox />);
    const button = wrapper.find("button");
    expect(button.hasClass("searchTab")).toEqual(true);
  });

  it("hides button '.searchTab' when clicked", () => {
    const onSearchBoxFocus = jest.fn();

    const wrapper = shallow(<SearchBox onSearchBoxFocus={onSearchBoxFocus} />);
    const button = wrapper.find("button.searchTab");
    button.simulate("click");
    expect(wrapper.find("button.searchTab")).toHaveLength(0);
  });

  it("search input is hidden", () => {
    const wrapper = shallow(<SearchBox />);
    expect(wrapper.find(".searchBox-input")).toHaveLength(0);
  });

  it("shows input field when clicked", () => {
    const onSearchBoxFocus = jest.fn();

    const wrapper = shallow(<SearchBox onSearchBoxFocus={onSearchBoxFocus} />);
    const button = wrapper.find("button.searchTab");
    button.simulate("click");
    expect(wrapper.find(".searchBox-input")).toHaveLength(1);
  });

  it("should call onChange prop", () => {
    const onSearchInputChangeMock = jest.fn();
    const event = {
      target: {
        value: "search term"
      }
    };

    const wrapper = shallow(
      <SearchBox onSearchInputChange={onSearchInputChangeMock} />
    );
    wrapper.setState({ isUserFocusing: true });
    wrapper.find(".searchBox-input").simulate("change", event);
    expect(onSearchInputChangeMock).toBeCalledWith(event);
  });
});
