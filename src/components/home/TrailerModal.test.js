import React from "react";
import { shallow } from "enzyme";
import TrailerModal from "./TrailerModal";
import YouTube from "react-youtube";

describe("<TrailerModal />", () => {
  it("should not render <YouTube /> when props.trailer is null>", () => {
    const trailer = null;
    const wrapper = shallow(<TrailerModal trailer={trailer} />);
    expect(wrapper.find(YouTube)).toHaveLength(0);
  });

  it("should render <YouTube />>", () => {
    const trailer = {
      id: "5ac7d2f30e0a264977030b92",
      iso_639_1: "en",
      iso_3166_1: "US",
      key: "UL29y0ah92w",
      name: "Official Trailer",
      site: "YouTube",
      size: 1080,
      type: "Trailer"
    };
    const wrapper = shallow(<TrailerModal trailer={trailer} />);
    expect(wrapper.find(YouTube)).toHaveLength(1);
  });
});
