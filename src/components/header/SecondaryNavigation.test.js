import React from "react";
import { shallow } from "enzyme";
import SecondaryNavigation from "./SecondaryNavigation";
import SearchBox from "./SearchBox";

const createTestProps = () => ({
  onSearchInputChange: () => {},
  onSearchBoxClose: () => {},
  onSearchBoxFocus: () => {},
  isSearchBoxFocused: false,
  term: ""
});

describe("<SecondaryNavigation />", () => {
  it("should render <SearchBox />", () => {
    const wrapper = shallow(<SecondaryNavigation {...createTestProps()} />);
    expect(wrapper.find(SearchBox)).toHaveLength(1);
  });
});
