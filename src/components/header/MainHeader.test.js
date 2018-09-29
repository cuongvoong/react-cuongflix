import React from "react";
import { shallow } from "enzyme";
import MainHeader from "./MainHeader";
import PrimaryNavigation from "./PrimaryNavigation";
import SecondaryNavigation from "./SecondaryNavigation";
import MainViewLink from "./MainViewLink";

const createTestProps = () => ({
  onSearchInputChange: () => {},
  onSearchBoxClose: () => {},
  onSearchBoxFocus: () => {},
  isSearchBoxFocused: false,
  term: ""
});

describe("<MainHeader />", () => {
  it("should render <MainViewLink />", () => {
    const wrapper = shallow(<MainHeader {...createTestProps()} />);
    expect(wrapper.find(MainViewLink)).toHaveLength(1);
  });

  it("should render <PrimaryNavigation />", () => {
    const wrapper = shallow(<MainHeader {...createTestProps()} />);
    expect(wrapper.find(PrimaryNavigation)).toHaveLength(1);
  });

  it("should render <SecondaryNavigation />", () => {
    const wrapper = shallow(<MainHeader {...createTestProps()} />);
    expect(wrapper.find(SecondaryNavigation)).toHaveLength(1);
  });

  describe("<MainViewLink />", () => {
    it("should have href '/'", () => {
      const wrapper = shallow(<MainHeader {...createTestProps()} />);
      expect(wrapper.find(MainViewLink).props().href).toEqual("/");
    });

    it("should have className 'logo'", () => {
      const wrapper = shallow(<MainHeader {...createTestProps()} />);
      expect(wrapper.find(MainViewLink).props().className).toEqual("logo");
    });

    it("should have logo image as children", () => {
      const wrapper = shallow(<MainHeader {...createTestProps()} />);
      expect(wrapper.find(MainViewLink).props().children).toEqual(
        <img alt="logo" src="logo.svg" />
      );
    });
  });
});
