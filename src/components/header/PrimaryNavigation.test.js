import React from "react";
import { shallow } from "enzyme";
import PrimaryNavigation from "./PrimaryNavigation";
import MainViewLink from "./MainViewLink";

describe("<PrimaryNavigation />", () => {
  it("should render 3 <MainViewLink />", () => {
    const wrapper = shallow(<PrimaryNavigation />);
    expect(wrapper.find(MainViewLink)).toHaveLength(3);
  });

  it("should have a first <MainViewLink /> with props href='/'", () => {
    const wrapper = shallow(<PrimaryNavigation />);
    expect(
      wrapper
        .find(MainViewLink)
        .at(0)
        .props().href
    ).toEqual("/");
  });

  it("should have a first <MainViewLink /> with children equal 'Home'", () => {
    const wrapper = shallow(<PrimaryNavigation />);
    expect(
      wrapper
        .find(MainViewLink)
        .at(0)
        .props().children
    ).toEqual("Home");
  });

  it("should have a second <MainViewLink /> with props href='/tvshows'", () => {
    const wrapper = shallow(<PrimaryNavigation />);
    expect(
      wrapper
        .find(MainViewLink)
        .at(1)
        .props().href
    ).toEqual("/tvshows");
  });

  it("should have a second <MainViewLink /> with children equal 'TV Shows'", () => {
    const wrapper = shallow(<PrimaryNavigation />);
    expect(
      wrapper
        .find(MainViewLink)
        .at(1)
        .props().children
    ).toEqual("TV Shows");
  });

  it("should have a third <MainViewLink /> with props href='/movies'", () => {
    const wrapper = shallow(<PrimaryNavigation />);
    expect(
      wrapper
        .find(MainViewLink)
        .at(2)
        .props().href
    ).toEqual("/movies");
  });

  it("should have a third <MainViewLink /> with children equal 'Movies'", () => {
    const wrapper = shallow(<PrimaryNavigation />);
    expect(
      wrapper
        .find(MainViewLink)
        .at(2)
        .props().children
    ).toEqual("Movies");
  });
});
