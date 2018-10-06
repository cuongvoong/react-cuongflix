import React from "react";
import { shallow } from "enzyme";
import PrimaryNavigation from "./PrimaryNavigation";
import MainViewLink from "./MainViewLink";

describe("<PrimaryNavigation />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <PrimaryNavigation.WrappedComponent location={{ pathname: "/" }} />
    );
  });

  it("should render 3 <MainViewLink />", () => {
    expect(wrapper.find(MainViewLink)).toHaveLength(3);
  });

  it("should have a first <MainViewLink /> with props href='/'", () => {
    expect(
      wrapper
        .find(MainViewLink)
        .at(0)
        .props().href
    ).toEqual("/");
  });

  it("should have a first <MainViewLink /> with children equal 'Home'", () => {
    expect(
      wrapper
        .find(MainViewLink)
        .at(0)
        .props().children
    ).toEqual("Home");
  });

  it("should have a second <MainViewLink /> with props href='/tvshows'", () => {
    expect(
      wrapper
        .find(MainViewLink)
        .at(1)
        .props().href
    ).toEqual("/tvshows");
  });

  it("should have a second <MainViewLink /> with children equal 'TV Shows'", () => {
    expect(
      wrapper
        .find(MainViewLink)
        .at(1)
        .props().children
    ).toEqual("TV Shows");
  });

  it("should have a third <MainViewLink /> with props href='/movies'", () => {
    expect(
      wrapper
        .find(MainViewLink)
        .at(2)
        .props().href
    ).toEqual("/movies");
  });

  it("should have a third <MainViewLink /> with children equal 'Movies'", () => {
    expect(
      wrapper
        .find(MainViewLink)
        .at(2)
        .props().children
    ).toEqual("Movies");
  });
});
