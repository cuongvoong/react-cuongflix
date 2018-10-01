import React from "react";
import { shallow, mount } from "enzyme";
import PlayTrailerButton from "./PlayTrailerButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

describe("<PlayTrailerButton />", () => {
  it("should render <a>", () => {
    const wrapper = shallow(<PlayTrailerButton />);
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("should render <a> with .trailer-link", () => {
    const wrapper = shallow(<PlayTrailerButton />);
    expect(wrapper.find("button").hasClass("trailer-link")).toEqual(true);
  });

  it("should render a 'Play' icon", () => {
    const wrapper = shallow(<PlayTrailerButton />);
    expect(wrapper.find(FontAwesomeIcon).prop("icon").iconName).toEqual("play");
    expect(wrapper.find(FontAwesomeIcon).prop("icon").prefix).toEqual("fas");
  });

  it("should render <span> with 'Play Trailer'", () => {
    const wrapper = shallow(<PlayTrailerButton />);
    expect(wrapper.find("span.flat-button-text").text()).toEqual(
      "Play Trailer"
    );
  });

  it("should call onPlayTrailerClick() on click", () => {
    const onPlayTrailerClick = jest.fn();
    const wrapper = mount(
      <PlayTrailerButton onPlayTrailerClick={onPlayTrailerClick} />
    );

    wrapper.find(".trailer-link").simulate("click");
    expect(onPlayTrailerClick).toHaveBeenCalledTimes(1);
  });
});
